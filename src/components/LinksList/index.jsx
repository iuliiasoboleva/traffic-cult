import React, { useState } from 'react';

import linkIcon from '../../assets/images/icons/link.svg';
import { formatCurrency } from '../../helpers';
import DropdownMenu from '../DropdownMenu';
import {
  ActionBtn,
  ScrollWrapper,
  ShowMoreButton,
  Table,
  Td,
  TdCenter,
  TdLink,
  Th,
} from './styles';

const sortItems = (items, key, direction) => {
  const sorted = [...items].sort((a, b) => {
    const valueA = a[key].toString().replace(/[^\d.-]+/g, '');
    const valueB = b[key].toString().replace(/[^\d.-]+/g, '');

    const isNumeric = !isNaN(valueA) && !isNaN(valueB);

    if (isNumeric) {
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    }

    return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  });

  return sorted;
};

const LinksList = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [openMenu, setOpenMenu] = useState(null);
  const [sort, setSort] = useState({ key: null, direction: 'asc' });

  const handleShowMore = () => setVisibleCount((prev) => prev + 8);

  const handleSort = (key) => {
    setSort((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortedItems = sort.key ? sortItems(items, sort.key, sort.direction) : items;
  const visibleItems = sortedItems.slice(0, visibleCount);

  const handleMenuOpen = (e, linkId) => {
    const btnRect = e.currentTarget.getBoundingClientRect();
    const menuHeight = 160;
    const spaceBelow = window.innerHeight - btnRect.bottom;
    const spaceAbove = btnRect.top;
    const openUp = spaceBelow < menuHeight && spaceAbove > menuHeight;

    setOpenMenu({
      id: linkId,
      position: {
        top: openUp ? btnRect.top + window.scrollY : btnRect.bottom + window.scrollY,
        left: btnRect.right - 160 + window.scrollX,
        openUp,
      },
    });
  };

  const renderSortArrow = (columnKey) => {
    if (sort.key !== columnKey) return '⇅';
    return sort.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <>
      <ScrollWrapper>
        <Table>
          <thead>
            <tr>
              <Th style={{ width: '40px' }}>№</Th>
              <Th style={{ width: '130px' }}>Название</Th>
              <Th style={{ width: '180px' }}>Ссылка</Th>
              <Th style={{ width: '100px' }}>Источник</Th>
              <Th style={{ width: '100px', cursor: 'pointer' }} onClick={() => handleSort('date')}>
                Дата {renderSortArrow('date')}
              </Th>
              <Th
                style={{ width: '120px', cursor: 'pointer' }}
                onClick={() => handleSort('registrations')}
              >
                Регистраций {renderSortArrow('registrations')}
              </Th>
              <Th style={{ width: '100px', cursor: 'pointer' }} onClick={() => handleSort('cost')}>
                Стоимость {renderSortArrow('cost')}
              </Th>
              <Th
                style={{ width: '100px', cursor: 'pointer' }}
                onClick={() => handleSort('profit')}
              >
                Прибыль {renderSortArrow('profit')}
              </Th>
              <Th style={{ width: '80px' }}>Действия</Th>
            </tr>
          </thead>

          <tbody>
            {visibleItems.map((link, index) => (
              <tr key={link.id}>
                <Td>{index + 1}</Td>
                <Td>{link.name}</Td>
                <TdLink>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.url}
                  </a>
                  <img
                    src={linkIcon}
                    alt="copy"
                    onClick={() => navigator.clipboard.writeText(link.url)}
                  />
                </TdLink>
                <Td>{link.source}</Td>
                <Td>{link.date}</Td>
                <Td>{link.registrations}</Td>
                <Td>{formatCurrency(link.cost)}</Td>
                <Td style={{ color: '#27C46A' }}>{'+' + formatCurrency(link.profit)}</Td>
                <TdCenter>
                  <ActionBtn
                    onClick={(e) =>
                      openMenu?.id === link.id ? setOpenMenu(null) : handleMenuOpen(e, link.id)
                    }
                  >
                    ⋯
                  </ActionBtn>
                </TdCenter>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollWrapper>

      {openMenu && (
        <DropdownMenu
          items={[
            {
              label: 'Редактирование',
              icon: '✏️',
              onClick: () => console.log('Редактировать', openMenu.id),
            },
            {
              label: 'Аналитика',
              icon: '📊',
              onClick: () => console.log('Аналитика', openMenu.id),
            },
            {
              label: 'Избранное',
              icon: '⭐',
              onClick: () => console.log('Избранное', openMenu.id),
            },
            { label: 'Архив', icon: '📁', onClick: () => console.log('Архив', openMenu.id) },
          ]}
          position={openMenu.position}
          onClose={() => setOpenMenu(null)}
        />
      )}

      {visibleCount < items.length && (
        <ShowMoreButton onClick={handleShowMore}>Показать все ссылки</ShowMoreButton>
      )}
    </>
  );
};

export default LinksList;

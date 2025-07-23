import React, { useEffect, useState } from 'react';

import linkIcon from '../../assets/images/icons/link.svg';
import switchIcon from '../../assets/images/icons/switch.svg';
import { formatCurrency, sortItems } from '../../helpers';
import DropdownMenu from '../DropdownMenu';
import EditCostModal from '../EditCostModal';
import Modal from '../Modal';
import {
  ActionBtn,
  ScrollWrapper,
  ShowMoreButton,
  Table,
  Td,
  TdCenter,
  TdLink,
  TdProfit,
  Th,
} from './styles';

const LinksList = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [openMenu, setOpenMenu] = useState(null);
  const [sort, setSort] = useState({ key: null, direction: 'asc' });
  const [copiedLinkId, setCopiedLinkId] = useState(null);
  const [modalConfig, setModalConfig] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editableLink, setEditableLink] = useState(null);

  const handleModalClose = () => {
    setModalConfig(null);
  };

  const handleCopy = (url, id) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopiedLinkId(id);
          setTimeout(() => setCopiedLinkId(null), 1500);
        })
        .catch(() => fallbackCopy(url, id));
    } else {
      fallbackCopy(url, id);
    }
  };

  const fallbackCopy = (text, id) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopiedLinkId(id);
        setTimeout(() => setCopiedLinkId(null), 1500);
      }
    } catch (err) {
      console.error('Fallback: Copy failed', err);
    }

    document.body.removeChild(textarea);
  };

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

  useEffect(() => {
    if (modalConfig) {
      setOpenMenu(null);
    }
  }, [modalConfig]);

  const renderSortArrow = (columnKey) => {
    if (sort.key !== columnKey) {
      return <img src={switchIcon} alt="sort" />;
    }

    return <span className="sort-arrow">{sort.direction === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <>
      <ScrollWrapper>
        <Table>
          <thead style={{ height: '50px' }}>
            <tr>
              <Th $center width="40px">
                №
              </Th>
              <Th width="130px">Название</Th>
              <Th width="180px">Ссылка</Th>
              <Th width="100px">Источник</Th>
              <Th sortable onClick={() => handleSort('date')} width="100px">
                <span className="th-content">Дата {renderSortArrow('date')}</span>
              </Th>
              <Th sortable onClick={() => handleSort('registrations')} width="120px">
                <span className="th-content">Регистраций {renderSortArrow('registrations')}</span>
              </Th>
              <Th sortable onClick={() => handleSort('cost')} width="100px">
                <span className="th-content">Стоимость {renderSortArrow('cost')}</span>
              </Th>
              <Th sortable onClick={() => handleSort('profit')} width="100px">
                <span className="th-content">Прибыль {renderSortArrow('profit')}</span>
              </Th>
              <Th width="80px">Действия</Th>
            </tr>
          </thead>

          <tbody>
            {visibleItems.map((link, index) => (
              <tr key={link.id}>
                <TdCenter>{index + 1}</TdCenter>
                <Td>{link.name}</Td>
                <TdLink>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.url}
                  </a>
                  <img
                    src={linkIcon}
                    alt="copy"
                    className={copiedLinkId === link.id ? 'copied' : ''}
                    onClick={() => handleCopy(link.url, link.id)}
                  />
                </TdLink>
                <Td>{link.source}</Td>
                <Td>{link.date}</Td>
                <Td>{link.registrations}</Td>
                <Td>{formatCurrency(link.cost)}</Td>
                <TdProfit>
                  <span>{'+' + formatCurrency(link.profit)}</span>
                </TdProfit>
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
          position={openMenu.position}
          linkId={openMenu.id}
          onClose={() => setOpenMenu(null)}
          setModalConfig={setModalConfig}
          onEdit={(link) => {
            setEditableLink(link);
            setEditModalOpen(true);
          }}
        />
      )}
      {visibleCount < items.length && (
        <ShowMoreButton onClick={handleShowMore}>Показать все ссылки</ShowMoreButton>
      )}
      {modalConfig && (
        <Modal
          icon={modalConfig.icon}
          title={modalConfig.title}
          text={modalConfig.text}
          confirmLabel={modalConfig.confirmLabel}
          cancelLabel={modalConfig.cancelLabel}
          danger={modalConfig.danger}
          onConfirm={() => {
            modalConfig.onConfirm?.();
          }}
          onCancel={handleModalClose}
          onClose={handleModalClose}
        />
      )}
      {isEditModalOpen && editableLink && (
        <EditCostModal link={editableLink} onClose={() => setEditModalOpen(false)} />
      )}
    </>
  );
};

export default LinksList;

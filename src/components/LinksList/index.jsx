import React, { useState } from 'react';

import DropdownMenu from '../DropdownMenu';
import { ActionBtn, ScrollWrapper, ShowMoreButton, Table, Td, Th } from './styles';

const LinksList = ({ items }) => {
    const [visibleCount, setVisibleCount] = useState(8);
    const [openMenu, setOpenMenu] = useState(null);

    const handleShowMore = () => setVisibleCount((prev) => prev + 8);
    const visibleItems = items.slice(0, visibleCount);

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

    return (
        <>
            <ScrollWrapper>
                <Table>
                    <thead>
                        <tr>
                            <Th>№</Th>
                            <Th>Название</Th>
                            <Th>Ссылка</Th>
                            <Th>Источник</Th>
                            <Th>Дата</Th>
                            <Th>Регистраций</Th>
                            <Th>Стоимость</Th>
                            <Th>Прибыль</Th>
                            <Th>Действия</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleItems.map((link, index) => (
                            <tr key={link.id}>
                                <Td>{index + 1}</Td>
                                <Td>{link.name}</Td>
                                <Td>
                                    <a href={link.url} target="_blank" rel="noreferrer">
                                        {link.url}
                                    </a>
                                </Td>
                                <Td>{link.source}</Td>
                                <Td>{link.date}</Td>
                                <Td>{link.registrations}</Td>
                                <Td>{link.cost}</Td>
                                <Td style={{ color: '#27C46A' }}>{link.profit}</Td>
                                <Td>
                                    <ActionBtn
                                        onClick={(e) =>
                                            openMenu?.id === link.id ? setOpenMenu(null) : handleMenuOpen(e, link.id)
                                        }
                                    >
                                        ⋯
                                    </ActionBtn>
                                </Td>
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

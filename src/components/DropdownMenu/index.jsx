import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import archiveIcon from '../../assets/images/icons/archive.svg';
import chartIcon from '../../assets/images/icons/chart.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import starIcon from '../../assets/images/icons/star.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import { DangerItem, DropdownItem, DropdownMenuWrapper } from './styles';

const menuItems = [
  {
    label: 'Редактирование',
    icon: editIcon,
  },
  {
    label: 'Аналитика',
    icon: chartIcon,
  },
  {
    label: 'Избранное',
    icon: starIcon,
  },
  {
    label: 'Архив',
    icon: archiveIcon,
  },
  {
    label: 'Удалить права',
    icon: trashIcon,
    danger: true,
  },
];

const DropdownMenu = ({ onClose, position }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!position) return null;

  return ReactDOM.createPortal(
    <DropdownMenuWrapper
      ref={ref}
      data-open-up={position.openUp}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: position.openUp ? 'translateY(-100%)' : 'none',
      }}
    >
      {menuItems.map(({ label, icon, danger }) => {
        const Item = danger ? DangerItem : DropdownItem;

        return (
          <Item
            key={label}
            onClick={() => {
              console.log(`${label} clicked`);
              onClose?.();
            }}
          >
            <img src={icon} alt={label} />
            {label}
          </Item>
        );
      })}
    </DropdownMenuWrapper>,
    document.getElementById('dropdown-root'),
  );
};

export default DropdownMenu;

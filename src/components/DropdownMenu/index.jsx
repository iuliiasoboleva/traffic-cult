import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import archiveIcon from '../../assets/images/icons/archive.svg';
import chartIcon from '../../assets/images/icons/chart.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import starIcon from '../../assets/images/icons/star.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import { DangerItem, DropdownItem, DropdownMenuWrapper } from './styles';

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
      <DropdownItem onClick={onClose}>
        <img src={editIcon} alt="Редактировать" />
        Редактирование
      </DropdownItem>
      <DropdownItem onClick={onClose}>
        <img src={chartIcon} alt="Аналитика" />
        Аналитика
      </DropdownItem>
      <DropdownItem onClick={onClose}>
        <img src={starIcon} alt="Избранное" />
        Избранное
      </DropdownItem>
      <DropdownItem onClick={onClose}>
        <img src={archiveIcon} alt="Архив" />
        Архив
      </DropdownItem>
      <DangerItem onClick={onClose}>
        <img src={trashIcon} alt="Удалить" />
        Удалить права
      </DangerItem>
    </DropdownMenuWrapper>,
    document.getElementById('dropdown-root'),
  );
};

export default DropdownMenu;

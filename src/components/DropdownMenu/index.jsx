import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import doneIcon from '../../assets/images/done.png';
import errorIcon from '../../assets/images/error.png';
import archiveIcon from '../../assets/images/icons/archive.svg';
import chartIcon from '../../assets/images/icons/chart.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import starIcon from '../../assets/images/icons/star.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import successIcon from '../../assets/images/success.png';
import { toggleArchived, toggleFavorite } from '../../store/linksSlice';
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

const DropdownMenu = ({ onClose, position, linkId, setModalConfig }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const link = useSelector((state) => state.links.items.find((item) => item.id === linkId));

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

  const handleClick = (label) => {
    if (label === 'Аналитика') {
      navigate(`/analytics/${linkId}`);
      onClose?.();
    } else if (label === 'Редактирование') {
      console.log('Редактирование');
      onClose?.();
    } else if (label === 'Избранное') {
      const isFav = link.favorite;
      setModalConfig({
        title: isFav ? 'Убрать из избранного?' : 'Добавить в избранное?',
        text: isFav
          ? `Ссылка ${link.name} будет удалена из избранного.`
          : `Ссылка ${link.name} будет добавлена в избранное.`,
        confirmLabel: isFav ? 'Убрать' : 'Добавить',
        cancelLabel: 'Отмена',
        danger: false,
        onConfirm: () => {
          dispatch(toggleFavorite(linkId));
          setModalConfig({
            title: isFav ? 'Удалено из избранного' : 'Добавлено в избранное',
            text: isFav
              ? `Ссылка ${link.name} удалена из избранного.`
              : `Ссылка ${link.name} добавлена в избранное.`,
            icon: doneIcon,
            confirmLabel: 'Понятно',
            cancelLabel: '',
            danger: false,
            onConfirm: () => setModalConfig(null),
          });
          onClose?.();
        },
      });
    } else if (label === 'Архив') {
      const isArchived = link.archived;
      setModalConfig({
        title: isArchived ? 'Убрать из архива?' : 'Добавить в архив?',
        text: isArchived
          ? `Ссылка ${link.name} будет восстановлена из архива.`
          : `Ссылка ${link.name} будет перемещена в архив.`,
        confirmLabel: isArchived ? 'Убрать' : 'Добавить',
        cancelLabel: 'Отмена',
        danger: false,
        onConfirm: () => {
          dispatch(toggleArchived(linkId));
          setModalConfig({
            title: isArchived ? 'Восстановлено' : 'Добавлено в архив',
            text: isArchived
              ? `Ссылка ${link.name} восстановлена из архива.`
              : `Ссылка ${link.name} перемещена в архив.`,
            icon: doneIcon,
            confirmLabel: 'Понятно',
            cancelLabel: '',
            danger: false,
            onConfirm: () => setModalConfig(null),
          });
          onClose?.();
        },
      });
    } else if (label === 'Удалить права') {
      setModalConfig({
        title: 'Удалить права?',
        text: `У ${link.name} будут удалены права в команде ${link.grade}.`,
        confirmLabel: 'Удалить',
        cancelLabel: 'Отмена',
        danger: true,
        onConfirm: () => {
          setModalConfig({
            title: 'Права удалены',
            text: 'Вы удалили права пользователя',
            icon: doneIcon,
            confirmLabel: 'Понятно',
            cancelLabel: '',
            danger: false,
            onConfirm: () => setModalConfig(null),
          });
          onClose?.();
        },
      });
    }
  };

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
          <Item key={label} onClick={() => handleClick(label)}>
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

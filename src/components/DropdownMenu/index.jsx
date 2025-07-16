import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { DropdownItem, DropdownMenuWrapper } from './styles';

const DropdownMenu = ({ items, onClose, position }) => {
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
      {items.map((item) => (
        <DropdownItem
          key={item.label}
          onClick={() => {
            item.onClick();
            onClose?.();
          }}
        >
          {item.icon} {item.label}
        </DropdownItem>
      ))}
    </DropdownMenuWrapper>,
    document.getElementById('dropdown-root'),
  );
};

export default DropdownMenu;

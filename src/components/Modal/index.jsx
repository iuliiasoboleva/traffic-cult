import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  AgreementBlock,
  CloseButton,
  ModalActions,
  ModalButton,
  ModalIcon,
  ModalOverlay,
  ModalText,
  ModalTitle,
  ModalWrapper,
  TitleBlock,
} from './styles';

const Modal = ({
  icon,
  title,
  text,
  confirmLabel = 'ОК',
  cancelLabel,
  onConfirm,
  onCancel,
  onClose,
  danger = false,
  isAuth = false,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWrapper isAuth={isAuth}>
        {!isAuth && <CloseButton onClick={onClose}>×</CloseButton>}
        <TitleBlock isAuth={isAuth}>
          {icon && <ModalIcon src={icon} alt="icon" />}
          {title && <ModalTitle>{title}</ModalTitle>}
          {text && (
            <ModalText danger={danger} isAuth={isAuth}>
              {text}
            </ModalText>
          )}
        </TitleBlock>
        <ModalActions>
          <ModalButton onClick={onConfirm} danger={danger}>
            {confirmLabel}
          </ModalButton>
          {cancelLabel && (
            <ModalButton onClick={onCancel} type="secondary">
              {cancelLabel}
            </ModalButton>
          )}
        </ModalActions>
        {isAuth && (
          <AgreementBlock>
            Входя в аккаунт, я соглашаюсь с{' '}
            <span role="link" tabIndex={0} onClick={(e) => e.preventDefault()}>
              условиями предоставления услуг
            </span>{' '}
            и{' '}
            <span role="link" tabIndex={0} onClick={(e) => e.preventDefault()}>
              политикой конфиденциальности
            </span>
          </AgreementBlock>
        )}
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background:
    linear-gradient(180deg, #202328 0%, #18191c 59.67%), linear-gradient(0deg, #18191c, #18191c);
  padding: 80px 40px 40px;
  border: 1px solid;
  border-image-source: radial-gradient(41% 41% at 50% 0%, #272c39 0%, rgba(39, 44, 57, 0) 100%);
  border-radius: 25px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 340px;
  max-height: fit-content;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 280px;
    border-radius: 12px;
    padding: 50px 15px 15px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: auto;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ModalButton = styled.button`
  padding: 15px 27px;
  border-radius: 9px;
  background: ${({ type }) => (type === 'button' ? 'none' : '#F24822')};
  border: ${({ type }) => (type === 'button' ? '1px solid #41454F' : 'none')};
  color: ${({ type }) => (type === 'button' ? '#41454F' : '#fff')};
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Inter Tight', sans-serif;
  max-width: 385px;
  width: ${({ type }) => (type === 'button' ? 'auto' : '100%')};
  white-space: pre;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledInputWrapper = styled.div`
  margin-bottom: 12px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background: transparent;
  border: ${({ error }) => (error ? '1px solid #EE5959' : '1px solid #272C39')};
  color: ${({ error }) => (error ? '#EE5959' : '#fff')};
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #f24822;
  }
`;

export const ErrorText = styled.div`
  color: #ee5959;
  min-height: 16px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: left;
`;

export const Label = styled.div`
  color: #585b6b;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  justify-self: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

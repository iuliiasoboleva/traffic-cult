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
  background: ${({ isAuth }) =>
    isAuth
      ? '#0C0E10'
      : 'linear-gradient(180deg, #202328 0%, #18191C 59.67%), linear-gradient(0deg, #18191C, #18191C)'};
  padding: 25px;
  border: 1px solid;
  border-image-source: radial-gradient(41% 41% at 50% 0%, #272c39 0%, rgba(39, 44, 57, 0) 100%);
  border-radius: 25px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 460px;
  max-height: fit-content;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 280px;
    border-radius: 12px;
    padding: 20px;
  }
`;

export const TitleBlock = styled.div`
  margin-top: ${({ isAuth }) => (isAuth ? '0' : '25px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ModalIcon = styled.img`
  width: auto;
  height: 70px;
  margin: 0 auto 16px;
`;

export const ModalTitle = styled.h2`
  color: #fff;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ModalText = styled.p`
  max-width: 325px;
  font-weight: 400;
  font-family: ${({ isAuth }) => (isAuth ? "'Inter Tight', sans-serif" : 'inherit')};
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ danger }) => (danger ? '#fff' : '#585B6B')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: auto;

  @media (max-width: 768px) {
    margin-top: 35px;
  }
`;

export const ModalButton = styled.button`
  padding: 15px 27px;
  border-radius: 9px;
  background: ${({ danger, type }) =>
    danger ? '#F24822' : type === 'secondary' ? 'none' : '#F24822'};
  border: ${({ type }) => (type === 'secondary' ? '1px solid #41454F' : 'none')};
  color: ${({ type }) => (type === 'secondary' ? '#41454F' : '#fff')};
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Inter Tight', sans-serif;
  max-width: 385px;
  width: 100%;

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

export const AgreementBlock = styled.div`
  font-family: 'Inter Tight', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #585b6b;
  margin-top: 20px;
  max-width: 330px;
  align-self: center;

  span {
    text-decoration: underline;
    color: #3698e3;
    cursor: pointer;
  }
`;

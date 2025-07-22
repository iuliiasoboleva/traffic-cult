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
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;

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

export const ProgressWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Step = styled.div`
  flex: 1;
  height: 3px;
  border-radius: 2px;
  background-color: ${({ $active }) => ($active ? '#FF3D00' : '#2E2F33')};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
`;

export const WithdrawCard = styled.div`
  position: relative;
  flex: 1;
  padding: 20px;
  border-radius: 12px;
  border: ${({ $selected }) => ($selected ? '1px solid #FF3D00' : '1px solid #2E2F33')};
  background-color: #18191c;
  color: #fff;
  cursor: pointer;
  text-align: center;
`;

export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
  color: #fff;
  background-color: ${({ disabled }) => (disabled ? '#2E2F33' : '#FF3D00')};
  padding: 2px 8px;
  border-radius: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 8px;
  background: #18191c;
  border: ${({ error }) => (error ? '1px solid #FF3D00' : '1px solid #2E2F33')};
  color: white;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #ff3d00;
  }
`;

export const Label = styled.div`
  margin: 12px 0 4px;
  font-size: 14px;
  color: #888;
`;

export const SubText = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
`;

export const NetworkSwitcher = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const NetworkOption = styled.div`
  flex: 1;
  position: relative;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid ${({ $active }) => ($active ? '#FF3D00' : '#2E2F33')};
  background: #18191c;
  color: white;
  cursor: pointer;
`;

export const NetworkBadge = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 10px;
  background: #ff3d00;
  padding: 2px 6px;
  border-radius: 12px;
  color: white;
`;

export const ErrorText = styled.div`
  color: #ff3d00;
  font-size: 13px;
  margin-bottom: 4px;
`;

export const Summary = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #fff;

  b {
    float: right;
    font-weight: 500;
  }

  div {
    margin-bottom: 8px;
  }
`;

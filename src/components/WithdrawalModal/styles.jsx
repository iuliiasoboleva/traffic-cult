import styled from 'styled-components';

import arrowDown from '../../assets/images/icons/arrow-down.svg';
import arrowUp from '../../assets/images/icons/arrow-up.svg';

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
  max-width: 480px;
  max-height: fit-content;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 280px;
    border-radius: 12px;
    padding: 15px;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const ModalTitle = styled.h2`
  color: #fff;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 35px;
  }
`;

export const ModalText = styled.p`
  max-width: 365px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  justify-self: center;

  @media (max-width: 768px) {
    font-size: 14px;
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
  border-radius: 33px;
  background-color: ${({ $active }) => ($active ? '#F24822' : '#272C39')};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 40px 0 20px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const WithdrawCard = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 20px;
  height: 180px;
  border: ${({ $selected }) => ($selected ? '1px solid #F24822' : '1px solid #272C39')};
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.02em;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    height: 115px;
    padding: 10px 8px;
    span {
      font-size: 14px;
    }
  }
`;

export const Badge = styled.div`
  font-size: 12px;
  color: ${({ disabled }) => (disabled ? '#272C39' : '#fff')};
  background-color: ${({ disabled }) => (disabled ? 'transparent' : '#F24822')};
  padding: 2px 8px;
  border-radius: 111px;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 12px;
  border: ${({ disabled }) => (disabled ? '1px solid #272C39' : 'none')};
`;

export const StyledInputWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SubText = styled.div`
  color: #585b6b;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const NetworkSwitcher = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const NetworkOption = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ $active }) => ($active ? '#F24822' : '#272C39')};
  background: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const NetworkBadge = styled.div`
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 12px;
  background: #f24822;
  padding: 2px 6px;
  border-radius: 4px;
  color: white;
`;

export const Summary = styled.div`
  margin: 16px 0;
  color: #fff;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  padding: 10px 0;

  p {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  &:first-of-type {
    border-bottom: 1px solid #272c39;

    @media (min-width: 769px) {
      border-bottom: none;
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const ArrowImg = styled.img`
  width: 11px;
  height: 11px;
  filter: invert(50%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(0.8);
  margin-left: 8px;
`;

export const DropdownOptions = styled.ul`
  background-color: #121315;
  border-radius: 8px;
  margin-top: 4px;
  padding: 4px 0;
  gap: 10px;
  border: 0.5px solid #272c39;
  z-index: 1000;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
`;

export const DropdownButton = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 1px solid #272c39;
  color: #ffffff;
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s ease;
  cursor: pointer;
  outline: none;
  box-shadow: none;
`;

export const DropdownOption = styled.li`
  padding: 6px 13px;
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  list-style: none;
  outline: none;
  box-shadow: none;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  width: -webkit-fill-available;

  .option-with-dot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #272c39;
    flex-shrink: 0;
    margin-left: 8px;
  }

  &:hover {
    background-color: rgba(18, 19, 21, 1);
  }

  &[aria-selected='true'] {
    background-color: #18191c;
  }
`;

import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  max-width: 138px;
  width: 100%;
`;

export const DropdownButton = styled.button`
  background-color: ${({ $isOpen }) => ($isOpen ? '#18191C' : '#2C3036')};
  border: 0.5px solid ${({ $isOpen }) => ($isOpen ? '#F24822' : '#2C3036')};
  color: white;
  font-family: 'Inter Tight', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
`;

export const ArrowImg = styled.img`
  width: 11px;
  height: 11px;
  margin-left: 8px;
`;

export const DropdownOptions = styled.ul`
  background-color: #18191c;
  border-radius: 8px;
  margin-top: 4px;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #2c3036;
  z-index: 1000;
  position: absolute;
  width: 100%;
`;

export const DropdownOption = styled.li`
  padding: 10px 14px;
  cursor: pointer;
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  color: white;

  &:hover,
  &[aria-selected='true'] {
    background-color: #2c3036;
  }
`;

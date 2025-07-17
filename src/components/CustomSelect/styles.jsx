import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 138px;
`;

export const ArrowImg = styled.img`
  width: 11px;
  height: 11px;
  margin-left: 8px;
`;

export const DropdownOptions = styled.ul`
  background-color: rgba(24, 25, 28, 1);
  border-radius: 5px;
  margin-top: 4px;
  padding: 4px 0;
  gap: 10px;
  border: 0.5px solid rgba(24, 25, 28, 1);
  z-index: 1000;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
`;

export const DropdownButton = styled.button`
  background-color: rgba(44, 48, 54, 1);
  border: 0.5px solid rgba(44, 48, 54, 1);
  color: #ffffff;
  font-family: 'Inter Tight', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 5px;
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
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  list-style: none;
  outline: none;
  box-shadow: none;
  border-radius: 5px;
  margin-left: 4px;
  margin-right: 4px;

  &:hover {
    background-color: rgba(18, 19, 21, 1);
  }

  &[aria-selected='true'] {
    background-color: rgba(18, 19, 21, 1);
    font-weight: 500;
  }
`;

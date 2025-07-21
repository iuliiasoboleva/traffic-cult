import styled from 'styled-components';

export const DropdownMenuWrapper = styled.div`
  background-color: #18191c;
  border: 0.5px solid #18191c;
  border-radius: 5px;
  padding: 4px 0;
  min-width: 180px;
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #18191c;
    border-left: 1px solid #18191c;
    border-top: 1px solid #18191c;
    transform: rotate(45deg);
  }

  &[data-open-up='false']::before {
    top: -5px;
    right: 16px;
  }

  &[data-open-up='true']::before {
    bottom: -5px;
    right: 16px;
    transform: rotate(225deg);
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 13px;
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 4px;
  transition: background-color 0.2s ease;

  img {
    width: 13px;
    height: 13px;
  }

  &:hover {
    background-color: rgba(18, 19, 21, 1);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DangerItem = styled(DropdownItem)`
  color: #ee5959;

  &:hover {
    background-color: rgba(44, 24, 26, 1);
  }
`;

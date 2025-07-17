import styled from 'styled-components';

export const DropdownMenuWrapper = styled.div`
  background-color: #18191c;
  border: 1px solid #2c2c2e;
  border-radius: 8px;
  padding: 4px;
  min-width: 180px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  position: absolute;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #18191c;
    border-left: 1px solid #2c2c2e;
    border-top: 1px solid #2c2c2e;
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
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
  border-radius: 6px;
  transition: background 0.2s;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: #2c3036;
  }
`;

export const DangerItem = styled(DropdownItem)`
  color: #e5484d;

  &:hover {
    background-color: #2c1c1d;
  }
`;

import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: inline-flex;
  background-color: #1a1a1d;
  border-radius: 12px;
  padding: 4px;
`;

export const TabButton = styled.button`
  padding: 6px 16px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#2a2a2f' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#6e6e80')};
  font-size: 14px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#2a2a2f' : '#26262b')};
    color: #fff;
  }
`;

export const Select = styled.select`
  background-color: #1a1a1d;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
`;

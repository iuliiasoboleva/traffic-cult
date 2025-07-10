import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: inline-flex;
  background-color: #1a1a1d;
  border-radius: 12px;
  padding: 4px;
  gap: 4px; /* если хочешь отступы между табами */
  /* width: 100%; ← это удаляем */
`;

export const TabButton = styled.button`
  padding: 10px 15px;
  border: ${({ isActive }) => (isActive ? '0.5px solid #2C3036' : 'none')};
  background-color: ${({ isActive }) => (isActive ? '#2C3036' : '#18191C')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#585B6B')};
  border-radius: 11px;
  cursor: pointer;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 400;
  font-size: 16px;
  white-space: nowrap;
  flex-shrink: 0;

  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    color: #fff;
  }
`;

import styled from 'styled-components';

const levelColors = {
  junior: '#899FCB',
  senior: '#F24822',
  middle: '#FFD700',
};

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const LinkWrapper = styled.div`
  margin-top: 30px;
`;

export const StyledLevel = styled.span`
  color: ${({ level }) => levelColors[level] || '#fff'};
  font-weight: 600;
  letter-spacing: -0.02em;
`;

export const ButtonStyled = styled.button`
  background: transparent;
  border: 1px solid #ff5e1a;
  color: #ff5e1a;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.2s;

  &:hover {
    background-color: rgba(255, 94, 26, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

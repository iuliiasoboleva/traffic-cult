import styled from 'styled-components';

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: white;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    opacity: 0.8;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

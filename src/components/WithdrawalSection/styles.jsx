import styled from 'styled-components';

export const Section = styled.div`
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 44px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
  cursor: pointer;
  margin-bottom: 25px;
  margin-left: 8px;

  @media (max-width: 768px) {
    gap: 0;
    justify-content: space-between;
    margin-left: 0;
    margin-bottom: 15px;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.4fr; /* третья шире */
  gap: 16px;

  @media (max-width: 1240px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    & > div:nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

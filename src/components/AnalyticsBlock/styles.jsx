import styled from 'styled-components';

export const BlockWrapper = styled.div`
  background-color: #0c0e10;
  border-radius: 12px;
  border: 0.5px solid #0c0e10;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (max-width: 768px) {
    background-image: none;
    padding: 12px;
    height: 147px;
  }
`;

export const BlockTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BlockSubtitle = styled.p`
  font-family: 'Inter Tight', sans-serif;
  font-weight: 400;
  font-size: 16px;
  max-width: 170px;
  color: #585b6b;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const BlockStat = styled.div`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  gap: 6px;
  margin-top: 12px;

  @media (max-width: 768px) {
    img {
      width: 18px;
      height: 18px;
    }
    font-size: 20px;
    gap: 4px;
  }
`;

export const BlockPercent = styled.div`
  margin-left: 6px;
  padding: 4px 8px;
  border-radius: 50px;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background-color: ${({ $growth }) => ($growth ? '#41995726' : '#EE595926')};
  border: 0.5px solid ${({ $growth }) => ($growth ? '#22422A' : '#4E2424')};
  color: ${({ $growth }) => ($growth ? '#419957' : '#EE5959')};

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 4px;
    white-space: nowrap;
    margin-left: 0;

    img {
      width: 8px;
      height: 8px;
    }
  }
`;

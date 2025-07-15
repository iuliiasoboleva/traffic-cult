import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  padding: 19px 16px;
  background: radial-gradient(98.3% 106.2% at 78.5% -10.33%, #202328 0%, #18191c 100%);
  border: 1px solid;
  border-image-source: radial-gradient(
    70.33% 70.33% at 84.83% -4%,
    #1e2330 0%,
    #272c39 26.37%,
    rgba(39, 44, 57, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  @media (max-width: 768px) {
    height: 118px;
    padding: 14px 8px;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  white-space: pre-line;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Value = styled.div`
  font-weight: 600;
  display: flex;
  gap: 8px;
  font-size: 28px;
  line-height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const IconWrapper = styled.div`
  img {
    width: 23px;
    height: 23px;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    img {
      width: 16px;
      height: 16px;
      margin-top: 4px;
    }
  }
`;

import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  min-width: 140px;
  height: 150px;
  border-radius: 12px;
  padding: 16px;
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
`;

export const Label = styled.div`
  font-size: 14px;
  color: #c0c0c0;
`;

export const ValueWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.span`
  font-size: 18px;
  opacity: 0.6;
`;

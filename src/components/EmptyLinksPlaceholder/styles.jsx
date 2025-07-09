import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 56px;
  height: 56px;

  img {
    width: 100%;
    opacity: 0.15;
  }
`;

export const IconCircle = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #f24822;
  color: white;
  font-size: 12px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Title = styled.h4`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  color: #888;
  font-size: 14px;
  max-width: 360px;
  line-height: 1.4;
`;

export const Button = styled.button`
  padding: 10px 24px;
  border: 1px solid #f24822;
  background: none;
  color: #f24822;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 60, 31, 0.1);
  }
`;

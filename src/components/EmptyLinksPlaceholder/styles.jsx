import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    padding: 46px 0;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  height: 70px;
  width: 70px;
  background-color: #18191c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    height: 56.5px;
    width: 56.5px;

    img {
      width: 32px;
      height: 32px;
    }
  }
`;

export const IconCircle = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #f24822;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 12px;
  width: 24px;
  height: 24px;
  border-radius: 111px;
  padding: 15px;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
    font-size: 10px;
    padding: 12px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 28px;
  letter-spacing: -0.5px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 200px;
  }
`;

export const Subtitle = styled.p`
  color: #585b6b;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.5px;
  text-align: center;
  max-width: 335px;

  @media (max-width: 768px) {
    font-size: 12px;
    max-width: 238px;
  }
`;

export const Button = styled.button`
  border: 1px solid #f24822;
  padding: 15px 27px;
  background: none;
  color: #f24822;
  border-radius: 9px;
  cursor: pointer;
  max-width: 380px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  font-family: 'Inter Tight', sans-serif;
  margin-top: 20px;

  &:hover {
    background-color: rgba(255, 60, 31, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 24px;
  }
`;

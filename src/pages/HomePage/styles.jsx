import styled from 'styled-components';

const levelColors = {
  junior: '#899FCB',
  senior: '#F24822',
  middle: '#FFD700',
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Content = styled.main`
  flex: 1;
  padding: 48px 28px 48px 28px;
  color: white;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

export const LinkTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledLevel = styled.span`
  color: ${({ level }) => levelColors[level] || '#fff'};
  font-weight: 600;
  letter-spacing: -0.02em;
`;

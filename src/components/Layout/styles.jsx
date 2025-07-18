import styled from 'styled-components';

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

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

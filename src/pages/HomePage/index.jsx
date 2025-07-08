import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Container, Content } from './styles';

const HomePage = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Добро пожаловать в Traffic Cult</h1>
        {/* Здесь будет личная статистика и т.д. */}
      </Content>
    </Container>
  );
};

export default HomePage;

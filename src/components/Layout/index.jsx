import React from 'react';

import { userMock } from '../../mocks/userMock';
import Sidebar from '../Sidebar';
import { Container, Content } from './styles';

const menuMock = [{ label: 'Трафик культ' }, { label: 'Название №2' }, { label: 'Название №3' }];
const title = 'Трафик\nКульт ®';

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar title={title} user={userMock} menuItems={menuMock} />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

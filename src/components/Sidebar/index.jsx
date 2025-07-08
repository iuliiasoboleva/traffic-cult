import React from 'react';
import {
  SidebarContainer,
  Title,
  Menu,
  MenuItem,
  Footer,
} from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <Title>TRAFFIC CULT</Title>
        <Menu>
          <MenuItem>Трафик культ *</MenuItem>
          <MenuItem>Название №2</MenuItem>
          <MenuItem>Название №3</MenuItem>
        </Menu>
      </div>
      <Footer>Victor Hsoyan<br />Выход средств</Footer>
    </SidebarContainer>
  );
};

export default Sidebar;

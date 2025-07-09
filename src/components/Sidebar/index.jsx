import React, { useState } from 'react';

import arrowDown from '../../assets/images/icons/arrow-down.svg';
import arrowUp from '../../assets/images/icons/arrow-up.svg';
import closeIcon from '../../assets/images/icons/close.svg';
import menuIcon from '../../assets/images/icons/menu.svg';
import offersIcon from '../../assets/images/icons/offers.svg';
import withdrawIcon from '../../assets/images/icons/withdraw.svg';
import {
  Divider,
  Dot,
  Footer,
  Header,
  MainItem,
  Menu,
  MenuGroup,
  MenuItem,
  MobileSidebar,
  OffersDropdown,
  OffersToggle,
  Overlay,
  SidebarContainer,
  Title,
  ToggleButton,
  UserBadge,
} from './styles';

const Sidebar = ({ user, menuItems }) => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0].label);
  const [isOffersOpen, setOffersOpen] = useState(false);

  const handleToggle = () => setMobileOpen(!isMobileOpen);

  const renderContent = () => (
    <>
      <Header>
        <Title>TRAFFIC CULT</Title>
        {isMobileOpen && (
          <img
            src={closeIcon}
            alt="Закрыть"
            width={20}
            height={20}
            onClick={handleToggle}
            style={{ cursor: 'pointer' }}
          />
        )}
      </Header>

      <Menu>
        <OffersToggle $active onClick={() => setOffersOpen((prev) => !prev)}>
          <MainItem>
            <img src={offersIcon} alt="Офферы" width={14} height={14} />
            <span>Офферы</span>
          </MainItem>
          <img src={isOffersOpen ? arrowUp : arrowDown} alt="arrow" width={14} height={14} />
        </OffersToggle>

        {isOffersOpen && (
          <OffersDropdown>
            <MenuGroup>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  $active={activeItem === item.label}
                  onClick={() => setActiveItem(item.label)}
                >
                  <span>{item.label}</span>
                  {activeItem === item.label && <Dot />}
                </MenuItem>
              ))}
            </MenuGroup>
          </OffersDropdown>
        )}

        <Divider />

        <OffersToggle as="div" $active={false}>
          <MainItem>
            <img src={withdrawIcon} alt="Вывод средств" width={14} height={14} />
            <span>Вывод средств</span>
          </MainItem>
        </OffersToggle>
      </Menu>

      <Footer>
        <UserBadge>
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <span>{user.name.charAt(0)}</span>
          )}
        </UserBadge>
        <div>
          <div>{user.name}</div>
          <small style={{ color: '#888' }}>Уровень: {user.level}</small>
        </div>
      </Footer>
    </>
  );

  return (
    <>
      <ToggleButton onClick={handleToggle}>
        <img src={menuIcon} alt="Открыть меню" width={20} height={20} />
      </ToggleButton>

      <SidebarContainer>{renderContent()}</SidebarContainer>

      {isMobileOpen && (
        <>
          <Overlay onClick={handleToggle} />
          <MobileSidebar>{renderContent()}</MobileSidebar>
        </>
      )}
    </>
  );
};

export default Sidebar;

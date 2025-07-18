import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import arrowDown from '../../assets/images/icons/arrow-down.svg';
import arrowUp from '../../assets/images/icons/arrow-up.svg';
import closeIcon from '../../assets/images/icons/close.svg';
import menuIcon from '../../assets/images/icons/menu.svg';
import offersIcon from '../../assets/images/icons/offers.svg';
import withdrawIcon from '../../assets/images/icons/withdraw.svg';
import logo from '../../assets/images/logo.png';
import {
  Dot,
  Footer,
  Header,
  LogoWrapper,
  MainItem,
  Menu,
  MenuGroup,
  MenuItem,
  MobileSidebar,
  MobileSidebarWrapper,
  OffersDropdown,
  OffersToggle,
  OpenHeader,
  Overlay,
  SidebarContainer,
  Title,
  ToggleButton,
  UserBadge,
  UserLevel,
  UserName,
} from './styles';

const Sidebar = ({ user, title, menuItems }) => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0].label);
  const [isOffersOpen, setOffersOpen] = useState(false);

  const handleToggle = () => setMobileOpen(!isMobileOpen);

  const renderContent = () => (
    <>
      <Menu>
        <OffersToggle $active onClick={() => setOffersOpen((prev) => !prev)}>
          <MainItem>
            <img src={offersIcon} alt="Офферы" width={15} height={15} />
            <span>Офферы</span>
          </MainItem>
          <img src={isOffersOpen ? arrowUp : arrowDown} alt="arrow" width={10} height={6} />
        </OffersToggle>

        {isOffersOpen && (
          <OffersDropdown>
            <MenuGroup>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  $active={activeItem === item.label}
                  onClick={() => {
                    setActiveItem(item.label);
                    if (isMobileOpen) handleToggle();
                  }}
                >
                  <span>{item.label}</span>
                  {activeItem === item.label && <Dot />}
                </MenuItem>
              ))}
            </MenuGroup>
          </OffersDropdown>
        )}

        <Link
          to="/withdrawal"
          style={{ textDecoration: 'none' }}
          onClick={() => {
            if (isMobileOpen) handleToggle();
          }}
        >
          <OffersToggle as="div" $active={false}>
            <MainItem>
              <img src={withdrawIcon} alt="Вывод средств" width={15} height={15} />
              <span>Вывод средств</span>
            </MainItem>
          </OffersToggle>
        </Link>
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
          <UserName>{user.name}</UserName>
          <UserLevel>Уровень: {user.level}</UserLevel>
        </div>
      </Footer>
    </>
  );

  return (
    <>
      <ToggleButton>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoWrapper>
            <img src={logo} alt="Лого" width={22} height={22} />
            <Title>{title}</Title>
          </LogoWrapper>
        </Link>
        <button>
          <img src={menuIcon} alt="Открыть меню" width={24} height={24} onClick={handleToggle} />
        </button>
      </ToggleButton>

      <SidebarContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Header>
            <img src={logo} alt="Лого" width={32} height={32} />
            <Title>{title}</Title>
          </Header>
        </Link>

        {renderContent()}
      </SidebarContainer>

      {isMobileOpen && (
        <>
          <Overlay onClick={handleToggle} />
          <MobileSidebar>
            <OpenHeader>
              <img
                src={closeIcon}
                alt="Закрыть"
                width={12}
                height={12}
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
              />
            </OpenHeader>
            <MobileSidebarWrapper>{renderContent()}</MobileSidebarWrapper>
          </MobileSidebar>
        </>
      )}
    </>
  );
};

export default Sidebar;

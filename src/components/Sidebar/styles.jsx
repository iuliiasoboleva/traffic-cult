import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100vh;
  background-color: #0c0e10;
  border-right: 0.5px solid #18191c;
  border-radius: 0 25px 25px 0;
  padding: 16px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 240px;
  background-color: #0c0e10;
  padding: 16px;
  z-index: 999;
  border-radius: 0 25px 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const ToggleButton = styled.button`
  display: block;
  position: fixed;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  z-index: 1000;
  color: white;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin: 0;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OffersToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $active }) => ($active ? '#1a1a1a' : 'transparent')};
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  gap: 8px;

  &:hover {
    background-color: #2a2a2a;
  }

  img:first-child {
    margin-right: 6px;
  }
`;

export const OffersDropdown = styled.div`
  margin-top: 4px;
`;

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  border-left: 1px solid #2a2a2a;
  gap: 6px;
`;

export const MainItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MenuItem = styled.button`
  background: ${({ $active }) => ($active ? '#1a1a1a' : 'transparent')};
  border: none;
  color: ${({ $active }) => ($active ? '#fff' : '#666')};
  text-align: left;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:hover {
    background-color: #2a2a2a;
    color: white;
  }
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00ff83;
  flex-shrink: 0;
`;

export const Divider = styled.hr`
  margin: 12px 0;
  border: none;
  border-top: 1px solid #18191c;
`;

export const Footer = styled.div`
  font-size: 12px;
  color: #fff;
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserBadge = styled.div`
  background-color: #f24822;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    font-size: 14px;
  }
`;

import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100vh;
  background-color: #0c0e10;
  border-right: 0.5px solid #18191c;
  border-radius: 0 25px 25px 0;
  padding: 20px;
  display: none;
  overflow-y: auto;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    scrollbar-width: thin; /* Firefox */
    scrollbar-color: rgba(255, 255, 255, 0.1) transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
`;

export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  z-index: 999;
  display: flex;
  background-color: rgba(18, 19, 21, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const MobileSidebarWrapper = styled.div`
  background-color: #0c0e10;
  padding: 20px;
  border-radius: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  width: 100%;
  margin-left: auto;
  overflow-y: auto;
  gap: 20px;
`;

export const ToggleButton = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background: none;
  border: none;
  color: white;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OpenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  padding-top: 20px;
  padding-left: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 20px;
  display: inline-block;
  height: 42px;
  word-break: break-word;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 0;
    height: auto;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Logo = styled.div`
  height: 24px;
  border-radius: 6px;
  background-color: #18191c;
  margin-right: 2px;
  width: 24px;
`;

export const OffersToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $active }) => ($active ? '#18191C' : 'transparent')};
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  cursor: pointer;
  height: 39px;
  border-radius: 8px;
  gap: 10px;
  width: 200px;
  border: ${({ $active }) => ($active ? '0.5px solid #26282D' : 'none')};
  box-sizing: border-box;

  &:hover {
    background-color: #2a2a2a;
  }

  @media (max-width: 768px) {
    height: 41px;
    width: 100%;
    padding: 10px 12px;
  }
`;

export const OffersDropdown = styled.div`
  margin-top: 4px;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  border-left: 1px solid #26282d;
  gap: 6px;
  width: 90%;
  margin-left: auto;
`;

export const MainItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MenuItem = styled.button`
  background-color: ${({ $active }) => ($active ? '#18191C' : 'transparent')};
  border: ${({ $active }) => ($active ? '0.5px solid #26282D' : '0.5px solid #18191C')};
  color: ${({ $active }) => ($active ? '#fff' : '#585B6B')};
  text-align: left;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  position: relative;

  &:hover {
    background-color: #2a2a2a;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00ff83;
  flex-shrink: 0;
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
  border-radius: 8px;
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const UserLevel = styled.span`
  font-weight: 400;
  color: #585e72;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

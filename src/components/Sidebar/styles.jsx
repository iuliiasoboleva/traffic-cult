import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100%;
  background-color: #0c0e10;
  border-right: 0.5px solid #18191c;
  border-radius: 0 25px 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  color: #c0c0c0;
  text-align: left;
  font-size: 14px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #1a1b1e;
    color: white;
  }
`;

export const Footer = styled.div`
  font-size: 12px;
  color: #777;
  margin-top: auto;
`;

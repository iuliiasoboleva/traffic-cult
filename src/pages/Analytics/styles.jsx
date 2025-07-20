import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 25px;
  margin-left: 8px;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 0;
    margin-left: 0;
    margin-bottom: 15px;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 25px;
  }
`;

export const BackButton = styled.button`
  border: 0.5px solid #585B6B;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #585B6B;
  padding: 8px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content-center;
  cursor: pointer;
  gap: 6px;
  background: transparent;
  transition: 0.2s;
  width: fit-content;

  &:hover {
    background-color: rgba(88, 91, 107, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;
    margin-bottom: 25px;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 1000px;
  table-layout: fixed;
  border-radius: 12px;
  background-color: #101113;
  border: 0.5px solid #272c39;
  font-family: 'Inter Tight', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;

  tbody tr {
    height: 50px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Th = styled.th`
  padding: 4px 6px;
  color: #585b6b;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;

  .sort-arrow {
    font-weight: 400;
    color: #ffffff;
  }

  &:hover {
    color: #ffffff;
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}

  ${({ sortable }) =>
    sortable &&
    css`
      cursor: pointer;
      user-select: none;

      .th-content {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
    `}

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Td = styled.td`
  padding: 4px 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TdCenter = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 4px 6px;
`;

export const TdProfit = styled.td`
  padding: 4px 6px;
  text-align: center;
  vertical-align: middle;

  span {
    display: inline-block;
    background-color: #121c15;
    border-radius: 6px;
    padding: 4px 8px;
    color: #419957;
    font-weight: 500;
    white-space: nowrap;
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  tr:hover & span {
    background-color: #1b2a22;
    color: #56c97c;
  }
`;

export const TdLink = styled.td`
  padding: 4px 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  a {
    color: #fff;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 220px;
    display: inline-block;
    vertical-align: middle;
  }

  img {
    width: 14px;
    height: 14px;
    cursor: pointer;
    vertical-align: middle;
    margin-left: 6px;
  }

  img.copied {
    filter: brightness(1.5) saturate(2);
    transform: scale(1.2);
  }
`;

export const BlocksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

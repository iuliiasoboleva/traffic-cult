import styled, { css } from 'styled-components';

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 1000px;
  table-layout: fixed;
  font-family: 'Inter Tight', sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-collapse: collapse;
  margin-bottom: 20px;

  tbody tr {
    height: 50px;
    border-radius: 2px;
  }

  tbody tr:nth-child(odd) {
    background-color: #101113;
  }

  tbody tr:nth-child(even) {
    background-color: transparent;
  }

  @media (hover: hover) and (pointer: fine) {
    tbody tr:hover {
      background-color: #2c3036;
    }
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
    max-width: 120px;
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

export const ActionBtn = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  padding: 0 5px;
`;

export const ShowMoreButton = styled.button`
  margin: 0 0 20px auto;
  display: block;
  padding: 15px 20px;
  background: none;
  border: 1px solid #454a52;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  &:hover {
    background: #222;
  }

  @media (max-width: 768px) {
    margin: 20px auto;
    width: 100%;
    text-align: center;
    font-size: 14px;
  }
`;

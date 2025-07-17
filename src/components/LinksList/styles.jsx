import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #fff;
  min-width: 1000px;
  table-layout: fixed;

  tbody tr:nth-child(odd) {
    background-color: #18191c;
  }

  tbody tr:nth-child(even) {
    background-color: transparent;
  }

  tbody tr:hover {
    background-color: #2c3036;
    font-weight: 600;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Td = styled.td`
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TdLink = styled.td`
  display: flex;
  align-items: center;
  gap: 6px;
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
  }

  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
`;

export const TdCenter = styled.td`
  padding: 10px;
  text-align: center;
  vertical-align: middle;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionBtn = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 0 5px;
`;

export const ShowMoreButton = styled.button`
  margin: 20px auto 0;
  display: block;
  padding: 10px 20px;
  background: none;
  color: #fff;
  border: 1px solid #555;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #222;
  }
`;

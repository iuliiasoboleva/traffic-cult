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
  min-width: 800px;
`;

export const Th = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #333;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #222;
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

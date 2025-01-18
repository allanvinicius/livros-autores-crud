import styled from "styled-components";

export const Table = styled.div`
  border: 1px solid rgb(217, 217, 217);
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid rgb(217, 217, 217);
`;

export const TableHeadCell = styled.th`
  padding: 16px;
`;

export const TableRow = styled.tr`
  width: 100%;
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  padding-top: 16px;
  padding-right: 0;
  padding-bottom: 16px;
  text-align: center;

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }
`;

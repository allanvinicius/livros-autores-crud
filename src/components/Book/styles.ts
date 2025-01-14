import styled from "styled-components";
import { AlertDialog, Dialog, Button } from "@radix-ui/themes";

export const StyledFlex = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-direction: column;
`;

export const DeleteButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: red;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
`;

export const DetailButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
`;

export const DialogContent = styled(AlertDialog.Content)`
  max-width: 450px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledDialogContent = styled(Dialog.Content)`
  max-width: 450px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Container = styled.div`
  padding: 1rem;
`;

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonGroupTable = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

import { Button } from "@radix-ui/themes";
import styled from "styled-components";

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const ButtonAdd = styled(Button)`
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 8px;
  background-color: gray;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

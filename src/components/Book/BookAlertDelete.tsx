import { AlertDialog, Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { DeleteButton, DialogContent, StyledFlex } from "./styles";
import { BookAlertDeleteProps } from "../../types/types";

export function BookAlertDelete({ handleDelete, id }: BookAlertDeleteProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <DeleteButton>
          <TrashIcon />
        </DeleteButton>
      </AlertDialog.Trigger>
      <DialogContent>
        <AlertDialog.Title>Apagar Livro</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Você tem certeza? Esse livro será removido.
        </AlertDialog.Description>
        <StyledFlex>
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              onClick={() => handleDelete(id)}
            >
              Remover
            </Button>
          </AlertDialog.Action>
        </StyledFlex>
      </DialogContent>
    </AlertDialog.Root>
  );
}

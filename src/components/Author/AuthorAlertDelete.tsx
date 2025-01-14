import { Flex, AlertDialog, Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { AuthorAlertDeleteProps } from "../../types/types";
import { DeleteButton } from "./styles";

export function AuthorAlertDelete({
  handleDelete,
  id,
}: AuthorAlertDeleteProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <DeleteButton>
          <TrashIcon />
        </DeleteButton>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Apagar Autor</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Você tem certeza? Esse autor será removido.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
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
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

import { Flex, AlertDialog, Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { BookDeleteProps } from "../../types/types";
import { useLibrary } from "../../hooks/useLibrary";

export function BookDelete({ id }: BookDeleteProps) {
  const { deleteBook } = useLibrary();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <TrashIcon />
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Apagar Livro</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Você tem certeza? Esse livro será removido.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={() => deleteBook(id)}>
              Remover
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

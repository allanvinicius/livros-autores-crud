import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { AuthorDeleteProps } from "../../types/types";
import { useLibrary } from "../../hooks/useLibrary";

export function AuthorDelete({ id }: AuthorDeleteProps) {
  const { deleteAuthor } = useLibrary();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <TrashIcon />
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Apagar Autor</AlertDialog.Title>
        
        <AlertDialog.Description size="2">
          Tem certeza? Esse autor será removido.
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
              onClick={() => deleteAuthor(id)}
            >
              Remover
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

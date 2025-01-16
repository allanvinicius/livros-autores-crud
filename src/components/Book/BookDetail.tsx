import { Dialog, Button, Flex, Table, Inset } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { BookDetailProps } from "../../types/types";
import { useLibrary } from "../../hooks/useLibrary";

export function BookDetail({ detailsBook }: BookDetailProps) {
  const { authors } = useLibrary();

  const author = authors.find((author) => author.id === detailsBook.author_id);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <MagnifyingGlassIcon />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>{detailsBook.name}</Dialog.Title>
        <Dialog.Description>
          Autor: {author ? author.name : "Desconhecido"}
        </Dialog.Description>

        <Inset side="x" my="5">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Páginas</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{detailsBook.id}</Table.Cell>
                <Table.Cell>{detailsBook.name}</Table.Cell>
                <Table.Cell>{detailsBook.pages}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Inset>

        <Flex gap="3" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Fechar
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

import { Dialog, Button, Flex, Table, Inset } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { AuthorDetailProps } from "../../types/types";
import { useLibrary } from "../../hooks/useLibrary";

export function AuthorDetail({ detailsAuthor }: AuthorDetailProps) {
  const { books } = useLibrary();
  
  const authorBooks = books.filter(
    (book) => book.author_id === detailsAuthor.id
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <MagnifyingGlassIcon />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>{detailsAuthor.name}</Dialog.Title>
        <Dialog.Description>
          E-mail: {detailsAuthor.email ?? "E-mail desconhecido"}
        </Dialog.Description>

        <Inset side="x" my="5">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Livro</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Páginas</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {authorBooks.map(({ id, name, pages }) => (
                <Table.Row key={id}>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{pages}</Table.Cell>
                </Table.Row>
              ))}
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

import { Button, Dialog, Flex, Table, Inset } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { AuthorModalViewProps } from "../../types/types";
import { DetailButton } from "./styles";

export function AuthorModalView({ books, val }: AuthorModalViewProps) {
  const authorBooks = books.filter((book) => book.author_id === val.id);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <DetailButton>
          <MagnifyingGlassIcon />
        </DetailButton>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>{val.name}</Dialog.Title>
        <Dialog.Description>E-mail: {val.email ?? "N/A"}</Dialog.Description>

        <Inset side="x" my="5">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell justify={"center"}>
                  ID
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify={"center"}>
                  Livro
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell justify={"center"}>
                  Páginas
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            {authorBooks.length > 0 ? (
              authorBooks.map((book) => (
                <Table.Row align={"center"} key={book.id}>
                  <Table.Cell justify={"center"}>{book.id}</Table.Cell>
                  <Table.Cell justify={"center"}>{book.name}</Table.Cell>
                  <Table.Cell justify={"center"}>{book.pages}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row align={"center"}>
                <Table.Cell colSpan={3} justify={"center"}>
                  Nenhum livro encontrado
                </Table.Cell>
              </Table.Row>
            )}
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

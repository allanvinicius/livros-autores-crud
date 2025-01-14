import { Button, Dialog, Table, Inset } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { StyledDialogContent, ButtonGroup, DetailButton } from "./styles";
import { BookModalViewProps } from "../../types/types";

export function BookModalView({ val }: BookModalViewProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <DetailButton>
          <MagnifyingGlassIcon />
        </DetailButton>
      </Dialog.Trigger>
      <StyledDialogContent>
        <Dialog.Title>{val.name}</Dialog.Title>
        <Dialog.Description>Autor: {val.author ?? "N/A"}</Dialog.Description>

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
                <Table.RowHeaderCell>{val.id}</Table.RowHeaderCell>
                <Table.Cell>{val.name}</Table.Cell>
                <Table.Cell>{val.pages ?? "N/A"}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Inset>

        <ButtonGroup>
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Fechar
            </Button>
          </Dialog.Close>
        </ButtonGroup>
      </StyledDialogContent>
    </Dialog.Root>
  );
}

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Table } from "@radix-ui/themes";
import { AuthorAlertDelete } from "./AuthorAlertDelete";
import { AuthorModalView } from "./AuthorModalView";
import { AuthorModalAdd } from "./AuthorModalAdd";
import { AuthorsProps } from "../../types/types";
import { ButtonGroupTable } from "./styles";

export function Authors({ books, authors, setAuthors }: AuthorsProps) {
  const { handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (values: { name: string; email: string }) => {
    const isAuthorExists = authors.some(
      (author) =>
        author.name.toLowerCase() === values.name.toLowerCase() ||
        author.email.toLowerCase() === values.email.toLowerCase()
    );

    if (isAuthorExists) {
      alert("Esse autor já existe.");
      return;
    }

    const nextId = Math.max(...authors.map((item) => Number(item.id)), 0) + 1;

    const updatedAuthors = [
      ...authors,
      { id: nextId, name: values.name, email: values.email },
    ];

    setAuthors(updatedAuthors);
    reset();
  };

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
  }, [authors]);

  const handleDelete = (id: number) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    setAuthors(updatedAuthors);
  };

  return (
    <Container>
      <Table.Root variant="surface" size="3">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell justify={"center"}>
              ID
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify={"center"}>
              Nome autor
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify={"center"}>
              E-mail
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify={"center"}>
              Ações
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {authors.map((val) => (
            <Table.Row align={"center"} key={val.id}>
              <Table.Cell justify={"center"}>{val.id}</Table.Cell>
              <Table.Cell justify={"center"}>{val.name}</Table.Cell>
              <Table.Cell justify={"center"}>{val.email}</Table.Cell>
              <Table.Cell justify={"center"}>
                <ButtonGroupTable>
                  <AuthorAlertDelete
                    handleDelete={() => handleDelete(val.id)}
                    id={val.id}
                  />
                  <AuthorModalView books={books} val={val} />
                </ButtonGroupTable>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <AuthorModalAdd onSubmit={() => handleSubmit(onSubmit)} />
    </Container>
  );
}

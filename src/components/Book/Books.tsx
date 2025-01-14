import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Container, Table } from "@radix-ui/themes";
import { BookAlertDelete } from "./BookAlertDelete";
import { BookModalView } from "./BookModalView";
import { BookModalAdd } from "./BookModalAdd";
import { ButtonGroupTable, TableContainer } from "./styles";
import { BooksProps } from "../../types/types";

export function Books({ books, setBooks, setAuthors, authors }: BooksProps) {
  const { handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      author: "",
      pages: "",
    },
  });

  const onSubmit = (values: {
    name: string;
    author: string;
    pages: string;
  }) => {
    const isDuplicate = books.some(
      (book) =>
        book.name.toLowerCase() === values.name.toLowerCase() &&
        book.author.toLowerCase() === values.author.toLowerCase()
    );

    if (isDuplicate) {
      alert("Esse livro já existe.");
      return;
    }

    if (isNaN(Number(values.pages)) || Number(values.pages) <= 0) {
      alert("Número de páginas inválido.");
      return;
    }

    const nextBookId = Math.max(...books.map((item) => item.id), 0) + 1;
    const nextAuthorId = Math.max(...authors.map((item) => item.id), 0) + 1;

    const foundAuthor = authors.find(
      (author) => values.author.toLowerCase() === author.name.toLowerCase()
    );

    const updatedBooks = [
      ...books,
      {
        id: nextBookId,
        name: values.name,
        author: values.author,
        author_id: foundAuthor ? foundAuthor.id : nextAuthorId,
        pages: Number(values.pages),
      },
    ];

    const updatedAuthors = foundAuthor
      ? [...authors]
      : [...authors, { id: nextAuthorId, name: values.author, email: "N/A" }];

    setBooks(updatedBooks);
    setAuthors(updatedAuthors);
    reset();
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("authors", JSON.stringify(authors));
  }, [books, authors]);

  const handleDelete = useCallback(
    (id: number) => {
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    },
    [setBooks]
  );

  return (
    <Container>
      <TableContainer>
        <Table.Root variant="surface" style={{ width: "100%" }}>
          <Table.Header style={{width: "70%"}}>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Livro</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Páginas</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Ações</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {books.map((val) => (
              <Table.Row key={val.id}>
                <Table.Cell>{val.id}</Table.Cell>
                <Table.Cell>{val.name}</Table.Cell>
                <Table.Cell>{val.pages}</Table.Cell>
                <Table.Cell>
                  <ButtonGroupTable>
                    <BookAlertDelete
                      handleDelete={() => handleDelete(val.id)}
                      id={val.id}
                    />
                    <BookModalView val={val} />
                  </ButtonGroupTable>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </TableContainer>

      <BookModalAdd onSubmit={() => handleSubmit(onSubmit)} />
    </Container>
  );
}

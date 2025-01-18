import { BookDelete } from "./bookDelete";
import { BookDetail } from "./bookDetail";
import { BookAdd } from "./bookAdd";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "../../styles/tables";
import { useLibrary } from "../../hooks/useLibrary";
import { GroupButton } from "./styles";

export function Books() {
  const { books } = useLibrary();

  return (
    <>
      <Table>
        <table>
          <TableHead>
            <TableRow>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Livro</TableHeadCell>
              <TableHeadCell>Páginas</TableHeadCell>
              <TableHeadCell>Ações</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.pages}</TableCell>
                
                <TableCell>
                  <GroupButton>
                    <BookDelete id={book.id} />
                    <BookDetail detailsBook={book} />
                  </GroupButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </table>
      </Table>
      
      <BookAdd />
    </>
  );
}
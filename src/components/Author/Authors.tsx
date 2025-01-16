import { AuthorDetail } from "./AuthorDetail";
import { AuthorDelete } from "./AuthorDelete";
import { AuthorAdd } from "./AuthorAdd";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "../../styles/tables";
import { GroupButton } from "./styles";
import { useLibrary } from "../../hooks/useLibrary";

export function Authors() {
  const { authors } = useLibrary();

  return (
    <>
      <Table>
        <table>
          <TableHead>
            <TableRow>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Nome</TableHeadCell>
              <TableHeadCell>E-mail</TableHeadCell>
              <TableHeadCell>Ações</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {authors.map((author) => (
              <TableRow key={author.id}>
                <TableCell>{author.id}</TableCell>
                <TableCell>{author.name}</TableCell>
                <TableCell>{author.email}</TableCell>
                
                <TableCell>
                  <GroupButton>
                    <AuthorDelete id={author.id} />
                    <AuthorDetail detailsAuthor={author} />
                  </GroupButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </table>
      </Table>

      <AuthorAdd />
    </>
  );
}

export interface AuthorAlertDeleteProps {
  handleDelete: (id: number) => void;
  id: number;
}
export interface Book {
  id: number;
  name: string;
  author_id: number;
  pages: number;
}

export interface Author {
  id: number;
  name: string;
  email: string;
}

export interface AuthorModalViewProps {
  books: Book[];
  val: Author;
}

export interface AuthorsProps {
  books: Book[];
  authors: Author[];
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
}

export interface BooksProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
  authors: Author[];
}

export interface BookModalViewProps {
  val: Book;
}

export interface BookAlertDeleteProps {
  handleDelete: (id: number) => void;
  id: number;
}

export interface BookModalAddProps {
  onSubmit: (data: { name: string; author: string; pages: number }) => void;
}

export interface AuthorModalAddProps {
  onSubmit: (values: { name: string; email: string }) => void;
}

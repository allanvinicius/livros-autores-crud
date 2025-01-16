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
export interface BookDetailProps {
  detailsBook: Book;
}

export interface AuthorDetailProps {
  detailsAuthor: Author;
}

export interface BookDeleteProps {
  id: number;
}
export interface AuthorDeleteProps {
  id: number;
}

export interface BookAddProps {
  onSubmit: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: { name: string; author: string; pages: number };
}

export interface AuthorAddProps {
  onSubmit: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: { name: string; email: string };
}

export interface LibraryContextProps {
  authors: Author[];
  books: Book[];
  addAuthor: (name: string, email: string) => void;
  deleteAuthor: (id: number) => void;
  addBook: (name: string, authorName: string, pages: number) => void;
  deleteBook: (id: number) => void;
}
export interface FormData {
  name: string;
  email?: string;
}

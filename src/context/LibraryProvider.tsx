import { useState, useEffect } from "react";
import { Author, Book } from "../types/types";
import { LibraryContext } from "./LibraryContext";

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [authors, setAuthors] = useState<Author[]>(() =>
    JSON.parse(localStorage.getItem("authors") || "[]")
  );

  const [books, setBooks] = useState<Book[]>(() =>
    JSON.parse(localStorage.getItem("books") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
    localStorage.setItem("books", JSON.stringify(books));
  }, [authors, books]);

  function addAuthor(name: string, email: string) {
    if (
      authors.some(
        (author) =>
          author.name.toLowerCase() === name.toLowerCase() ||
          author.email.toLowerCase() === email.toLowerCase()
      )
    ) {
      alert("Esse autor já existe.");
      return;
    }

    const nextId = Math.max(...authors.map((item) => item.id), 0) + 1;
    
    setAuthors([...authors, { id: nextId, name, email }]);
  }

  function addBook(name: string, authorName: string, pages: number) {
    if (books.some((book) => book.name.toLowerCase() === name.toLowerCase())) {
      alert("Esse livro já existe.");
      return;
    }

    const nextBookId = Math.max(...books.map((book) => book.id), 0) + 1;

    let author = authors.find(
      (author) => author.name.toLowerCase() === authorName.toLowerCase()
    );

    if (!author) {
      const nextAuthorId = Math.max(...authors.map((item) => item.id), 0) + 1;

      author = { id: nextAuthorId, name: authorName, email: "N/A" };

      setAuthors([...authors, author]);
    }

    setBooks([
      ...books,
      {
        id: nextBookId,
        name,
        author_id: author.id,
        pages,
      },
    ]);
  }

  function deleteAuthor(id: number) {
    setAuthors(authors.filter((author) => author.id !== id));
  }

  function deleteBook(id: number) {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <LibraryContext.Provider
      value={{ authors, books, addAuthor, deleteAuthor, addBook, deleteBook }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

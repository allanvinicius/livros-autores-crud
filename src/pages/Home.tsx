import { useState } from "react";

import { Books } from "../components/Book/Books";
import { Authors } from "../components/Author/Authors";
import { StyledBox, StyledFlex } from "./styles";

export function Home() {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books") || "[]")
  );
  const [authors, setAuthors] = useState(
    JSON.parse(localStorage.getItem("authors") || "[]")
  );

  return (
    <StyledFlex>
      <StyledBox>
        <Books
          setAuthors={setAuthors}
          authors={authors}
          books={books}
          setBooks={setBooks}
        />
      </StyledBox>
      <StyledBox>
        <Authors authors={authors} setAuthors={setAuthors} books={books} />
      </StyledBox>
    </StyledFlex>
  );
}

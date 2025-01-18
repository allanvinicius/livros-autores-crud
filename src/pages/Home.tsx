import { Books } from "../components/book/books";
import { Authors } from "../components/author/authors";
import { Tables, Box, Container, ContentTables } from "./styles";

export function Home() {
  return (
    <Tables>
      <Container>
        <ContentTables>
          <Box>
            <Books />
          </Box>

          <Box>
            <Authors />
          </Box>
        </ContentTables>
      </Container>
    </Tables>
  );
}

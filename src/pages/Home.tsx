import { Books } from "../components/Book/Books";
import { Authors } from "../components/Author/Authors";
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

import { Books } from "../components/Book/Books";
import { Authors } from "../components/Author/Authors";
import { Tables, Box } from "./styles";

export function Home() {
  return (
    <Tables>
      <Box>
        <Books />
      </Box>

      <Box>
        <Authors />
      </Box>
    </Tables>
  );
}

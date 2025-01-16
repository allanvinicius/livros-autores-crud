import { LibraryProvider } from "./context/LibraryProvider";
import { Home } from "./pages/Home";

export function App() {
  return (
    <LibraryProvider>
      <Home />
    </LibraryProvider>
  );
}

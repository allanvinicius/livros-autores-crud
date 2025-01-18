import { LibraryProvider } from "./context/libraryProvider";
import { Home } from "./pages/home";

export function App() {
  return (
    <LibraryProvider>
      <Home />
    </LibraryProvider>
  );
}

import { useContext } from "react";
import { LibraryContext } from "../context/libraryContext";


export function useLibrary() {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibrary deve ser usado dentro de um LibraryProvider");
  }
  return context;
}

import { createContext } from "react";
import { LibraryContextProps } from "../types/types";

export const LibraryContext = createContext<LibraryContextProps | undefined>(
  undefined
);

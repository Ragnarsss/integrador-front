import { SearchingContext } from "@/context/SearchingContext";
import { SearchingContextType } from "@/lib/types/context.types";
import { useContext } from "react";

export const useSearch = (): SearchingContextType => {
  const context = useContext(SearchingContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within an SearchingProvider");
  }
  return context;
};

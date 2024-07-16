"use client";
import { SearchingContextType } from "@/lib/types/context.types";
import { ReactNode, createContext, useState } from "react";

export const SearchingContext = createContext<SearchingContextType | undefined>(
  undefined
);

export function SearchingProvider({ children }: { children: ReactNode }) {
  const [ratingFilter, setRatingFilter] = useState(2);
  const [startDateFilter, setStartDateFilter] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [endDateFilter, setEndDateFilter] = useState([
    new Date().toISOString().slice(0, 10),
  ]);
  const [serviceNameFilter, setServiceNameFilter] = useState("");
  const [serviceValueStartFilter, setServiceValueStartFilter] = useState(0);
  const [serviceValueEndFilter, setServiceValueEndFilter] = useState(0);
  const contextValue = {
    ratingFilter,
    startDateFilter,
    endDateFilter,
    serviceNameFilter,
    serviceValueStartFilter,
    serviceValueEndFilter,
    setRatingFilter,
    setStartDateFilter,
    setEndDateFilter,
    setServiceNameFilter,
    setServiceValueStartFilter,
    setServiceValueEndFilter,
  };

  return (
    <SearchingContext.Provider value={contextValue}>
      {children}
    </SearchingContext.Provider>
  );
}

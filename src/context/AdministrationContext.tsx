"use client";
import { AdministrationContextType } from "@/lib/types/context.types";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export const AdministrationContext = createContext<
  AdministrationContextType | undefined
>(undefined);

export function AdministrationProvider({ children }: { children: ReactNode }) {
  const contextValue = {};

  return (
    <AdministrationContext.Provider value={contextValue}>
      {children}
    </AdministrationContext.Provider>
  );
}

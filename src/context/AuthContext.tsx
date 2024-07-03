"use client";
import { ReactNode, createContext, useState } from "react";
import { User } from "./types/types";

interface AuthContextType {
  user: User;
  authenticationToken: string;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const visitingUser = {
    id: "",
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState<User>(visitingUser);
  const [authenticationToken, setAuthenticationToken] = useState("");

  const login = (token: string) => {};

  const logout = () => {
    setUser(visitingUser);
    setAuthenticationToken("");
  };

  const contextValue = {
    user,
    authenticationToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

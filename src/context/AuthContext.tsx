"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { AuthContextType } from "../types/types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticationToken, setAuthenticationToken] = useState("");

  const [userId, setUserId] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const login = (email: string, userId: number, token: string) => {
    localStorage.setItem("authenticationToken", token);
    localStorage.setItem("userId", String(userId));
    localStorage.setItem("userEmail", email);

    setAuthenticationToken(token);
    setUserId(userId);
    setUserEmail(email);
  };

  const logout = () => {
    localStorage.setItem("authenticationToken", "");
    setAuthenticationToken("");
    localStorage.setItem("userId", "");
    setUserId(0);
    localStorage.setItem("userEmail", "");
    setUserEmail("");
  };

  const checkIfUserIsLoggedIn = async () => {
    try {
      const token = localStorage.getItem("authenticationToken");
      if (token) {
        setAuthenticationToken(token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const contextValue = {
    userId,
    userEmail,
    authenticationToken,
    setAuthenticationToken,
    login,
    setUserId,
    setUserEmail,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

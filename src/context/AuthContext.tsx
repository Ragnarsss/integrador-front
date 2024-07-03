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

  const login = (userId: number, token: string, email: string) => {
    localStorage.setItem("authenticationToken", token);
    localStorage.setItem("userId", String(userId));
    localStorage.setItem("userEmail", email);

    setAuthenticationToken(token);
    setUserId(userId);
    setUserEmail(email);
  };

  const logout = () => {
    localStorage.clear();
    setAuthenticationToken("");
    setUserId(0);
    setUserEmail("");
  };

  const checkIfUserIsLoggedIn = async () => {
    const token = localStorage.getItem("authenticationToken");
    const storedUserId = localStorage.getItem("userId");
    const email = localStorage.getItem("userEmail");

    if (token) {
      setAuthenticationToken(token);
    }
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
    if (email) {
      console.log("email", email);
      setUserEmail(email);
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

"use client";
import { exampleAdmin } from "@/lib/staticdata";
import { AuthContextType } from "@/lib/types/context.types";
import { ReactNode, createContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticationToken, setAuthenticationToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [sampleGod, setSampleGod] = useState(exampleAdmin);

  const [userEmail, setUserEmail] = useState("");

  const login = (email: string, password: string) => {
    if (email === sampleGod.email && password === sampleGod.password) {
      setUserEmail(email);
      setUserId(sampleGod.id);
      setIsLoggedIn(!isLoggedIn);
      localStorage.setItem("userId", String(userId));
      localStorage.setItem("userEmail", email);
      localStorage.setItem("loginStatus", isLoggedIn.toString());
    }
    // localStorage.setItem("authenticationToken", token);
    // setAuthenticationToken(token);
  };

  const logout = () => {
    localStorage.clear();
    setAuthenticationToken("");
    setUserEmail("");
    setIsLoggedIn(!isLoggedIn);
  };

  const checkIfUserIsLoggedIn = async () => {
    // const token = localStorage.getItem("authenticationToken");
    const storedUserId = localStorage.getItem("userId");
    const email = localStorage.getItem("userEmail");
    const loginStatus = localStorage.getItem("loginStatus");
    // if (token) {
    //   setAuthenticationToken(token);
    // }
    if (loginStatus) {
      setIsLoggedIn(loginStatus === "true");

      if (storedUserId) {
        setUserId(parseInt(storedUserId, 10));
      }
      if (email) {
        setUserEmail(email);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const contextValue = {
    isLoggedIn,
    isLoading,
    userId,
    userEmail,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

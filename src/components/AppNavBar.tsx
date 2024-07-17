"use client";
import Link from "next/link";
import { FC } from "react";
import { FaParachuteBox } from "react-icons/fa";
import { AppSheet } from "./AppSheet";
import { ThemeToggler } from "./ThemeToggler";

interface AppNavBarProps {
  children: React.ReactNode;
}

export const AppNavBar: FC<AppNavBarProps> = ({ children }) => {
  return (
    <nav className="container mx-auto p-0 flex items-center justify-between h-20 shadow-md z-50">
      <Link href="/" className="text-lg font-bold">
        <FaParachuteBox
          size={30}
          title="Go to home"
          className="text-black dark:text-white hover:text-primary hover:dark:text-primary focus:outline-0 focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out cursor-pointer"
        />
      </Link>
      <div className="container mx-auto h-full w-full flex items-center justify-center">
        {children}
      </div>
      <div className="flex flex-row items-center gap-x-10">
        <AppSheet />
        <ThemeToggler />
      </div>
    </nav>
  );
};

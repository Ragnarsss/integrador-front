"use client";
import { usePathname } from "next/navigation";
import React, { Children, FC, useEffect, useState } from "react";
import { ThemeToggler } from "./ThemeToggler";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener("scroll", scrollYPos);

    return () => {
      window.removeEventListener("scroll", scrollYPos);
    };
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      {children}
    </header>
  );
};

export default Header;

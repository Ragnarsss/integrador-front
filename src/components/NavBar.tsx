"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-blue-500 p-4 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">
            Service App
          </Link>
          <button className=" w-10 h-10 " onClick={() => setIsOpen(!isOpen)}>
            <FaUser size={30} title="User account button" color="black" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 right-0 w-96 h-full bg-slate-300 overflow-auto">
          <button
            className="bg-red-500 w-10 h-10 m-2 right-0 top-0 absolute"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

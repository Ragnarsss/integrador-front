"use client";
import Link from "next/link";
import { useState } from "react";

export const ServicesNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-blue-500 p-4 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">
            Service App
          </Link>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="rounded px-3 py-2"
            />
          </div>
          <button
            className="bg-black w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
          ></button>
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

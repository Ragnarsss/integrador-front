"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

export const ServicesNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-10">
      <nav className="bg-blue-500 p-4 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/home" className="text-white text-lg font-bold">
            Service App
          </Link>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="rounded px-3 py-2"
            />
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaUser size={30} title="User account button" color="black" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <aside className="fixed top-0 right-0 w-96 h-full bg-slate-300 overflow-auto">
          <button
            className="bg-red-500 w-10 h-10 m-2 right-0 top-0 absolute"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </aside>
      )}
    </div>
  );
};

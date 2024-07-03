"use client";
import LoginForm from "@/app/auth/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useSearch } from "@/hooks/useSearch";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

export const ServicesNavBar = () => {
  const { authenticationToken } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { serviceNameFilter, setServiceNameFilter } = useSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    setServiceNameFilter(value);
  };

  useEffect(() => {
    return () => {};
  }, [authenticationToken]);

  return (
    <div className="bg-slate-600 z-10">
      <nav className="p-4 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/home" className="text-white text-lg font-bold">
            Service App
          </Link>
          <div className="flex justify-center items-center">
            <Input
              type="text"
              value={serviceNameFilter}
              placeholder="Search..."
              className="bg-slate-500 border-transparent border-solid px-3 py-2"
              onChange={handleChange}
            />
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaUser size={30} title="User account button" color="black" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <aside className="fixed top-0 right-0 w-96 h-full bg-primary-foreground overflow-auto">
          <div className="mx-auto w-full flex items-center flex-col justify-center">
            <Button
              className="bg-red-500 w-10 h-10 m-2 right-0 top-0 absolute"
              onClick={() => setIsOpen(false)}
            >
              X
            </Button>
          </div>
          {authenticationToken ? (
            <div>
              <p>Logged in</p>
            </div>
          ) : (
            <div className="mx-auto px-10 pt-10">
              <h1 className="mb-10 text-secondary-foreground text-4xl">
                Inicia Sesion
              </h1>
              <LoginForm />
            </div>
          )}
        </aside>
      )}
    </div>
  );
};

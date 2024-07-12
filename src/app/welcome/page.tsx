"use client";
import { useState } from "react";
import RegisterForm from "../auth/components/RegisterForm";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

export default function LandingPage() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/${searchValue}`);
  };

  return (
    <section className="flex flex-row h-screen">
      <div className="w-1/2 h-full flex items-center flex-col justify-center">
        <h1>Busca algo </h1>
        <div className="relative">
          <Input
            type="text"
            className="h-10 pl-8 pr-20 rounded-full text-sm focus:outline-none"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <Button className="absolute right-0 top-0 h-10 w-10 rounded-full">
            <FaSearch size={32} onClick={handleClick} />
          </Button>
        </div>
      </div>
      <div className="mx-auto m-0 p-0">
        <div className="w-full items-center flex flex-col">
          <h1 className="mb-10 top-0 text-2xl">Registrate</h1>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import RegisterForm from "../auth/components/RegisterForm";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  return (
    <section className="flex flex-row h-screen">
      <div className="w-1/2 h-full flex items-center  flex-col justify-center">
        <h1>Busca algo </h1>
        <div className="relative">
          <Input
            type="text"
            className="h-10 pl-8 pr-20 rounded-full text-sm focus:outline-none"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchValue(e.target.value);
            }}
          />
          <Link
            href={`/services/searching/${searchValue}`}
            className="absolute right-0 top-0 mt-2 mr-2"
          >
            <button>
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
              >
                <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-15.012C47.984 10.186 37.799 0 25.992 0S4 10.186 4 22.774s10.186 22.774 22.992 22.774c5.654 0 10.868-1.911 15.012-5.396l13.558 14.101c0.571 0.593 1.339 0.92 2.146 0.92 0.779 0 1.518-0.297 2.084-0.857 1.14-1.133 1.17-2.953 0.064-4.093zM25.992 40.547c-9.835 0-17.773-7.938-17.773-17.773S16.157 5 25.992 5 43.764 12.938 43.764 22.774 35.827 40.547 25.992 40.547z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto m-0 p-0">
        <div className="w-full items-center flex flex-col mt-32 ">
          <h1 className="mb-10 top-0 text-2xl ">Registrate</h1>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

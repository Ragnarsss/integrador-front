"use client";
import { useState } from "react";

export default function LandingPage() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-row h-screen bg-red-100">
      <div className="w-1/2 h-full bg-orange-300 flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            className="h-10 pl-8 pr-20 rounded-full text-sm focus:outline-none"
            placeholder="Search..."
          />
          <button className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-15.012C47.984 10.186 37.799 0 25.992 0S4 10.186 4 22.774s10.186 22.774 22.992 22.774c5.654 0 10.868-1.911 15.012-5.396l13.558 14.101c0.571 0.593 1.339 0.92 2.146 0.92 0.779 0 1.518-0.297 2.084-0.857 1.14-1.133 1.17-2.953 0.064-4.093zM25.992 40.547c-9.835 0-17.773-7.938-17.773-17.773S16.157 5 25.992 5 43.764 12.938 43.764 22.774 35.827 40.547 25.992 40.547z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-300 flex items-center justify-center">
        <form className="w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="mb-2 p-2 w-full rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-2 p-2 w-full rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-2 p-2 w-full rounded-md"
          />
          <button
            type="submit"
            className="w-full p-2 rounded-md bg-green-500 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import VerticalSwipeToSlide from "./Carousel";
import { useAuth } from "@/hooks/useAuth";

export default function LandingPage() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    router.push(`/services/${searchValue}`);
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/home");
    }
  }, [isLoggedIn, router]);

  return (
    <section className="flex flex-row h-screen">
      <div className="w-1/2 h-full flex items-center flex-col justify-center">
        <div className="relative">
          <Input
            type="text"
            className="h-10 pl-8 pr-20 rounded-full text-sm focus:outline-none"
            placeholder="Busquemos algo..."
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
      <div className="w-1/2 h-full bg-gray-100">
        <h1 className="text-black">Nuestros mejores servicios</h1>
        <VerticalSwipeToSlide />
      </div>
    </section>
  );
}

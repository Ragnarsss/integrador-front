"use client";
import { AppNavBar } from "@/components/AppNavBar";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/services");
  };

  return (
    <>
      <Header>
        <AppNavBar>
          <h1
            onClick={handleClick}
            className="text-primary dark:text-primary text-black text-4xl font-bold text-center hover:cursor-pointer"
          >
            Servicios
          </h1>
        </AppNavBar>
      </Header>

      {children}
    </>
  );
}

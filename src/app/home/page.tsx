"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { authenticationToken, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authenticationToken === "" || authenticationToken !== "") {
      router.push("/home");
    }
  }, [authenticationToken, router, isLoggedIn]);

  return (
    <div className="h-[4000px]">
      <div className="w-full h-full">
        {isLoggedIn ? (
          <h1 className="text-4xl font-bold text-center">Notlogged user </h1>
        ) : (
          <h1 className="text-4xl font-bold text-center">
            Welcome to the home page
          </h1>
        )}
      </div>
    </div>
  );
}

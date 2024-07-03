"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { authenticationToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authenticationToken === "") {
      router.push("/welcome");
    }
  }, [authenticationToken, router]);

  return <section className="w-full"></section>;
}

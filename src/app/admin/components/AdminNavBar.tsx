"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useState } from "react";

export const AdminNavBar = () => {
  const { authenticationToken } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {};
  }, [authenticationToken]);

  return (
    <nav className="p-4 overflow-hidden h-24 bg-slate-600 flex flex-row items-center content-start gap-x-12">
      <Link className="text-3xl" href="/welcome">
        ServiceApp
      </Link>
      <Link href="/admin/services">Servicios</Link>
      <Link href="/admin/users">Usuarios</Link>
      <Link href="/admin/profesionals">Profesionales</Link>
      <Link href="/bookings">Citas</Link>
      <Link href="/reviews">Reviews</Link>
    </nav>
  );
};

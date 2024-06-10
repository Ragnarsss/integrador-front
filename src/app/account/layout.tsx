"use client";

import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const handleSignOut = () => {
    // Aquí va tu lógica para cerrar la sesión
  };

  return (
    <div className="flex">
      <aside className="bg-slate-400 w-64 h-full fixed left-0 top-0 overflow-auto p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <Link href="/home" className="block text-white text-4xl">
              <FaHome className="text-white" />
            </Link>
            <h2 className="text-lime-300 font-bold ml-2">Menú</h2>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="/account/profile" className="block text-white">
              Perfil
            </Link>
            <Link href="/account/settings" className="block text-white">
              Configuración
            </Link>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Cerrar sesión
        </button>
      </aside>
      <section className="ml-64">{children}</section>
    </div>
  );
}

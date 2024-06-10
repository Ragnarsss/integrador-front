import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-purple-400 h-16 flex items-center justify-between px-4">
      <h1 className="text-white font-bold text-xl">Servicios</h1>
      <div className="flex items-center space-x-4">
        <Link href="/account/profile" className="text-white">
          Perfil
        </Link>
        <button className="text-white">Cerrar sesión</button>
      </div>
    </div>
  );
}

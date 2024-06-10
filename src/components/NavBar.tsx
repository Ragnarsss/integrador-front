import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-lg font-bold">Service App</a>
        </Link>
        <button className="text-black text-lg">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </nav>
  );
};

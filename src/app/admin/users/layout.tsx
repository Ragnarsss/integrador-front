import { Button } from "@/components/ui/button";
import { FaUserMinus, FaUserPlus, FaUserSlash } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-row">
      <aside className="bg-white h-screen space-y-4 pt-4 px-3">
        <div className="">
          <Button className="flex flex-row justify-between w-full">
            <FaUserPlus />
            <p>crear usuario</p>
          </Button>
        </div>
        <div>
          <Button className="flex flex-row justify-between w-full">
            <FaUserSlash />
            <p>Bloquear usuario</p>
          </Button>
        </div>
        <div>
          <Button className="flex flex-row justify-between w-full">
            <FaUserMinus />
            <p>Listar usuarios</p>
          </Button>
        </div>
      </aside>
      {children}
    </section>
  );
}

import { Metadata } from "next";
import { ServicesNavBar } from "./components/servicesNavBar";

export const metadata: Metadata = {
  title: "Busqueda de servicios",
  description: "Servicios disponibles para la busqueda ",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ServicesNavBar />
      {children}
    </section>
  );
}

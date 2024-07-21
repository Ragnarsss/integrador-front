import { SearchingProvider } from "@/context/SearchingContext";
import { Metadata } from "next";
import { ServicesNavBar } from "./components/ServicesNavBar";

export const metadata: Metadata = {
  title: "Busqueda de servicios",
  description: "Servicios disponibles para la busqueda ",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <SearchingProvider>
        <ServicesNavBar />
        {children}
      </SearchingProvider>
    </section>
  );
}

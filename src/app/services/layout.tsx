import { Metadata } from "next";
import { ServicesNavBar } from "./components/ServicesNavBar";
import { SearchingFilters } from "./components/SearchingFilters";

export const metadata: Metadata = {
  title: "Busqueda de servicios",
  description: "Servicios disponibles para la busqueda ",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <ServicesNavBar />
      <div className="flex flex-grow">
        <SearchingFilters />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}

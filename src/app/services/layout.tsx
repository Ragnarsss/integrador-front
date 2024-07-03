import { Metadata } from "next";
import { ServicesNavBar } from "./components/ServicesNavBar";
import { SearchingFilters } from "./components/SearchingFilters";
import { SearchingProvider } from "@/context/SearchingContext";

export const metadata: Metadata = {
  title: "Busqueda de servicios",
  description: "Servicios disponibles para la busqueda ",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SearchingProvider>
      <div className="flex flex-col">
        <ServicesNavBar />
        <div className="flex flex-grow">
          <SearchingFilters />
          <main className="flex-grow overflow-auto h-screen z-0">
            {children}
          </main>
        </div>
      </div>
    </SearchingProvider>
  );
}

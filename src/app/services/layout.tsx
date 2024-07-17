import { SearchingProvider } from "@/context/SearchingContext";
import { Metadata } from "next";
import { ServicesNavBar } from "./components/ServicesNavBar";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Busqueda de servicios",
  description: "Servicios disponibles para la busqueda ",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <TooltipProvider>
        <SearchingProvider>
          <ServicesNavBar />
          {children}
        </SearchingProvider>
      </TooltipProvider>
    </section>
  );
}

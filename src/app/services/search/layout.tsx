import { SearchingFilters } from "../components/SearchingFilters";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <SearchingFilters />
      {children}
    </section>
  );
}

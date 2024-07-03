import { AdminNavBar } from "./components/AdminNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <AdminNavBar />
      {children}
    </section>
  );
}

import { ThemeToggler } from "@/components/ThemeToggler";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <ThemeToggler />
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}

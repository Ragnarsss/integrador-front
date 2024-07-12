import AuthNavBar from "./components/AuthNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <AuthNavBar />
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}

"use client";
import { AppNavBar } from "@/components/AppNavBar";
import { AppNavigationMenu } from "./components/AppNavigationMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <AppNavBar>
        <AppNavigationMenu />
      </AppNavBar>
      {children}
    </section>
  );
}

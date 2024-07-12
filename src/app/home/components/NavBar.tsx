import { AppNavigationMenu } from "./AppNavigationMenu";

type NavBarProps = {
  children?: React.ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
  return (
    <nav className="flex-row flex justify-center items-center h-20 bg-primary">
      <h1 className="font-bold text-3xl">Servicios</h1>
      <AppNavigationMenu />
    </nav>
  );
}

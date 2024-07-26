"use client";
import LoginForm from "@/app/auth/components/LoginForm";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { PiUserCircleMinusThin, PiUserCirclePlusThin } from "react-icons/pi";

export function AppSheet() {
  const { userEmail, logout } = useAuth();

  const handleClick = async () => {
    await logout();
  };
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          {userEmail !== "" ? (
            <PiUserCircleMinusThin
              size={30}
              title="Manage your account"
              className="text-black dark:text-white hover:text-primary hover:dark:text-primary transition-all duration-300 ease-in-out cursor-pointer"
            />
          ) : (
            <PiUserCirclePlusThin
              size={30}
              title="Manage your account"
              className="text-black dark:text-white hover:text-primary hover:dark:text-primary transition-all duration-300 ease-in-out cursor-pointer"
            />
          )}
        </SheetTrigger>
        <SheetContent className="gap-y-4">
          {userEmail !== "" ? (
            <>
              <SheetHeader>
                <SheetTitle className="">Cerrar sesión</SheetTitle>
                <SheetDescription>
                  ¿Estás seguro de que deseas cerrar sesión?
                </SheetDescription>
              </SheetHeader>
              <SheetFooter className="mt-12">
                <SheetClose asChild>
                  <Button onClick={handleClick}>Cerrar sesión</Button>
                </SheetClose>
              </SheetFooter>
            </>
          ) : (
            <>
              <SheetHeader>
                <SheetTitle className="">Iniciar sesión</SheetTitle>
                <SheetDescription>
                  Ingresa tus datos para acceder a tu cuenta
                </SheetDescription>
              </SheetHeader>
              <LoginForm />
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

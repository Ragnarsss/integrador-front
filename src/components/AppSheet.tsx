import LoginForm from "@/app/auth/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { PiUserCirclePlusThin } from "react-icons/pi";

export function AppSheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <PiUserCirclePlusThin
            size={30}
            title="Manage your account"
            className="text-black dark:text-white hover:text-primary hover:dark:text-primary transition-all duration-300 ease-in-out cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="gap-y-4">
          <LoginForm />
        </SheetContent>
      </Sheet>
      {/* <Sheet>
        <SheetTrigger asChild>
          <PiUserCirclePlusThin
            size={30}
            title="Manage your account"
            className="text-black dark:text-white hover:text-primary hover:dark:text-primary transition-all duration-300 ease-in-out cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="gap-y-4">
          <SheetHeader>
            <SheetTitle className="">Iniciar sesión</SheetTitle>
            <SheetDescription>
              Ingresa tus datos para acceder a tu cuenta
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Nombre de usuario
              </Label>
              <Input
                type="text"
                id="username"
                value="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Contraseña
              </Label>
              <Input
                type="password"
                id="password"
                value="password"
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Iniciar sesión</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet> */}
    </>
  );
}

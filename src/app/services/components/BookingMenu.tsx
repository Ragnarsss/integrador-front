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

export function BookingMenu() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-black text-white hover:bg-primary hover:text-black dark:bg-primary dark:text-white dark:hover:text-black">
            Agendar
          </Button>
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
      </Sheet>
    </>
  );
}

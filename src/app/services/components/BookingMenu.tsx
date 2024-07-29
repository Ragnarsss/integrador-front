import LoginForm from "@/app/auth/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";

export function BookingMenu() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-black text-white hover:bg-primary hover:text-black dark:bg-primary dark:text-white dark:hover:text-black">
            Agendar
          </Button>
        </SheetTrigger>
        <SheetContent className="gap-y-4">
          {isLoggedIn ? (
            <div>agendar</div>
          ) : (
            <>
              <LoginForm />
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

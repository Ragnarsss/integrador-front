import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import BookingForm from "./BookingForm";

export function ServiceBooking({ title, professional, email, professionalId }) {
  const handleBooking = () => {
    console.log("Booking");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Agendar</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <BookingForm professionalId />
      </SheetContent>
    </Sheet>
  );
}

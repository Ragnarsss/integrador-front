import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageCarousel } from "./ImageCarousel";
import { ServiceBooking } from "./ServiceBooking";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
}

export function ServiceCard({
  title,
  professionalId,
  description,
  category,
}: ServiceCardProps) {
  return (
    <Card className="w-[350px] m-4">
      <CardHeader>
        <CardTitle className="ml-6">{title}</CardTitle>
        <ImageCarousel />
      </CardHeader>
      <CardContent>
        <CardTitle style={{ paddingBottom: "20px" }}>{category}</CardTitle>
        <CardDescription>{description} </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <ServiceBooking
          title={title}
          email={"email"}
          professionalId={professionalId}
          professional={"asdasd"}
        />
      </CardFooter>
    </Card>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageCarousel } from "./ImageCarousel";
import { Button } from "@/components/ui/button";

export function ServiceCard() {
  return (
    <Card className="w-[350px] m-4">
      <CardHeader>
        <CardTitle className="ml-6">Servicio</CardTitle>
        <ImageCarousel />
      </CardHeader>
      <CardContent>
        <CardTitle style={{ paddingBottom: "20px" }}>$ 9.990</CardTitle>
        <CardDescription>
          Un servicio que puede ser agendado por usuarios
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-blue-400">Detalles</Button>
        <Button className="bg-green-400">Agendar</Button>
      </CardFooter>
    </Card>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ServiceCardProps } from "@/types/props.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel";

export function ServiceCard({
  serviceId,
  averageRating,
  title,
  professionalId,
  description,
  category,
}: ServiceCardProps) {
  const { toast } = useToast();
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = () => {
    setIsLoading(true);
    setIsLoading(false);
  };
  return (
    <Card className="w-[350px] m-4">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="ml-6">{title}</CardTitle>
          <CardDescription className="ml-6">
            Valoracion: {averageRating}
          </CardDescription>
        </div>
        <ImageCarousel />
      </CardHeader>
      <CardContent>
        <CardTitle style={{ paddingBottom: "20px" }}>{category}</CardTitle>
        <CardDescription>Detalles rapidos: {description} </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleSubmit}>Agendar</Button>
      </CardFooter>
    </Card>
  );
}

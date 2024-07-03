"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageCarousel } from "./ImageCarousel";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ServerError, useMutation } from "@apollo/client";
import { BOOKING_MUTATION } from "../graphql/mutations/mutations";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  professionalId: number;
  serviceId: number;
  description: string;
  category: string;
}

export function ServiceCard({
  title,
  professionalId,
  serviceId,
  description,
  category,
}: ServiceCardProps) {
  const { toast } = useToast();
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [createBooking, { loading, data, error }] = useMutation(
    BOOKING_MUTATION,
    {
      onError: (error) => {
        setIsLoading(false);
        if (
          error.networkError &&
          (error.networkError as ServerError).statusCode === 400
        ) {
          console.log(" 400 error");
          setErrorMessage(
            "Request invalido. Por favor, verifica tus credenciales."
          );
        } else {
          console.log("error");
          setErrorMessage(
            "Ocurrió un error. Por favor, intenta de nuevo más tarde."
          );
        }
      },
      onCompleted: (data) => {
        alert("Reserva creada");
        toast({
          title: "Reserva creada",
          description: "Tu reserva ha sido creada con éxito",
        });

        router.push("/auth/login");
      },
    }
  );
  const handleSubmit = () => {
    setIsLoading(true);
    createBooking({
      variables: {
        input: {
          userId,
          IsActive: true,
          serviceId,
          professionalId,
        },
      },
    });
    setIsLoading(false);
  };
  return (
    <Card className="w-[350px] m-4">
      <CardHeader>
        <CardTitle>service id: {serviceId}</CardTitle>
        <CardTitle className="ml-6">
          Professional id: {professionalId}
        </CardTitle>
        <CardTitle className="ml-6">{title}</CardTitle>
        <ImageCarousel />
      </CardHeader>
      <CardContent>
        <CardTitle style={{ paddingBottom: "20px" }}>{category}</CardTitle>
        <CardDescription>{description} </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleSubmit}>Agendar</Button>
      </CardFooter>
    </Card>
  );
}

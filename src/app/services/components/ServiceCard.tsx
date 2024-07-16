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
import { ServiceCardProps } from "@/lib/types/props.types";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCalendarCheck, FaRegCommentDots } from "react-icons/fa";
import { FaHandHoldingDollar, FaRankingStar } from "react-icons/fa6";
import { MdCategory, MdOutlineRateReview } from "react-icons/md";
import { ImageCarousel } from "./ImageCarousel";

export function ServiceCard({
  serviceId,
  title,
  professionalId,
  description,
  category,
  price,
  averageRating,
  totalSolicitations,
  totalReviews,
  totalRatings,
  totalComments,
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
          <Rating
            name="half-rating-read"
            value={averageRating}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <ImageCarousel />
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center justify-between">
          <MdCategory />
          <CardDescription>Categoria: {category}</CardDescription>
        </div>
        <div className="flex flex-row items-center justify-between">
          <FaHandHoldingDollar />
          <CardDescription>Precio: {price}</CardDescription>
        </div>
        <div className="flex flex-row items-center justify-between">
          <MdOutlineRateReview />
          <CardDescription>Reseñas: {totalReviews}</CardDescription>
        </div>
        <div className="flex flex-row items-center justify-between">
          <FaCalendarCheck />
          <CardDescription>Solicitudes: {totalSolicitations}</CardDescription>
        </div>
        <div className="flex flex-row items-center justify-between">
          <FaRegCommentDots />
          <CardDescription>Comentarios: {totalComments}</CardDescription>
        </div>
        <div className="flex flex-row items-center justify-between">
          <FaRankingStar />

          <CardDescription>Valoraciones: {totalRatings}</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          className="bg-black text-white hover:bg-primary hover:text-black dark:bg-primary dark:text-white dark:hover:text-black"
          onClick={handleSubmit}
        >
          Agendar
        </Button>
        <Button
          className="text-primary bg-white outline outline-3 hover:bg-black hover:outline-none dark:outline-primary dark:bg-black
          dark:text-white dark:hover:text-black dark:hover:bg-white dark:hover:outline-none"
          onClick={handleSubmit}
        >
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceCardProps } from "@/lib/types/props.types";
import Rating from "@mui/material/Rating";
import { MdCategory } from "react-icons/md";
import { ImageCarousel } from "./ImageCarousel";
import ServiceDetail from "./ServiceDetail";

export function ServiceCard({
  title,
  category,
  price,
  brief_details,
  long_details,
  professionalId,
  averageRating,
  totalSolicitations,
  totalReviews,
  totalRatings,
  totalComments,
}: ServiceCardProps) {
  return (
    <Card className="container w-[400px]">
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
        <div className="flex flex-row items-center justify-center pb-4">
          <div className="flex flex-col items-center pr-10">
            <MdCategory />
            <CardDescription>{category}</CardDescription>
          </div>
          <CardDescription>{brief_details}</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <ServiceDetail
          professionalId={professionalId}
          category={category}
          brief_details={brief_details}
          long_details={long_details}
          price={price}
          title={title}
          averageRating={averageRating}
          totalSolicitations={totalSolicitations}
          totalReviews={totalReviews}
          totalRatings={totalRatings}
          totalComments={totalComments}
        />
      </CardFooter>
    </Card>
  );
}

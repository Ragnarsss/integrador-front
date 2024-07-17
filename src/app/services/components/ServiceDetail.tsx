"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ServiceCardProps } from "@/lib/types/props.types";
import { Rating } from "@mui/material";
import { FaCalendarCheck, FaRegCommentDots } from "react-icons/fa";
import { FaHandHoldingDollar, FaRankingStar } from "react-icons/fa6";
import { MdCategory, MdOutlineRateReview } from "react-icons/md";
import { BookingMenu } from "./BookingMenu";
import { ImageCarousel } from "./ImageCarousel";

export default function ServiceDetail({
  title,
  category,
  price,
  brief_details,
  long_details,
  averageRating,
  totalSolicitations,
  totalReviews,
  totalRatings,
  totalComments,
}: ServiceCardProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="text-primary bg-white outline outline-3 hover:bg-black hover:outline-none dark:outline-primary dark:bg-black
          dark:text-white dark:hover:text-black dark:hover:bg-white dark:hover:outline-none"
          >
            Ver detalles
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-row items-center justify-between">
              <DialogTitle className="ml-6">{title}</DialogTitle>
              <Rating
                name="half-rating-read"
                value={averageRating}
                readOnly
                size="small"
                precision={0.5}
              />
            </div>
            <DialogDescription>{brief_details}</DialogDescription>
          </DialogHeader>
          <ImageCarousel />
          <div className="flex flex-row items-center justify-center pb-4">
            <div className="flex flex-col items-center pr-10">
              <MdCategory />
              <DialogDescription>{category}</DialogDescription>
            </div>
            <DialogDescription>
              <span className="font-bold">Detalles:</span> {long_details}
            </DialogDescription>
          </div>
          <div className="grid grid-flow-row items-center justify-between w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <FaHandHoldingDollar />
              <p>Costo:</p>
              <DialogDescription>${price}</DialogDescription>
            </div>
            <div className="flex flex-col items-center justify-between">
              <MdOutlineRateReview />
              <DialogDescription>{totalReviews}</DialogDescription>
            </div>
            <div className="flex flex-col items-center justify-between">
              <FaCalendarCheck />
              <DialogDescription>{totalSolicitations}</DialogDescription>
            </div>
            <div className="flex flex-col items-center justify-between">
              <FaRegCommentDots />
              <DialogDescription>{totalComments}</DialogDescription>
            </div>
            <div className="flex flex-col items-center justify-between">
              <FaRankingStar />
              <DialogDescription>{totalRatings}</DialogDescription>
            </div>
          </div>
          <DialogFooter>
            <div>
              <BookingMenu />
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearch } from "@/hooks/useSearch";
import { exampleServices } from "@/lib/staticdata";
import { Rating, Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdCategory } from "react-icons/md";
import { ImageCarousel } from "./ImageCarousel";
import { ServiceCard } from "./ServiceCard";

export const ServicesRender = (props: any) => {
  const router = useRouter();
  const { serviceNameFilter } = useSearch();
  const [serviceCardsData, setServiceCardsData] = useState(exampleServices);

  return (
    <section>
      <div className="flex flex-row flex-wrap overflow-scroll pt-5 ml-5 gap-6 pb-24">
        {serviceCardsData.map((cardData, index) => {
          return <ServiceCard key={index} {...cardData} />;
        })}
      </div>
    </section>
  );
};

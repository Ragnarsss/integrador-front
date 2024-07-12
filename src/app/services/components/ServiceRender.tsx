"use client";

import { useSearch } from "@/hooks/useSearch";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { exampleServices } from "@/common/staticdata";

interface CardData {
  id: number;
  title: string;
  description: string;
  category: string;
  serviceId: number;
  professionalId: number;
}
export const ServicesRender = (props: any) => {
  const router = useRouter();
  const { serviceNameFilter } = useSearch();
  const [serviceCardsData, setServiceCardsData] = useState(exampleServices);

  return (
    <div className="flex flex-row flex-wrap place-content-center ">
      {serviceCardsData.map((cardData, index) => {
        console.log(cardData);
        return (
          <ServiceCard key={index} {...cardData} serviceId={cardData.id} />
        );
      })}
    </div>
  );
};

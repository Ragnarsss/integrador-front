"use client";

import { useSearch } from "@/hooks/useSearch";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { exampleServices } from "@/lib/staticdata";

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

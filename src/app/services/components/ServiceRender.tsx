"use client";

import { useQuery } from "@apollo/client";
import { ServiceCard } from "./ServiceCard";
import { ALL_SERVICES_QUERY } from "../graphql/queries/queries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearch } from "@/hooks/useSearch";

interface CardData {
  id: string;
  title: string;
  description: string;
  category: string;
}
export const ServiceCardRender = (props: any) => {
  const router = useRouter();
  const { serviceNameFilter } = useSearch();
  const [serviceCardsData, setServiceCardsData] = useState([]);

  const { error, data } = useQuery(ALL_SERVICES_QUERY, {
    onError: (error) => {
      alert("Error al cargar los servicios");
    },
    onCompleted: (data) => {
      setServiceCardsData(data.getAllServices);
    },
  });

  useEffect(() => {
    const filteredData = serviceCardsData.filter((cardData: CardData) =>
      cardData.title.toLowerCase().includes(serviceNameFilter.toLowerCase())
    );
    return () => {};
  }, [serviceNameFilter, serviceCardsData]);

  return (
    <div className="flex flex-row flex-wrap place-content-center ">
      {serviceCardsData.map((cardData: CardData, index) => (
        <ServiceCard key={index} {...cardData} />
      ))}
    </div>
  );
};

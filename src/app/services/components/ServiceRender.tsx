"use client";

import { ServiceCard } from "./ServiceCard";

export const ServiceCardRender = (props: any) => {
  // Supongamos que tienes una lista de datos para tus tarjetas
  const serviceCardsData = [
    {
      title: "Card 1",
      price: 100,
      description: "This is card 1",
      imageUrl: "url1",
    },
    {
      title: "Card 2",
      price: 200,
      description: "This is card 2",
      imageUrl: "url2",
    },
    {
      title: "Card 3",
      price: 200,
      description: "This is card 3",
      imageUrl: "url3",
    },
    {
      title: "Card 4",
      price: 200,
      description: "This is card 4",
      imageUrl: "url4",
    },
    {
      title: "Card 5",
      price: 200,
      description: "This is card 5",
      imageUrl: "url5",
    },
    {
      title: "Card 6",
      price: 200,
      description: "This is card 6",
      imageUrl: "url6",
    },
    {
      title: "Card 7",
      price: 200,
      description: "This is card 7",
      imageUrl: "url7",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap place-content-center ">
      {serviceCardsData.map((cardData, index) => (
        <ServiceCard key={index} {...cardData} />
      ))}
    </div>
  );
};

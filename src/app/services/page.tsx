"use client";

import { ServiceCard } from "./components/ServiceCard";

export default function Page(props: any) {
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
  ];

  return (
    <div className="bg-purple-400 h-full scroll-smooth">
      <div className="flex flex-row flex-wrap">
        {serviceCardsData.map((data, index) => (
          <ServiceCard
            key={index}
            title={data.title}
            price={data.price}
            description={data.description}
            imageUrl={data.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useSearch } from "@/hooks/useSearch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { exampleServices } from "@/lib/staticdata";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating, Skeleton } from "@mui/material";
import { MdCategory } from "react-icons/md";
import { ImageCarousel } from "./ImageCarousel";

export const ServicesRender = (props: any) => {
  const router = useRouter();
  const { serviceNameFilter } = useSearch();
  const [serviceCardsData, setServiceCardsData] = useState(exampleServices);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simular la carga de datos de una API
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga
  }, []);

  return (
    <section>
      <div className="flex flex-row flex-wrap overflow-scroll pt-5 ml-5 gap-6 pb-24">
        {!isLoading ? (
          <>
            <div>
              <Card className="container w-[400px]">
                <CardHeader>
                  <div className="flex flex-row items-center justify-between">
                    <CardTitle className="ml-6"></CardTitle>
                    <Rating
                      name="half-rating-read"
                      value={5}
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
                      <CardDescription>asdasdasd</CardDescription>
                    </div>
                    <CardDescription>asdasdas</CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={30}
                    height={15}
                  />
                </CardFooter>
              </Card>
            </div>
          </>
        ) : (
          serviceCardsData.map((cardData, index) => {
            return <ServiceCard key={index} {...cardData} />;
          })
        )}
      </div>
    </section>
  );
};

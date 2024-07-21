"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simular la carga de datos de una API
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga
  }, []);

  return (
    <section className="px-12 bg-primary">
      {isLoading ? (
        <>
          <Skeleton variant="circular" width={150} height={150} />
          <Skeleton variant="text" width={200} height={60} className="mt-5" />
          <Skeleton
            variant="text"
            width={300}
            height={30}
            className="mt-5 pb-4"
          />
        </>
      ) : (
        <div className="pt-10">
          <Avatar style={{ width: 150, height: 150 }}>
            <AvatarImage src="/avatar.png" alt="@shadcn" />
          </Avatar>
          <h1 className="text-4xl text-white mt-5">Mi perfil</h1>
          <p className="text-white mt-5 pb-4">
            Aquí puedes ver y editar tu información personal.
          </p>
        </div>
      )}
    </section>
  );
};

export default Page;

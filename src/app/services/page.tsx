"use client";

import { ServicesRender } from "./components/ServiceRender";

export default function Page(props: any) {
  return (
    <>
      <h1 className="text-primary">Servicios disponibles</h1>
      <ServicesRender />
    </>
  );
}

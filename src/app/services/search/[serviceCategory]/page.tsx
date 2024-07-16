"use client";

import { useSearch } from "@/hooks/useSearch";

export default function Page({
  params,
}: {
  params: { serviceCategory: string };
}) {
  const {
    ratingFilter,
    serviceNameFilter,
    serviceValueStartFilter,
    serviceValueEndFilter,
  } = useSearch();

  return (
    <section>
      <p className="text-gray-500">
        servicio nombre filro: {serviceNameFilter}
      </p>
      <p className="text-gray-500">
        valoracion promedio filtro: {ratingFilter}
      </p>
      <p className="text-gray-500">
        valor minimo del servicio filtro: {serviceValueStartFilter}
      </p>
      <p className="text-gray-500">
        valor maximo del servicio filtro: {serviceValueEndFilter}
      </p>
      <h1 className="text-primary">Categoria: {params.serviceCategory}</h1>
    </section>
  );
}

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
      <p className="text-gray-500">{serviceNameFilter}</p>
      <p className="text-gray-500">{ratingFilter}</p>
      <p className="text-gray-500">{serviceValueStartFilter}</p>
      <p className="text-gray-500">{serviceValueEndFilter}</p>
      <h1 className="text-primary">{params.serviceCategory}</h1>
    </section>
  );
}

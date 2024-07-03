"use client";
import { Slider } from "@/components/ui/slider";
import { useSearch } from "@/hooks/useSearch";
import React from "react";
import { useForm } from "react-hook-form";

export const SearchingFilters = () => {
  const {
    ratingFilter,
    serviceValueStartFilter,
    serviceValueEndFilter,
    setRatingFilter,
    setServiceValueStartFilter,
    setServiceValueEndFilter,
  } = useSearch();

  return (
    <aside className=" bg-slate-800 px-8 pt-4 w-96">
      <h2 className=" bg-primary-foreground font-bold text-4xl mb-8 ">
        Filtros
      </h2>

      <div className="bg-primary mb-8 flex items-center justify-center">
        <label className="block primary text-sm font-bold" htmlFor="price">
          Rango de precio
        </label>
        <div className="flex items-center space-x-2">
          <span>$</span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="minPrice"
            placeholder="Precio mínimo"
            value={serviceValueStartFilter}
            onChange={(e) => setServiceValueStartFilter(Number(e.target.value))}
            style={{ appearance: "none", MozAppearance: "textfield" }}
          />
          <span>-</span>
          <span>$</span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="maxPrice"
            placeholder="Precio máximo"
            value={serviceValueEndFilter}
            onChange={(e) => setServiceValueEndFilter(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="bg-slate-300 mb-4 items-center flex justify-center"></div>
      <div className="mb-4 bg-secondary flex flex-col items-center justify-center">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Calificación: {ratingFilter}
        </label>
        <Slider
          defaultValue={[2.5]}
          max={5}
          min={0}
          step={1}
          value={[ratingFilter]}
          onValueChange={(value) => setRatingFilter(value[0])}
        />
      </div>
    </aside>
  );
};

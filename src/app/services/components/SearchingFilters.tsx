"use client";
import { DatePickerWithRange } from "@/components/ui/DatePicker";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const SearchingFilters = () => {
  const [rating, setRating] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    watch,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const minPrice = watch("filterMinPrice");
  const maxPrice = watch("filterMaxPrice");

  React.useEffect(() => {
    if (minPrice && maxPrice && minPrice > maxPrice) {
      setError("filterMaxPrice", {
        type: "manual",
        message: "El precio máximo debe ser mayor al precio mínimo",
      });
    }
  }, [minPrice, maxPrice, setError]);

  const onSubmit = handleSubmit((data) => {
    setShowErrors(true);
    console.log(data);
    alert("Filtros enviados");
  });
  return (
    <aside className="bg-purple-300 p-4 w-96">
      <h2 className="font-bold mb-4">Filtros</h2>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
        id="search"
        placeholder="Buscar servicio"
        {...register("search", {
          required: {
            value: false,
            message: "El campo de búsqueda es requerido",
          },
        })}
      />
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Rango de precio
          </label>
          <div className="flex items-center space-x-2">
            <span>$</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="minPrice"
              placeholder="Precio mínimo"
              value={minPrice}
              style={{ appearance: "none", MozAppearance: "textfield" }}
              {...register("filterMinPrice", {
                pattern: {
                  value: /^\d{1,3}(?:\.\d{3})*$/,
                  message:
                    "El precio debe tener el formato correcto (ej. 100.000 o 1.000.000)",
                },
                min: 0,
              })}
            />
            <span>-</span>
            <span>$</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="maxPrice"
              placeholder="Precio máximo"
              value={maxPrice}
              {...register("filterMinPrice", {
                pattern: {
                  value: /^(?:0|[1-9]\d{0,2}(?:\.\d{3})*|1000000)$/,
                  message:
                    "El precio debe tener el formato correcto (ej. 100.000 o 1.000.000)",
                },
              })}
            />
          </div>
        </div>
        <div className="mb-4">
          <DatePickerWithRange />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Calificación: {rating}
          </label>
          <Slider
            defaultValue={[rating]}
            max={5}
            min={0}
            step={1}
            value={[rating]}
            onValueChange={(value) => setRating(value[0])}
          />
        </div>
        <Button variant={"default"} type="submit">
          Enviar
        </Button>
      </form>
    </aside>
  );
};

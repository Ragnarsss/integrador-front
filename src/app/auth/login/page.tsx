"use client";
import api from "@/lib/api";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const [showErrors, setShowErrors] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    setShowErrors(true);
    console.log(data);

    api.post("login", data).then((response) => {
      console.log(response);
    });
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">
          Inicio de sesion
        </h1>

        <div className="relative">
          <label className="text-slate-500 mb-2 block text-sm">Correo:</label>
          <input
            type="email"
            placeholder="Correo"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Correo no es válido",
              },
            })}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          />
          {errors.email && typeof errors.email.message === "string" && (
            <span className="absolute text-red-500 text-xs right-3 top-0 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="relative">
          <label className="text-slate-500 mb-2 block text-sm">
            Contraseña:
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "Contraseña es requerida",
              },
              minLength: {
                value: 8,
                message: "Contraseña debe tener al menos 8 caracteres",
              },
            })}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          />
          {errors.password && typeof errors.password.message === "string" && (
            <span className="absolute text-red-500 text-xs right-3 top-0 mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {errors.password && typeof errors.password.message === "string" && (
          <span>Credenciales incorrectas</span>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
        >
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}

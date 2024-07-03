"use client";
import CardWrapper from "@/components/CardWrapper";
import api from "@/lib/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginForm from "../components/LoginForm";

export default function Page() {
  return (
    <CardWrapper
      label="Ingresa con tu cuenta!"
      title="
      Iniciar sesión"
      backButtonHref="/welcome"
      backButtonLabel="Volver al inicio"
    >
      <LoginForm />
    </CardWrapper>
  );
}

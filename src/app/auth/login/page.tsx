"use client";
import CardWrapper from "@/components/CardWrapper";
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

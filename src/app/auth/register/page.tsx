"use client";
import CardWrapper from "@/components/CardWrapper";
import RegisterForm from "../components/RegisterForm";
function Register() {
  return (
    <CardWrapper
      label="Crea una cuenta aquí!"
      title="Registro"
      backButtonHref="/auth/login"
      backButtonLabel="¿Ya tienes una cuenta? Inicia sesión aquí."
    >
      <RegisterForm />
    </CardWrapper>
  );
}

export default Register;

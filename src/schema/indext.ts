import * as z from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "Ingresa un correo válido",
    }),
    name: z.string().min(3, {
      message: "Ingresa un nombre mas largo",
    }),
    password: z.string().min(8, {
      message: "Ingresa una contraseña mas larga. Mínimo 8 caracteres",
    }),
    passwordConfirmation: z.string().min(8, {
      message: "Debes confirmar tu contraseña",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
    path: ["passwordConfirmation"],
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Ingresa un correo válido",
  }),
  password: z.string().min(8, {
    message: "Ingresa una contraseña mas larga. Mínimo 8 caracteres",
  }),
});

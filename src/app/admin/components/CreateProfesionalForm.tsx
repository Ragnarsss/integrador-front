"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schema/indext";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { ServerError, useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "@/app/services/graphql/mutations/mutations";
import { useRouter } from "next/navigation";

const CreateUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [register, { data, error }] = useMutation(REGISTER_MUTATION, {
    onError: (error) => {
      setIsLoading(false);
      if (
        error.networkError &&
        (error.networkError as ServerError).statusCode === 400
      ) {
        setErrorMessage(
          "Request invalido. Por favor, verifica tus credenciales."
        );
      } else {
        setErrorMessage(
          "Ocurrió un error. Por favor, intenta de nuevo más tarde."
        );
      }
    },
    onCompleted: (data) => {
      router.push("/auth/login");
    },
  });
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setIsLoading(true);
    register({
      variables: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6`}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="example@email.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <FormControl>
                    <Input {...field} type="name" placeholder="Nombre" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Contraseña: </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Contraseña"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirmar contraseña: </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Confirma tu contraseña"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Registrarse"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateUserForm;

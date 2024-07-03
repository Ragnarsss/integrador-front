"use client";
import { AUTHENTICATE_MUTATION } from "@/app/services/graphql/mutations/mutations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { LoginSchema } from "@/schema/indext";
import { ServerError, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login: authLogin } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const [login, { data, error }] = useMutation(AUTHENTICATE_MUTATION, {
    onError: (error) => {
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
      setIsLoading(false);
    },
    onCompleted: (data) => {
      authLogin(data.login.user.id, data.login.token, data.login.user.email);
      router.push("/home");
    },
  });
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    await login({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Correo electronico: </FormLabel>
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
        </div>
        {errorMessage && <p>{errorMessage}</p>}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Iniciar sesión"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;

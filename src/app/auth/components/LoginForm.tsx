"use client";
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
import { LoginSchema } from "@/schema/indext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import {
  AUTHENTICATE_MUTATION,
  GET_USER_BY_ID,
} from "@/app/services/graphql/mutations/mutations";
import { ServerError } from "@apollo/client";
import { useAuth } from "@/hooks/useAuth";

const LoginForm = () => {
  const { setAuthenticationToken } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  // const { getUserById } = useMutation(GET_USER_BY_ID, {
  //   onCompleted: (data) => {
  //     console.log(data);
  //   },
  // });

  const [login, { loading, data, error }] = useMutation(AUTHENTICATE_MUTATION, {
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
      setErrorMessage(error.message);
    },
    onCompleted: (data) => {
      router.push("/home");
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    login({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
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

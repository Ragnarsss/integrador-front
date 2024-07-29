import React, { useState } from "react";
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
import { CreateUserSchema } from "@/schema/indext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RoleCombo } from "./RoleCombo";

function CreateUserForm() {
  const { login, isLoading } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const form = useForm({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      email: "",
      name: "",
      role: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CreateUserSchema>) => {};
  return (
    <>
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
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Contraseña: </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Contraseña" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Rol: </FormLabel>
                    <FormControl>
                      <RoleCombo />
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
      <RoleCombo />
    </>
  );
}

export default CreateUserForm;

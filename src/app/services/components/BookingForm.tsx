"use client";
import { BOOKING_MUTATION } from "@/app/services/graphql/mutations/mutations";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
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
import { BookingSchema, RegisterSchema } from "@/schema/indext";
import { ServerError, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PopoverContent } from "@/components/ui/popover";

const BookingForm = ({ professionalId }) => {
  const [date, setDate] = useState<Date>();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [createBooking, { loading, data, error }] = useMutation(
    BOOKING_MUTATION,
    {
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
    }
  );

  const form = useForm({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
    setIsLoading(true);
    createBooking({
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-6 mt-10`}
      >
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
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Agendar servicio"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;

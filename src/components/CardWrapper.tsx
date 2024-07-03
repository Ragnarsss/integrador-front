import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import AuthHeader from "@/app/auth/components/AuthHeader";
import BackButton from "@/app/auth/components/BackButton";

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}
function CardWrapper({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: CardWrapperProps) {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;

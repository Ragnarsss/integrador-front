import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { AuthProvider } from "@/context/AuthContext";
import { ApolloWrapper } from "./ApolloWrapper.jsx";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service App",
  description: "El servicio que necesitas, siempre a la mano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`h-screen overflow-hidden ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ApolloWrapper>
            <AuthProvider>{children}</AuthProvider>
          </ApolloWrapper>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

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
        {children}
      </body>
    </html>
  );
}

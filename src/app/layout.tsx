"use client";
import ThemeProvider from "@/components/ThemeProvider";
import { Progress } from "@/components/ui/progress";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { useEffect, useState } from "react";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function LoadingProgress() {
  const [progress, setProgress] = useState(33);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 2000);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth();
  return isLoading ? <LoadingProgress /> : children;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "overflow-hidden bg-background font-sans antialiased dark:bg-black dark:text-white transition-colors duration-300 ease-in-out",
          fontSans.className
        )}
      >
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <RootLayoutContent>{children}</RootLayoutContent>
            </AuthProvider>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}

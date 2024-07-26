import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Headlines",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <UserProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="mx-auto w-full px-5 sm:px-auto sm:container sm:max-w-6xl pt-16 sm:pt-20">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}

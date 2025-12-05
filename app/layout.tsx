import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import QueryProvider from "../providers/query-provider";
import { ToastProvider } from "../providers/toast-provider";
import { AuthModalProvider } from "../providers/auth-modal-provider";
import { AuthModal } from "../components/auth/auth-modal";
import { Footer } from "../components/footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sport Up",
  description: "Sport wear ecommers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased background-[--var(--color-gray-400)] container mx-auto  min-h-screen
          flex flex-col`}
      >
        <QueryProvider>
          <AuthModalProvider>
            <Header />
              {children}
            <Footer />
            <ToastProvider />
            <AuthModal />
          </AuthModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

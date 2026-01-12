import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrabajoYa - Conecta con tu próximo empleo",
  description:
    "Plataforma de empleo que conecta postulantes con empresas. Descarga la app para Android e iOS.",
  verification: {
    google: "4jG9cxR077qkHSsn0QWKy-eIG_R7yyJk7mE2kjEekjE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ConditionalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

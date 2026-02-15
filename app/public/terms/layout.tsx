import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso - TrabajoYa",
  description:
    "Términos y condiciones de uso de la plataforma TrabajoYa. Leé las condiciones legales antes de usar nuestros servicios de búsqueda de empleo.",
  alternates: {
    canonical: "https://web.trabajo-ya.com/public/terms",
  },
  openGraph: {
    title: "Términos y Condiciones - TrabajoYa",
    description:
      "Términos y condiciones de uso de TrabajoYa, plataforma de empleo en Argentina.",
    url: "https://web.trabajo-ya.com/public/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


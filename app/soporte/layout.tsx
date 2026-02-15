import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centro de Ayuda y Preguntas Frecuentes - TrabajoYa",
  description:
    "Encontrá respuestas a las preguntas más frecuentes sobre TrabajoYa. Cómo registrarte, buscar empleo, postularte a ofertas laborales, publicar empleos como empresa y más. Soporte y ayuda.",
  alternates: {
    canonical: "https://web.trabajo-ya.com/soporte",
  },
  openGraph: {
    title: "Centro de Ayuda y Preguntas Frecuentes - TrabajoYa",
    description:
      "Preguntas frecuentes y centro de ayuda de TrabajoYa. Resolvé todas tus dudas sobre la plataforma de empleo #1 de Argentina.",
    url: "https://web.trabajo-ya.com/soporte",
    type: "website",
  },
};

export default function SoporteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

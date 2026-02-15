import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centro de Ayuda y Preguntas Frecuentes - TrabajoYa",
  description:
    "Encontrá respuestas a las preguntas más frecuentes sobre TrabajoYa. Cómo registrarte, buscar empleo, postularte, publicar ofertas y más. Centro de ayuda y soporte.",
  alternates: {
    canonical: "https://web.trabajo-ya.com/soporte",
  },
  openGraph: {
    title: "Centro de Ayuda - TrabajoYa",
    description:
      "Preguntas frecuentes y centro de ayuda de TrabajoYa. Resolvé todas tus dudas sobre la plataforma de empleo.",
    url: "https://web.trabajo-ya.com/soporte",
  },
};

export default function SoporteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


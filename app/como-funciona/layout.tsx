import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo funciona TrabajoYa - Guía para postulantes y empresas",
  description:
    "Descubrí cómo usar TrabajoYa: creá tu perfil, buscá empleo, postulate con un click. Para empresas: publicá ofertas, gestioná postulaciones y contactá candidatos.",
  alternates: {
    canonical: "https://web.trabajo-ya.com/como-funciona",
  },
  openGraph: {
    title: "Cómo funciona TrabajoYa - Guía completa",
    description:
      "Aprendé a usar TrabajoYa para buscar trabajo o contratar talento en Argentina. Guía paso a paso para postulantes y empresas.",
    url: "https://web.trabajo-ya.com/como-funciona",
  },
};

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


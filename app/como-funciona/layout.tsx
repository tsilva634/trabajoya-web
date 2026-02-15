import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cómo funciona TrabajoYa - Guía para buscar empleo y publicar ofertas",
  description:
    "Guía completa de cómo usar TrabajoYa paso a paso. Para postulantes: creá tu perfil, subí tu CV y postulate. Para empresas: publicá ofertas, gestioná candidatos y contratá talento en Argentina.",
  alternates: {
    canonical: "https://web.trabajo-ya.com/como-funciona",
  },
  openGraph: {
    title: "Cómo funciona TrabajoYa - Guía completa paso a paso",
    description:
      "Aprendé a usar TrabajoYa para buscar trabajo o contratar talento en Argentina. Guía paso a paso para postulantes y empresas.",
    url: "https://web.trabajo-ya.com/como-funciona",
    type: "website",
  },
};

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

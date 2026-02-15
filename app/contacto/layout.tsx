import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - TrabajoYa",
  description:
    "Contactá al equipo de TrabajoYa. Envianos tu consulta, sugerencia o reporte un problema. Respondemos en 24-48 horas hábiles. Email: soporte@trabajoya.com",
  alternates: {
    canonical: "https://web.trabajo-ya.com/contacto",
  },
  openGraph: {
    title: "Contacto - TrabajoYa",
    description:
      "Contactá al equipo de soporte de TrabajoYa. Estamos disponibles para ayudarte con cualquier consulta.",
    url: "https://web.trabajo-ya.com/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


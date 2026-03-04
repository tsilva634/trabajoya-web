import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Soporte y Atención al Cliente",
  description:
    "Contactá al equipo de TrabajoYa. Envianos tu consulta, sugerencia o reporte de problema. Atención al cliente por email. Respondemos en 24-48 horas hábiles. atencion@trabajo-ya.com",
  alternates: {
    canonical: "https://web.trabajo-ya.com/contacto",
  },
  openGraph: {
    title: "Contacto - Soporte TrabajoYa",
    description:
      "Contactá al equipo de soporte de TrabajoYa. Estamos disponibles para ayudarte con cualquier consulta sobre empleo y uso de la plataforma.",
    url: "https://web.trabajo-ya.com/contacto",
    type: "website",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

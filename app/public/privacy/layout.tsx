import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - TrabajoYa",
  description:
    "Política de privacidad de TrabajoYa. Conocé cómo protegemos tus datos personales, qué información recopilamos y cómo podés solicitar la eliminación de tu cuenta.",
  alternates: {
    canonical: "https://web.trabajo-ya.com/public/privacy",
  },
  openGraph: {
    title: "Política de Privacidad - TrabajoYa",
    description:
      "Conocé cómo TrabajoYa protege tus datos personales y tu privacidad.",
    url: "https://web.trabajo-ya.com/public/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


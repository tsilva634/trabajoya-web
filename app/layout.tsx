import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://web.trabajo-ya.com";
const SITE_NAME = "TrabajoYa";
const SITE_DESCRIPTION =
  "Plataforma de empleo que conecta postulantes con empresas en Argentina. Buscá trabajo, creá tu perfil, subí tu CV y postulate a ofertas laborales. Descargá la app para Android e iOS.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TrabajoYa - Conecta con tu próximo empleo en Argentina",
    template: "%s | TrabajoYa",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "trabajo",
    "empleo",
    "buscar trabajo",
    "ofertas laborales",
    "postularse",
    "CV",
    "curriculum vitae",
    "Argentina",
    "empleo remoto",
    "empleo presencial",
    "búsqueda de empleo",
    "portal de empleo",
    "TrabajoYa",
    "bolsa de trabajo",
    "trabajo en Argentina",
    "primer empleo",
    "empleo part time",
    "trabajo freelance",
  ],
  authors: [{ name: "TrabajoYa" }],
  creator: "TrabajoYa",
  publisher: "TrabajoYa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon-blanco.png",
    shortcut: "/icon-blanco.png",
    apple: "/icon-blanco.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "TrabajoYa - Conecta con tu próximo empleo en Argentina",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "TrabajoYa - Plataforma de empleo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrabajoYa - Conecta con tu próximo empleo en Argentina",
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
    creator: "@trabajoya",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "employment",
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
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ConditionalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

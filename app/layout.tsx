import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://web.trabajo-ya.com";
const SITE_NAME = "TrabajoYa";
const SITE_DESCRIPTION =
  "Conectamos postulantes con empresas. Buscá trabajo, creá tu perfil profesional, subí tu CV y postulate a cientos de ofertas laborales en todo el país. Descargá la app gratis.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "TrabajoYa - Buscar Trabajo en Argentina | Ofertas de Empleo 2026",
    template: "%s | TrabajoYa - Portal de Empleo Argentina",
  },
  description: SITE_DESCRIPTION,
  applicationName: "TrabajoYa",
  keywords: [
    "trabajo",
    "empleo",
    "trabajo ya",
    "trabajo ya empresas",
    "trabajo ya app",
    "buscar trabajo",
    "buscar empleo",
    "ofertas laborales",
    "ofertas de trabajo",
    "ofertas de empleo",
    "postularse a empleo",
    "CV",
    "curriculum vitae",
    "Argentina",
    "empleo Argentina",
    "trabajo Argentina",
    "empleo remoto",
    "empleo presencial",
    "trabajo remoto",
    "trabajo híbrido",
    "búsqueda de empleo",
    "portal de empleo",
    "bolsa de trabajo",
    "bolsa de empleo Argentina",
    "TrabajoYa",
    "trabajo en Argentina",
    "primer empleo",
    "empleo part time",
    "trabajo freelance",
    "empleo joven",
    "trabajo medio tiempo",
    "trabajo full time",
    "buscar trabajo cerca de mi",
    "empleo sin experiencia",
    "ofertas laborales hoy",
    "conseguir trabajo rápido",
    "plataforma de empleo",
    "app para buscar trabajo",
    "publicar oferta de empleo",
    "contratar personal",
    "reclutar empleados",
    "recursos humanos",
    "Buenos Aires trabajo",
    "Córdoba trabajo",
    "Rosario trabajo",
    "Mendoza trabajo",
  ],
  authors: [{ name: "TrabajoYa", url: SITE_URL }],
  creator: "TrabajoYa",
  publisher: "TrabajoYa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-blanco.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/icon-blanco.png",
    apple: [
      { url: "/icon-blanco.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "TrabajoYa - Buscar Trabajo en Argentina | Ofertas de Empleo",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "TrabajoYa - Portal de empleo Argentina",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrabajoYa - Buscar Trabajo en Argentina | Ofertas de Empleo",
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
    creator: "@trabajoya",
    site: "@trabajoya",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-AR": SITE_URL,
    },
  },
  category: "employment",
  verification: {
    google: "4jG9cxR077qkHSsn0QWKy-eIG_R7yyJk7mE2kjEekjE",
  },
  other: {
    "geo.region": "AR",
    "geo.placename": "Argentina",
    "content-language": "es-AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="https://play.google.com" />
        <link rel="dns-prefetch" href="https://apps.apple.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Argentina" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
      </head>
      <body className={inter.className}>
        <ConditionalNavbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

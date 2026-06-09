import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Steps } from "@/components/steps"
import { JobTypes } from "@/components/job-types"
import { CompanyCta } from "@/components/company-cta"
import { SiteFooter } from "@/components/site-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "TrabajoYa - Buscar Trabajo en Argentina | Ofertas de Empleo 2026",
  description:
    "Buscá trabajo, creá tu perfil profesional, subí tu CV y postulate a cientos de ofertas laborales. Encontrá empleo remoto, presencial o híbrido. Descargá la app gratis para Android e iOS.",
  alternates: {
    canonical: "https://web.trabajo-ya.com",
  },
  openGraph: {
    title:
      "TrabajoYa - Buscar Trabajo en Argentina | Ofertas de Empleo",
    description:
      "Buscá trabajo, creá tu perfil profesional y postulate a ofertas laborales. Empleo remoto, presencial e híbrido.",
    url: "https://web.trabajo-ya.com",
    type: "website",
  },
};

// JSON-LD Structured Data
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "TrabajoYa",
    url: "https://web.trabajo-ya.com",
    logo: {
      "@type": "ImageObject",
      url: "https://web.trabajo-ya.com/logo.png",
      width: 512,
      height: 512,
    },
    description:
      "Plataforma de empleo que conecta postulantes con empresas en Argentina. Buscá trabajo, publicá ofertas laborales y gestioná contrataciones de manera digital.",
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    serviceType: [
      "Búsqueda de empleo",
      "Publicación de ofertas laborales",
      "Gestión de postulaciones",
      "Videollamadas laborales",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "soporte@trabajo-ya.com",
        contactType: "customer service",
        availableLanguage: ["Spanish", "English", "Portuguese"],
        areaServed: "AR",
      },
    ],
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.trabajoya.app",
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "TrabajoYa",
    operatingSystem: "Android, iOS",
    applicationCategory: "BusinessApplication",
    description:
      "Aplicación de empleo para buscar trabajo, crear tu perfil profesional y postularte a ofertas laborales en Argentina. Conectá con empresas, chateá y coordiná entrevistas.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.trabajoya.app",
    screenshot: "https://web.trabajo-ya.com/tel1.png",
    softwareVersion: "1.0",
    author: {
      "@type": "Organization",
      name: "TrabajoYa",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TrabajoYa",
    alternateName: "Trabajo Ya",
    url: "https://web.trabajo-ya.com",
    description:
      "Plataforma de empleo que conecta postulantes con empresas en Argentina. Buscar trabajo, publicar ofertas laborales.",
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: "TrabajoYa",
      logo: {
        "@type": "ImageObject",
        url: "https://web.trabajo-ya.com/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://web.trabajo-ya.com/buscar?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://web.trabajo-ya.com",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TrabajoYa - Buscar Trabajo en Argentina",
    description:
      "Conectamos postulantes con empresas.",
    url: "https://web.trabajo-ya.com",
    isPartOf: {
      "@type": "WebSite",
      name: "TrabajoYa",
      url: "https://web.trabajo-ya.com",
    },
    about: {
      "@type": "Thing",
      name: "Búsqueda de empleo en Argentina",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Buscadores de empleo y empresas en Argentina",
    },
    inLanguage: "es-AR",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Steps />
        <JobTypes />
        <CompanyCta />
      </main>
      <SiteFooter />
    </div>
  )
}

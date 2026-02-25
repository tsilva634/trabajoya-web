import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "TrabajoYa - Buscar Trabajo en Argentina | Ofertas de Empleo 2026",
  description:
    "Plataforma de empleo #1 en Argentina. Buscá trabajo, creá tu perfil profesional, subí tu CV y postulate a cientos de ofertas laborales. Encontrá empleo remoto, presencial o híbrido. Descargá la app gratis para Android e iOS.",
  alternates: {
    canonical: "https://web.trabajo-ya.com",
  },
  openGraph: {
    title:
      "TrabajoYa - Buscar Trabajo en Argentina | Ofertas de Empleo",
    description:
      "Plataforma de empleo #1 en Argentina. Buscá trabajo, creá tu perfil profesional y postulate a ofertas laborales. Empleo remoto, presencial e híbrido.",
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
      "Plataforma de empleo #1 en Argentina. Conectamos postulantes con empresas.",
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

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Animated Circular Backgrounds - Full Screen */}
        <div
          className="fixed inset-0 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full opacity-30 top-[20%] left-[10%] -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full opacity-50 top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2 animate-[float_10s_ease-in-out_infinite]"></div>
          <div className="absolute w-[250px] h-[250px] bg-blue-300 rounded-full opacity-25 top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 animate-[float_12s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute w-[350px] h-[350px] bg-blue-100 rounded-full opacity-35 top-[70%] left-[20%] -translate-x-1/2 -translate-y-1/2 animate-[float_9s_ease-in-out_infinite]"></div>
          <div className="absolute w-[450px] h-[450px] bg-blue-200 rounded-full opacity-30 top-[30%] right-[5%] -translate-x-1/2 -translate-y-1/2 animate-[float_11s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute w-[280px] h-[280px] bg-blue-50 rounded-full opacity-40 top-[90%] right-[30%] -translate-x-1/2 -translate-y-1/2 animate-[float_7s_ease-in-out_infinite]"></div>
          <div className="absolute w-[320px] h-[320px] bg-blue-300 rounded-full opacity-30 bottom-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-[float_13s_ease-in-out_infinite_reverse]"></div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
            {/* Left Section - Text and CTA */}
            <div className="flex-1 lg:max-w-[500px] space-y-6">
              {/* Headline */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Buscar trabajo en Argentina empieza{" "}
                <span className="text-blue-600">acá</span>
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-600">
                TrabajoYa es la plataforma de empleo que conecta personas y
                empresas de forma simple, rápida y 100% digital. Encontrá
                ofertas laborales, postulate con un click y conseguí tu
                próximo empleo en Argentina.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Descargar app gratis
                </a>
                <Link
                  href="/como-funciona"
                  className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors text-center"
                >
                  Ver cómo funciona
                </Link>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar TrabajoYa en Google Play"
                  className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Disponible en</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/us/app/trabajo-ya/id6757190754"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar TrabajoYa en App Store"
                  className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Consíguelo en</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Section - Phone Mockups */}
            <div className="flex-1 lg:flex-none relative flex items-center justify-center">
              {/* Animated Circular Backgrounds */}
              <div aria-hidden="true">
                <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full opacity-40 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]"></div>
                <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full opacity-30 -z-10 top-[20%] left-[10%] -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite_reverse]"></div>
                <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full opacity-50 -z-10 top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2 animate-[float_10s_ease-in-out_infinite]"></div>
                <div className="absolute w-[250px] h-[250px] bg-blue-300 rounded-full opacity-25 -z-10 top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 animate-[float_12s_ease-in-out_infinite_reverse]"></div>
                <div className="absolute w-[350px] h-[350px] bg-blue-100 rounded-full opacity-35 -z-10 top-[70%] left-[20%] -translate-x-1/2 -translate-y-1/2 animate-[float_9s_ease-in-out_infinite]"></div>
              </div>

              <div className="flex gap-4 relative z-10">
                {/* Left Phone Mockup */}
                <div className="relative">
                  <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                      <Image
                        src="/tel1.png"
                        alt="TrabajoYa app - Pantalla de búsqueda de empleos mostrando ofertas laborales disponibles en Argentina"
                        className="rounded-[1.8rem] object-cover"
                        width={180}
                        height={380}
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Right Phone Mockup */}
                <div className="relative mt-8">
                  <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                      <Image
                        src="/tel2.png"
                        alt="TrabajoYa app - Pantalla de perfil profesional para postularse a ofertas de empleo"
                        className="rounded-[1.8rem] object-cover"
                        width={180}
                        height={380}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Section */}
          <section
            className="mt-20 lg:mt-32 relative z-10"
            aria-label="Características principales"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4">
              ¿Por qué elegir TrabajoYa?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              La plataforma de empleo más completa de Argentina para buscar
              trabajo y contratar talento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 - Create Profile */}
              <article className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="w-16 h-16 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Creá tu perfil profesional
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Creá tu perfil, subí tu CV y curriculum vitae, y encontrá
                  empleos que se ajusten a tu experiencia y habilidades
                  profesionales.
                </p>
              </article>

              {/* Card 2 - Post Jobs */}
              <article className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="w-16 h-16 bg-white rounded-full border-4 border-green-600 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Publicá ofertas de empleo
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Publicá ofertas laborales, encontrá el talento que
                  necesitás y gestioná tus procesos de selección y
                  contratación desde una sola plataforma.
                </p>
              </article>

              {/* Card 3 - Chat */}
              <article className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="w-16 h-16 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Conectá con empresas al instante
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  Chateá directamente con empresas, realizá videollamadas
                  para entrevistas laborales y gestioná todo el proceso de
                  contratación desde la app.
                </p>
              </article>
            </div>
          </section>
        </section>

        {/* SEO Content Section - How it works summary */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4">
            Cómo buscar trabajo en TrabajoYa
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Encontrá empleo en Argentina en 3 simples pasos. Nuestra
            plataforma te conecta con las mejores ofertas laborales del
            país.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Descargá la app
              </h3>
              <p className="text-gray-600">
                Descargá TrabajoYa gratis desde Google Play o App Store.
                Disponible para Android e iOS. Registrate en menos de 5
                minutos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Completá tu perfil
              </h3>
              <p className="text-gray-600">
                Subí tu CV, agregá tu experiencia laboral, educación y
                habilidades. Un perfil completo aumenta tus chances de ser
                contactado.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Postulate y conseguí empleo
              </h3>
              <p className="text-gray-600">
                Explorá ofertas de trabajo, filtrá por ubicación,
                modalidad y salario. Postulate con un click y seguí el
                estado de tus aplicaciones.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/como-funciona"
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg underline underline-offset-4"
            >
              Ver guía completa de cómo funciona TrabajoYa →
            </Link>
          </div>
        </section>

        {/* SEO Content - Employment types section */}
        <section className="bg-white py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4">
              Encontrá el tipo de empleo que buscás
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              En TrabajoYa tenés acceso a todo tipo de ofertas laborales en
              Argentina, adaptadas a tus necesidades.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3" aria-hidden="true">
                  🏠
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Trabajo remoto
                </h3>
                <p className="text-gray-600 text-sm">
                  Trabajá desde casa con ofertas de empleo 100% remotas en
                  todo el país.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3" aria-hidden="true">
                  🏢
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Trabajo presencial
                </h3>
                <p className="text-gray-600 text-sm">
                  Encontrá empleo presencial cerca tuyo en Buenos Aires,
                  Córdoba, Rosario y más.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3" aria-hidden="true">
                  ⏰
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Part time y medio tiempo
                </h3>
                <p className="text-gray-600 text-sm">
                  Ofertas de trabajo part time ideales para estudiantes o
                  quienes buscan flexibilidad.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3" aria-hidden="true">
                  🚀
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Primer empleo
                </h3>
                <p className="text-gray-600 text-sm">
                  Ofertas sin experiencia previa para quienes buscan su
                  primer trabajo en Argentina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content - For companies */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                ¿Sos empresa? Publicá ofertas de empleo gratis
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TrabajoYa te permite publicar ofertas laborales, gestionar
                postulaciones, revisar CVs y contactar candidatos
                directamente. Todo desde una sola plataforma diseñada para
                recursos humanos y reclutamiento.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Publicá ofertas de trabajo ilimitadas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Gestioná postulaciones y revisá CVs desde el dashboard
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Chat, llamadas y videollamadas con candidatos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Planes accesibles para PyMEs y grandes empresas
                  </span>
                </li>
              </ul>
              <a
                href="https://empresas.trabajo-ya.com"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                Ir al portal de empresas
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

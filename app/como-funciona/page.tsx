import Link from "next/link";
import {
  UserPlus,
  Search,
  MessageSquare,
  Briefcase,
  ClipboardList,
  Headphones,
} from "lucide-react";

// JSON-LD Structured Data for HowTo + BreadcrumbList
function JsonLd() {
  const howToPostulantes = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo buscar trabajo en TrabajoYa",
    description:
      "Guía paso a paso para buscar empleo y postularte a ofertas laborales en Argentina usando la app TrabajoYa.",
    totalTime: "PT5M",
    tool: [
      {
        "@type": "HowToTool",
        name: "App TrabajoYa para Android o iOS",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Creá tu perfil profesional",
        text: "Descargá la app, registrate gratis y completá tu perfil con tu CV, habilidades y experiencia laboral para destacar ante las empresas.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Buscá y postulá a ofertas de empleo",
        text: "Explorá ofertas laborales que se ajusten a tu perfil, filtrá por ubicación, modalidad y salario, y aplicá con un click.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Conectá con empresas",
        text: "Conversá por chat con las empresas, coordiná entrevistas de trabajo por videollamada y seguí el estado de tus postulaciones en tiempo real.",
        position: 3,
      },
    ],
  };

  const howToEmpresas = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo publicar ofertas de empleo en TrabajoYa",
    description:
      "Guía para empresas sobre cómo publicar ofertas laborales, gestionar postulaciones y contratar talento en Argentina con TrabajoYa.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        name: "Publicá tus empleos",
        text: "Creá ofertas laborales detalladas con requisitos, salario, modalidad de trabajo y beneficios para atraer a los mejores candidatos.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Gestioná postulaciones",
        text: "Revisá perfiles profesionales, CVs y videos de presentación de los candidatos desde tu dashboard de empresa.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Contactá candidatos",
        text: "Conversá por chat, realizá llamadas de voz y videollamadas, y coordiná entrevistas directamente desde la plataforma.",
        position: 3,
      },
    ],
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Cómo funciona",
        item: "https://web.trabajo-ya.com/como-funciona",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToPostulantes) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToEmpresas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

const postulantesSteps = [
  {
    icon: UserPlus,
    title: "Creá tu perfil profesional",
    description:
      "Cargá tu CV y curriculum vitae, completá tus habilidades, experiencia laboral y educación para destacar ante las empresas que buscan talento.",
  },
  {
    icon: Search,
    title: "Buscá empleo y postulate",
    description:
      "Explorá cientos de ofertas laborales que se ajusten a tu perfil. Filtrá por ubicación, modalidad (remoto, presencial, híbrido) y salario. Aplicá con un click.",
  },
  {
    icon: MessageSquare,
    title: "Conectá con empresas",
    description:
      "Conversá por chat en tiempo real, coordiná entrevistas de trabajo por videollamada y seguí el estado de tus postulaciones desde la app.",
  },
];

const empresasSteps = [
  {
    icon: Briefcase,
    title: "Publicá tus ofertas de empleo",
    description:
      "Creá ofertas laborales detalladas con requisitos, rango salarial, modalidad de trabajo y beneficios para atraer a los mejores candidatos del mercado.",
  },
  {
    icon: ClipboardList,
    title: "Gestioná postulaciones y candidatos",
    description:
      "Revisá perfiles profesionales, CVs, videos de presentación y experiencia laboral de los candidatos desde tu dashboard de empresa.",
  },
  {
    icon: Headphones,
    title: "Contactá y entrevistá candidatos",
    description:
      "Conversá por chat, realizá llamadas de voz y videollamadas para entrevistas, y coordiná todo el proceso de contratación desde la plataforma.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Circles */}
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
          aria-hidden="true"
        >
          <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full opacity-30 -top-[200px] -right-[200px] animate-[float_12s_ease-in-out_infinite]" />
          <div className="absolute w-[400px] h-[400px] bg-green-100 rounded-full opacity-20 top-[60%] -left-[150px] animate-[float_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full opacity-40 bottom-[10%] right-[10%] animate-[float_8s_ease-in-out_infinite]" />
        </div>

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-gray-900 font-medium">
                  Cómo funciona
                </span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Cómo buscar trabajo con{" "}
              <span className="text-[#013160]">
                Trabajo<span className="text-[#18A338]">Ya</span>
              </span>
              ?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Una plataforma simple y rápida que conecta postulantes y empresas
              en pocos pasos, facilitando la búsqueda de empleo y la
              contratación de talento de manera digital, ágil y segura en toda
              Argentina.
            </p>
          </div>
        </section>

        {/* Para Postulantes Section */}
        <section
          className="py-12 px-4 sm:px-6 lg:px-8"
          aria-label="Guía para postulantes"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                Para postulantes - Cómo buscar empleo
              </h2>
              <p className="text-gray-600">
                Encontrá tu trabajo ideal en Argentina en 3 simples pasos
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 border border-gray-100">
              <div className="space-y-6">
                {postulantesSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className={`flex items-start gap-5 ${index !== postulantesSteps.length - 1
                      ? "pb-6 border-b border-gray-100"
                      : ""
                      }`}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-[#DAE6FD] rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[#2561EA]" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold text-[#284070] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Para Empresas Section */}
        <section
          className="py-12 px-4 sm:px-6 lg:px-8 relative"
          aria-label="Guía para empresas"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-right">
              <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                Para empresas - Cómo publicar empleos
              </h2>
              <p className="text-gray-600">
                Encontrá y contratá los mejores candidatos en Argentina
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-green-100/50 p-6 md:p-8 border border-gray-100 relative">
              <div className="space-y-6">
                {empresasSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className={`flex items-start gap-5 ${index !== empresasSteps.length - 1
                      ? "pb-6 border-b border-gray-100"
                      : ""
                      }`}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold text-green-600 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para buscar trabajo o publicar ofertas de empleo?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Descargá la app gratis y empezá a conectar con oportunidades
              laborales en Argentina hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Descargar app gratis
              </a>
              <Link
                href="/soporte"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                ¿Tenés dudas? Ver ayuda
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

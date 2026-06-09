import Link from "next/link"
import {
  UserPlus,
  Search,
  MessageSquare,
  Briefcase,
  ClipboardList,
  Headphones,
  Trophy,
} from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function JsonLd() {
  const howToPostulantes = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo buscar trabajo en TrabajoYa",
    description:
      "Guía paso a paso para buscar empleo y postularte a ofertas laborales en Argentina usando la app TrabajoYa.",
    totalTime: "PT5M",
    tool: [{ "@type": "HowToTool", name: "App TrabajoYa para Android o iOS" }],
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
  }

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
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://web.trabajo-ya.com" },
      { "@type": "ListItem", position: 2, name: "Cómo funciona", item: "https://web.trabajo-ya.com/como-funciona" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToPostulantes) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToEmpresas) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

const postulantesSteps = [
  {
    icon: UserPlus,
    title: "Creá tu perfil profesional",
    description:
      "Cargá tu CV y currículum vitae, completá tus habilidades, experiencia laboral y educación para destacar ante las empresas que buscan talento.",
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
]

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
]

function StepList({ steps }: { steps: typeof postulantesSteps }) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={cn(
            "flex items-start gap-5",
            index !== steps.length - 1 && "border-b border-border pb-6"
          )}
        >
          <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
            <step.icon className="size-7" />
          </span>
          <div className="flex-1 pt-1">
            <h3 className="mb-1 text-lg font-semibold text-card-foreground">{step.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ComoFuncionaPage() {
  return (
    <>
      <JsonLd />
      <PageShell
        maxWidth="4xl"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Cómo funciona" },
        ]}
      >
        <section className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-muted px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <Trophy className="size-4" />
            Simple, rápido y 100% digital
          </span>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            ¿Cómo buscar trabajo con{" "}
            <span className="text-primary">TrabajoYa</span>?
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Una plataforma que conecta postulantes y empresas en pocos pasos,
            facilitando la búsqueda de empleo y la contratación de talento en
            toda Argentina.
          </p>
        </section>

        <section className="mb-12" aria-label="Guía para postulantes">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Para postulantes
            </h2>
            <p className="mt-1 text-muted-foreground">
              Encontrá tu trabajo ideal en Argentina en 3 simples pasos
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <StepList steps={postulantesSteps} />
          </div>
        </section>

        <section className="mb-16" aria-label="Guía para empresas">
          <div className="mb-6 text-right">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Para empresas
            </h2>
            <p className="mt-1 text-muted-foreground">
              Encontrá y contratá los mejores candidatos en Argentina
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <StepList steps={empresasSteps} />
          </div>
        </section>

        <section className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold md:text-3xl">
            ¿Listo para buscar trabajo o publicar ofertas?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Descargá la app gratis y empezá a conectar con oportunidades
            laborales en Argentina hoy mismo.
          </p>
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar TrabajoYa en Google Play"
                className="flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
              >
                <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                className="flex items-center gap-3 rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
              >
                <svg className="size-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Consíguelo en</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
            <Link
              href="/soporte"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"
              )}
            >
              ¿Tenés dudas? Ver ayuda
            </Link>
          </div>
        </section>
      </PageShell>
    </>
  )
}

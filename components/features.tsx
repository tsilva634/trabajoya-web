import { UserCircle, Briefcase, MessageSquare } from "lucide-react"

const features = [
  {
    icon: UserCircle,
    title: "Creá tu perfil profesional",
    description:
      "Subí tu CV y currículum vitae, y encontrá empleos que se ajusten a tu experiencia y habilidades profesionales.",
  },
  {
    icon: Briefcase,
    title: "Publicá ofertas de empleo",
    description:
      "Encontrá el talento que necesitás y gestioná tus procesos de selección y contratación desde una sola plataforma.",
  },
  {
    icon: MessageSquare,
    title: "Conectá con empresas al instante",
    description:
      "Chateá directamente con empresas, realizá videollamadas para entrevistas y gestioná todo el proceso desde la app.",
  },
]

export function Features() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Por qué elegir TrabajoYa?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            La plataforma de empleo más completa de Argentina para buscar
            trabajo y contratar talento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <feature.icon className="size-8" />
              </span>
              <h3 className="text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

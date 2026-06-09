import { Home, Building2, Clock, Sparkles } from "lucide-react"

const jobTypes = [
    {
        icon: Home,
        title: "Trabajo remoto",
        description: "Trabajá desde casa con ofertas 100% remotas en todo el país.",
    },
    {
        icon: Building2,
        title: "Trabajo presencial",
        description:
            "Encontrá empleo cerca tuyo en Buenos Aires, Córdoba, Rosario y más.",
    },
    {
        icon: Clock,
        title: "Part time y medio tiempo",
        description:
            "Ofertas ideales para estudiantes o quienes buscan flexibilidad.",
    },
    {
        icon: Sparkles,
        title: "Primer empleo",
        description:
            "Ofertas sin experiencia previa para quienes buscan su primer trabajo.",
    },
]

export function JobTypes() {
    return (
        <section id="empleos" className="bg-secondary/40 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Encontrá el tipo de empleo que buscás
                    </h2>
                    <p className="mt-4 text-pretty text-lg text-muted-foreground">
                        Acceso a todo tipo de ofertas laborales en Argentina, adaptadas a
                        tus necesidades.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {jobTypes.map((job) => (
                        <div
                            key={job.title}
                            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                        >
                            <span className="flex size-11 items-center justify-center rounded-xl bg-accent-muted text-accent-foreground">
                                <job.icon className="size-5" />
                            </span>
                            <h3 className="text-lg font-semibold text-card-foreground">
                                {job.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

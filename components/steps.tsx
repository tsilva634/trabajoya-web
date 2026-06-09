import { Smartphone, UserCircle, Briefcase, type LucideIcon } from "lucide-react"

const steps: {
    number: string
    title: string
    description: string
    icon: LucideIcon
}[] = [
        {
            number: "1",
            icon: Smartphone,
            title: "Descargá la app",
            description:
                "Descargá TrabajoYa gratis desde Google Play o App Store. Disponible para Android e iOS. Registrate en menos de 5 minutos.",
        },
        {
            number: "2",
            icon: UserCircle,
            title: "Completá tu perfil",
            description:
                "Subí tu CV, agregá tu experiencia laboral, educación y habilidades. Un perfil completo aumenta tus chances de ser contactado.",
        },
        {
            number: "3",
            icon: Briefcase,
            title: "Postulate y conseguí empleo",
            description:
                "Explorá ofertas, filtrá por ubicación, modalidad y salario. Postulate con un click y seguí el estado de tus aplicaciones.",
        },
    ]

export function Steps() {
    return (
        <section id="como-funciona" className="bg-background py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Cómo buscar trabajo en TrabajoYa
                    </h2>
                    <p className="mt-4 text-pretty text-lg text-muted-foreground">
                        Encontrá empleo en Argentina en 3 simples pasos. Te conectamos con
                        las mejores ofertas laborales del país.
                    </p>
                </div>

                <div className="relative mt-14 grid gap-8 md:grid-cols-3">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-[50%] right-[16.67%] left-[16.67%] hidden h-0.5 bg-border md:block"
                    />

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-7 text-center transition-shadow hover:shadow-lg"
                        >
                            <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-sm ring-4 ring-background">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-semibold text-card-foreground">
                                {step.title}
                            </h3>
                            <p className="leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

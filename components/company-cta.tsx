import { Check } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const benefits = [
    "Publicá ofertas de trabajo ilimitadas",
    "Gestioná postulaciones y revisá CVs desde el dashboard",
    "Chat, llamadas y videollamadas con candidatos",
    "Planes accesibles para PyMEs y grandes empresas",
]

export function CompanyCta() {
    return (
        <section id="empresas" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-3xl bg-primary">
                    <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                                ¿Sos empresa? Publicá ofertas de empleo gratis
                            </h2>
                            <p className="text-pretty text-lg leading-relaxed text-white">
                                Publicá ofertas laborales, gestioná postulaciones, revisá CVs y
                                contactá candidatos directamente desde una sola plataforma
                                diseñada para recursos humanos y reclutamiento.
                            </p>
                            <a
                                href="https://empresas.trabajo-ya.com"
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "w-fit bg-background text-foreground hover:bg-background/90"
                                )}
                            >
                                Ir al portal de empresas
                            </a>
                        </div>

                        <ul className="flex flex-col gap-4">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-start gap-3 rounded-xl bg-white/10 p-4"
                                >
                                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                                        <Check className="size-4" />
                                    </span>
                                    <span className="text-primary-foreground">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

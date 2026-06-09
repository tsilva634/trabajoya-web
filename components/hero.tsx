import Image from "next/image"
import Link from "next/link"
import { Trophy, ArrowRight, Play } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Top accent stripes - bandera argentina */}
            <div className="absolute inset-x-0 top-0 flex h-1.5 w-full">
                <div className="h-full flex-1 bg-primary" />
                <div className="h-full flex-1 bg-background" />
                <div className="h-full flex-1 bg-primary" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
                <div className="flex flex-col items-start gap-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-muted px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                        <Trophy className="size-4" />
                        Alentamos a la Selección y a tu carrera
                    </span>

                    <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Buscar trabajo en Argentina{" "}
                        <span className="text-primary">empieza acá</span>
                    </h1>

                    <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                        La plataforma de empleo que conecta personas y empresas de forma
                        simple, rápida y 100% digital. Encontrá ofertas laborales,
                        postulate con un click y conseguí tu próximo empleo mientras
                        alentamos a la Selección.
                    </p>
                    <div className="flex sm:flex-row gap-4 pt-4">
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

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://empresas.trabajo-ya.com"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "bg-primary text-primary-foreground hover:bg-primary/90"
                            )}
                        >
                            Ir al portal de empresas
                            <ArrowRight className="size-4" />
                        </a>
                        <Link
                            href="#como-funciona"
                            className={cn(
                                buttonVariants({ size: "lg", variant: "outline" }),
                                "border-border bg-transparent text-foreground hover:bg-secondary"
                            )}
                        >
                            <Play className="size-4" />
                            Ver cómo funciona
                        </Link>
                    </div>

                    {/* <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-border/60 pt-6">
                        <div>
                            <dt className="text-2xl font-bold text-foreground">5 min</dt>
                            <dd className="text-sm text-muted-foreground">Para registrarte</dd>
                        </div>
                        <div>
                            <dt className="text-2xl font-bold text-foreground">+50k</dt>
                            <dd className="text-sm text-muted-foreground">Ofertas activas</dd>
                        </div>
                    </dl> */}
                </div>

                <div className="relative">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                        <Image
                            src="/hero-argentina-mundial.png"
                            alt="Profesionales argentinos celebrando con banderas celeste y blanca, acompañando el Mundial"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                    </div>

                    <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:flex">
                        <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent-foreground">
                            <Trophy className="size-5" />
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-card-foreground">
                                Vamos Argentina
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Tu próximo empleo, hoy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

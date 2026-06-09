import Link from "next/link"
import LogoFooter from "./Logo"

type FooterLink = {
    label: string
    href: string
    external?: boolean
}

const navigationLinks: FooterLink[] = [
    { label: "Inicio", href: "/" },
    { label: "Cómo funciona", href: "/como-funciona" },
    { label: "Centro de ayuda", href: "/soporte" },
    { label: "Contacto", href: "/contacto" },
]

const legalLinks: FooterLink[] = [
    { label: "Términos y Condiciones", href: "/public/terms" },
    { label: "Política de Privacidad", href: "/public/privacy" },
]

const contactLinks: FooterLink[] = [
    { label: "soporte@trabajo-ya.com", href: "mailto:soporte@trabajo-ya.com", external: true },
    { label: "legal@trabajo-ya.com", href: "mailto:legal@trabajo-ya.com", external: true },
]

const linkClassName =
    "text-sm text-muted-foreground transition-colors hover:text-foreground"

export function SiteFooter() {
    return (
        <footer className="border-t border-border bg-secondary/40">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="flex max-w-sm flex-col gap-3">
                        <div className="w-max">
                            <LogoFooter width={150} height={50} />
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Conectamos talento con oportunidades laborales en todo el país.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <FooterCol title="Navegación" links={navigationLinks} ariaLabel="Páginas principales" />
                        <FooterCol title="Legal" links={legalLinks} ariaLabel="Enlaces legales" />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
                            <ul className="flex flex-col gap-2">
                                {contactLinks.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className={linkClassName}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-sm font-semibold text-foreground">Descargar</h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Descargar en Google Play"
                                    className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="size-6"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M3.6 2.3c-.3.2-.6.7-.6 1.4v16.6c0 .7.3 1.2.6 1.4L13.5 12 3.6 2.3Zm10.8 8.4L6 2.3l9.3 5.3-1 3.1ZM17 9.1l-1.4-.8-1.2 3.7 1.2 3.7 1.4-.8c1.8-1 2.9-1.7 3.4-2-.5-.3-1.6-1-3.4-2Zm-1.7 6.3L6 21.7l8.4-8.4.9 2.1Z" />
                                    </svg>
                                    <span className="sr-only">Android (Google Play)</span>
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/trabajo-ya/id6757190754"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Descargar en App Store"
                                    className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="size-6"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M16.5 13.2c0-2.1 1.7-3.2 1.8-3.3-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2-1.5 2.5-.4 6.2 1.1 8.3.8 1 1.7 2.1 2.8 2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-.9 2.8-1.9.9-1.1 1.2-2.2 1.2-2.2-.1 0-3-.9-3-3.2ZM14.5 6.9c.7-.8 1.2-2 1.1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 .9.1 2.1-.5 2.8-1.4Z" />
                                    </svg>
                                    <span className="sr-only">iOS (App Store)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} TrabajoYa. Todos los derechos reservados.
                        Plataforma de empleo en Argentina.
                    </p>
                    <div className="flex h-1.5 w-24 overflow-hidden rounded-full">
                        <span className="flex-1 bg-primary" />
                        <span className="flex-1 bg-background" />
                        <span className="flex-1 bg-primary" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterCol({
    title,
    links,
    ariaLabel,
}: {
    title: string
    links: FooterLink[]
    ariaLabel?: string
}) {
    return (
        <nav className="flex flex-col gap-3" aria-label={ariaLabel}>
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <ul className="flex flex-col gap-2">
                {links.map((link) => (
                    <li key={link.href}>
                        {link.external ? (
                            <a href={link.href} className={linkClassName}>
                                {link.label}
                            </a>
                        ) : (
                            <Link href={link.href} className={linkClassName}>
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

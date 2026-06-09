"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
    { label: "Cómo funciona", href: "/como-funciona" },
    { label: "Empresas", href: "/#empresas" },
    { label: "Contacto", href: "/contacto" },
]

export function SiteHeader() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
                <a href="/" className="flex items-center gap-2" aria-label="TrabajoYa inicio">
                    <Image src="/icon-transparente.png" alt="TrabajoYa" width={40} height={40} />
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Trabajo<span className="text-primary">Ya</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href="https://empresas.trabajo-ya.com"
                        className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Portal de empresas
                    </a>
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Abrir menú"
                    aria-expanded={open}
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            {open && (
                <div className="border-t border-border/60 bg-background md:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Móvil">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2 flex flex-col gap-2">
                            <a
                                href="https://empresas.trabajo-ya.com"
                                className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Portal de empresas
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}

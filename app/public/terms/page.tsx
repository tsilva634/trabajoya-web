"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { LegalMarkdown } from "@/components/legal-markdown";
import { LoadingSpinner } from "@/components/loading-spinner";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fetchTerms } from "@/lib/api";

interface TermsData {
  id: string;
  type: string;
  version: string;
  fileUrl: string;
  markdownContent?: string | null;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

const featureCards = [
  {
    icon: CheckCircle2,
    title: "Aceptación de términos",
    description: "Debés registrarte y aceptar los términos para acceder y utilizar nuestros servicios",
  },
  {
    icon: ShieldCheck,
    title: "Uso responsable",
    description: "Usá la plataforma de manera legal y adecuada, respetando las normas vigentes",
  },
  {
    icon: Lock,
    title: "Propiedad intelectual",
    description: "Los contenidos de la web están protegidos por derechos de autor",
  },
];

export default function TermsPage() {
  const [terms, setTerms] = useState<TermsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTerms = async () => {
      try {
        setLoading(true);
        let termsData;
        try {
          termsData = await fetchTerms("POSTULANTE");
        } catch {
          try {
            termsData = await fetchTerms("EMPRESA");
          } catch {
            throw new Error("No se encontraron términos disponibles");
          }
        }
        setTerms(termsData);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Error al cargar los términos y condiciones";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadTerms();
  }, []);

  if (loading) {
    return (
      <PageShell maxWidth="4xl" breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Términos y condiciones" }]}>
        <LoadingSpinner label="Cargando términos y condiciones..." />
      </PageShell>
    );
  }

  if (error || !terms) {
    return (
      <PageShell maxWidth="4xl" breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Términos y condiciones" }]}>
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-foreground">Error</h2>
          <p className="mb-4 text-muted-foreground">
            {error || "No se pudieron cargar los términos y condiciones"}
          </p>
          <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>
            Volver al inicio
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      maxWidth="4xl"
      breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Términos y condiciones" }]}
    >
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          Términos y condiciones de uso
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Por favor, leé los términos y condiciones detenidamente antes de usar nuestros servicios.
        </p>
      </header>

      <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
        <span className="text-sm font-medium text-muted-foreground">Aviso legal</span>
        <h2 className="mb-6 mt-2 text-2xl font-bold uppercase tracking-wide text-foreground">
          Términos y condiciones de uso
        </h2>

        {terms.markdownContent ? (
          <LegalMarkdown content={terms.markdownContent} />
        ) : (
          <div className="py-12 text-center">
            <p className="mb-4 text-muted-foreground">
              El contenido no está disponible en formato texto.
            </p>
            {terms.fileUrl && (
              <a
                href={terms.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "link" }), "inline-flex items-center gap-2")}
              >
                Ver documento PDF
              </a>
            )}
          </div>
        )}
      </div>

      <section className="grid gap-6 pb-8 md:grid-cols-3">
        {featureCards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/12">
              <card.icon className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-foreground">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.description}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}

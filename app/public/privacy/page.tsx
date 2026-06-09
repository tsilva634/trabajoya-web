"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Lock, Mail, ShieldCheck } from "lucide-react";
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
    icon: ShieldCheck,
    title: "Protección de datos",
    description: "Respetamos tu privacidad y protegemos tus datos personales con los más altos estándares de seguridad",
  },
  {
    icon: Lock,
    title: "Control de información",
    description: "Tenés derecho a acceder, modificar o eliminar tu información personal en cualquier momento",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Te informamos claramente sobre cómo recopilamos, usamos y protegemos tus datos personales",
  },
];

export default function PrivacyPolicyPage() {
  const [terms, setTerms] = useState<TermsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPrivacy = async () => {
      try {
        setLoading(true);
        const privacyData = await fetchTerms("PRIVACY");
        setTerms(privacyData);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Error al cargar la política de privacidad";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadPrivacy();
  }, []);

  if (loading) {
    return (
      <PageShell maxWidth="4xl" breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Política de privacidad" }]}>
        <LoadingSpinner label="Cargando política de privacidad..." />
      </PageShell>
    );
  }

  if (error || !terms) {
    return (
      <PageShell maxWidth="4xl" breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Política de privacidad" }]}>
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-foreground">Error</h2>
          <p className="mb-4 text-muted-foreground">
            {error || "No se pudo cargar la política de privacidad"}
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
      breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Política de privacidad" }]}
    >
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          Política de privacidad
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Leé la política de privacidad detenidamente para entender cómo protegemos tus datos personales.
        </p>
      </header>

      <div className="mb-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
        <span className="text-sm font-medium text-muted-foreground">Aviso legal</span>
        <h2 className="mb-6 mt-2 text-2xl font-bold uppercase tracking-wide text-foreground">
          Política de privacidad
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

      <div className="mb-12 rounded-2xl border border-l-4 border-l-primary border-border bg-card p-8 shadow-sm md:p-12">
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 size-6 shrink-0 text-primary" />
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Solicitar eliminación de cuenta y datos
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Si querés eliminar tu cuenta y todos los datos asociados, podés solicitar la eliminación
              de tus datos personales en cualquier momento. Esta acción es irreversible.
            </p>
            <a
              href="mailto:legal@trabajo-ya.com?subject=Solicitud de Eliminación de Cuenta y Datos&body=Estimado equipo de TrabajoYa,%0D%0A%0D%0ADeseo solicitar la eliminación de mi cuenta y todos los datos asociados.%0D%0A%0D%0APor favor, incluyo la siguiente información:%0D%0A- Email de la cuenta:%0D%0A- Nombre completo:%0D%0A- Motivo de la solicitud (opcional):%0D%0A%0D%0AEntiendo que esta acción es irreversible.%0D%0A%0D%0AAtentamente"
              className={cn(
                buttonVariants({ size: "lg" }),
                "inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <Mail className="size-4" />
              Solicitar eliminación de datos
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              También podés contactarnos a través de{" "}
              <Link href="/contacto" className="text-primary hover:underline">
                nuestro formulario de contacto
              </Link>{" "}
              o escribiendo a{" "}
              <a href="mailto:legal@trabajo-ya.com" className="text-primary hover:underline">
                legal@trabajo-ya.com
              </a>
            </p>
          </div>
        </div>
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

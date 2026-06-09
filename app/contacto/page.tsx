'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Clock, HelpCircle, Mail, MessageSquare, Send } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function ContactJsonLd() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto TrabajoYa",
    description:
      "Página de contacto de TrabajoYa. Envíanos tu consulta sobre empleo, soporte técnico o sugerencias.",
    url: "https://web.trabajo-ya.com/contacto",
    mainEntity: {
      "@type": "Organization",
      name: "TrabajoYa",
      url: "https://web.trabajo-ya.com",
      email: "atencion@trabajo-ya.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "atencion@trabajo-ya.com",
          contactType: "customer service",
          availableLanguage: ["Spanish", "English", "Portuguese"],
          areaServed: "AR",
        },
        {
          "@type": "ContactPoint",
          email: "legal@trabajo-ya.com",
          contactType: "privacy",
          availableLanguage: ["Spanish"],
          areaServed: "AR",
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://web.trabajo-ya.com" },
      { "@type": "ListItem", position: 2, name: "Contacto", item: "https://web.trabajo-ya.com/contacto" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

const inputClassName =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    tipo: 'general',
    mensaje: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError('Por favor, completá todos los campos requeridos.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, ingresá un email válido.');
      setLoading(false);
      return;
    }

    try {
      const subject = encodeURIComponent(`${formData.asunto || 'Contacto desde web'} - ${formData.tipo}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}\n` +
        `Email: ${formData.email}\n` +
        `Tipo: ${formData.tipo}\n\n` +
        `Mensaje:\n${formData.mensaje}`
      );

      window.location.href = `mailto:atencion@trabajo-ya.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ nombre: '', email: '', asunto: '', tipo: 'general', mensaje: '' });
      }, 1000);
    } catch {
      setError('Hubo un error al enviar el formulario. Por favor, intentá nuevamente o escribinos a atencion@trabajo-ya.com');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <PageShell maxWidth="md" breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]}>
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/12">
            <Send className="size-8 text-primary" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">¡Mensaje enviado!</h2>
          <p className="mb-6 text-muted-foreground">
            Gracias por contactarnos. Nuestro equipo te responderá en un plazo máximo de 24-48 horas hábiles.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/soporte" className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90")}>
              Ver centro de ayuda
            </Link>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-border")}
            >
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <>
      <ContactJsonLd />
      <PageShell
        maxWidth="md"
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]}
      >
        <header className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <MessageSquare className="size-10 text-primary" aria-hidden="true" />
            <h1 className="text-4xl font-bold text-foreground">
              Contactá al equipo de TrabajoYa
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            ¿Tenés alguna pregunta sobre empleo, sugerencia o necesitás ayuda con la plataforma?
            Completá el formulario y nos pondremos en contacto lo antes posible.
          </p>
        </header>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/12">
              <Mail className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-foreground">Email</h3>
            <a href="mailto:atencion@trabajo-ya.com" className="text-sm text-primary hover:underline">
              atencion@trabajo-ya.com
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent-muted">
              <Clock className="size-6 text-accent-foreground" />
            </div>
            <h3 className="mb-2 font-semibold text-foreground">Tiempo de respuesta</h3>
            <p className="text-sm text-muted-foreground">24-48 horas hábiles</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/12">
              <HelpCircle className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-foreground">Centro de ayuda</h3>
            <Link href="/soporte" className="text-sm text-primary hover:underline">
              Ver FAQ
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-foreground">
                  Nombre completo <span className="text-destructive">*</span>
                </label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className={inputClassName} placeholder="Juan Pérez" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClassName} placeholder="juan@ejemplo.com" />
              </div>
            </div>

            <div>
              <label htmlFor="tipo" className="mb-2 block text-sm font-medium text-foreground">
                Tipo de consulta
              </label>
              <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} className={inputClassName}>
                <option value="general">Consulta general</option>
                <option value="tecnico">Problema técnico</option>
                <option value="cuenta">Problema con mi cuenta</option>
                <option value="empresa">Consulta empresarial</option>
                <option value="billing">Facturación/Pagos</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="reporte">Reportar un problema</option>
              </select>
            </div>

            <div>
              <label htmlFor="asunto" className="mb-2 block text-sm font-medium text-foreground">
                Asunto
              </label>
              <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} className={inputClassName} placeholder="Resumen breve de tu consulta" />
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-foreground">
                Mensaje <span className="text-destructive">*</span>
              </label>
              <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={6} className={cn(inputClassName, "resize-none")} placeholder="Describí tu consulta o problema en detalle..." />
            </div>

            <div className="flex flex-col justify-end gap-4 sm:flex-row">
              <Link href="/soporte" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-border")}>
                Ver centro de ayuda
              </Link>
              <button
                type="submit"
                disabled={loading}
                className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50")}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>
          </form>
        </div>
      </PageShell>
    </>
  );
}

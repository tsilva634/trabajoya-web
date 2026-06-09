'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronDown,
  FileText,
  HelpCircle,
  Mail,
  MessageSquare,
  Shield,
} from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const faqs = [
  {
    id: 1,
    question: '¿Cómo me registro en TrabajoYa?',
    answer: 'Para registrarte, descargá la app desde Google Play o App Store. Luego seleccioná si sos postulante o empresa, completá tus datos y verificá tu email. ¡Es gratis y toma menos de 5 minutos!'
  },
  {
    id: 2,
    question: '¿Es gratis usar TrabajoYa para buscar trabajo?',
    answer: 'Sí, crear una cuenta y buscar empleos es completamente gratis para postulantes. Las empresas tienen planes disponibles (Básico, Premium y Enterprise) según sus necesidades de contratación.'
  },
  {
    id: 3,
    question: '¿Cómo aplico a una oferta de empleo en TrabajoYa?',
    answer: 'Buscá empleos que te interesen usando los filtros disponibles (ubicación, modalidad, salario). Cuando encuentres uno, hacé clic en "Aplicar" y tu perfil completo será enviado a la empresa. Podés revisar el estado de tus aplicaciones en la sección "Mis Postulaciones".'
  },
  {
    id: 4,
    question: '¿Cómo puedo editar mi perfil profesional?',
    answer: 'Andá a tu perfil desde el menú principal. Allí podrás editar tu información personal, experiencia laboral, educación, habilidades, agregar tu CV y video de presentación. Mantené tu perfil actualizado para mejorar tus oportunidades de conseguir empleo.'
  },
  {
    id: 5,
    question: '¿Puedo buscar empleos remotos en Argentina?',
    answer: '¡Sí! Podés filtrar los empleos por modalidad: remoto, híbrido o presencial. TrabajoYa te permite encontrar oportunidades laborales que se adapten a tus preferencias de trabajo en todo el país.'
  },
  {
    id: 6,
    question: '¿Cómo publico una oferta de trabajo como empresa?',
    answer: 'Si sos empresa, andá a tu dashboard y seleccioná "Publicar Empleo". Completá todos los detalles de la vacante (título, descripción, requisitos, salario, modalidad) y publicá. Las postulaciones llegarán directamente a tu dashboard de gestión.'
  },
  {
    id: 7,
    question: '¿Cómo gestiono las postulaciones recibidas como empresa?',
    answer: 'En tu dashboard de empresa verás todas las postulaciones recibidas. Podés ver perfiles completos de los candidatos, CVs, videos de presentación y comunicarte directamente con ellos a través de mensajería integrada, llamadas y videollamadas.'
  },
  {
    id: 8,
    question: '¿Qué hago si olvidé mi contraseña?',
    answer: 'En la pantalla de inicio de sesión, hacé clic en "¿Olvidaste tu contraseña?". Ingresá tu email y recibirás un enlace para restablecer tu contraseña de forma segura. El proceso es gratuito.'
  },
  {
    id: 9,
    question: '¿Cómo me comunico con las empresas o postulantes?',
    answer: 'TrabajoYa tiene un sistema de mensajería integrado. Podés enviar mensajes directamente desde la app. También podés realizar llamadas de voz y videollamadas con los candidatos o empresas según tu plan de suscripción.'
  },
  {
    id: 10,
    question: '¿Mi información personal está segura en TrabajoYa?',
    answer: 'Sí, en TrabajoYa protegemos tu privacidad. Toda la información está encriptada y solo las empresas a las que aplicás pueden ver tu perfil profesional. Consultá nuestra Política de Privacidad para más detalles sobre cómo protegemos tus datos.'
  },
  {
    id: 11,
    question: '¿En qué idiomas está disponible TrabajoYa?',
    answer: 'TrabajoYa está disponible en Español, Inglés y Portugués. Podés cambiar el idioma en la configuración de la app según tu preferencia.'
  },
  {
    id: 12,
    question: '¿Qué planes de suscripción tienen para empresas?',
    answer: 'Ofrecemos tres planes: Básico (ideal para pequeñas empresas y PyMEs), Premium (para empresas medianas) y Enterprise (para grandes corporaciones). Cada plan incluye diferentes límites de publicaciones, funcionalidades avanzadas de gestión y herramientas de reclutamiento.'
  }
];

function FaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://web.trabajo-ya.com" },
      { "@type": "ListItem", position: 2, name: "Centro de Ayuda", item: "https://web.trabajo-ya.com/soporte" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

const quickLinks = [
  {
    href: '/como-funciona',
    icon: HelpCircle,
    title: 'Cómo funciona TrabajoYa',
    description: 'Guía paso a paso para usar la plataforma',
  },
  {
    href: '/contacto',
    icon: MessageSquare,
    title: 'Contacto',
    description: 'Envianos tu consulta directamente',
  },
  {
    href: '/public/terms',
    icon: FileText,
    title: 'Términos y Condiciones',
    description: 'Consultá nuestros términos de uso',
  },
  {
    href: '/public/privacy',
    icon: Shield,
    title: 'Política de Privacidad',
    description: 'Cómo protegemos tus datos personales',
  },
];

export default function SoportePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <FaqJsonLd />
      <PageShell
        maxWidth="4xl"
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Centro de ayuda' }]}
      >
        <header className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="size-10 text-primary" aria-hidden="true" />
            <h1 className="text-4xl font-bold text-foreground">
              Centro de ayuda TrabajoYa
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Encontrá respuestas a las preguntas más frecuentes sobre cómo buscar trabajo,
            publicar ofertas de empleo y usar TrabajoYa.
          </p>
        </header>

        <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/12">
              <Mail className="size-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-semibold text-foreground">¿Necesitás más ayuda?</h2>
              <p className="mb-4 text-muted-foreground">
                Si no encontrás la respuesta que buscás, nuestro equipo de soporte está disponible para ayudarte.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:soporte@trabajo-ya.com"
                  className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90")}
                >
                  Enviar email
                </a>
                <Link
                  href="/contacto"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-border")}
                >
                  Formulario de contacto
                </Link>
              </div>
              <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Email de soporte:</strong>{' '}
                <a href="mailto:soporte@trabajo-ya.com" className="text-primary hover:underline">
                  soporte@trabajo-ya.com
                </a>
                <span className="mt-1 block">Respondemos en un plazo máximo de 24-48 horas hábiles.</span>
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8" aria-label="Preguntas frecuentes">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="overflow-hidden rounded-xl border border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-secondary/60"
                      aria-expanded={openFaq === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="pr-4 font-semibold text-foreground">{faq.question}</span>
                      <ChevronDown
                        className={cn(
                          "size-5 shrink-0 text-muted-foreground transition-transform",
                          openFaq === faq.id && "rotate-180"
                        )}
                      />
                    </button>
                  </h3>
                  {openFaq === faq.id && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="border-t border-border bg-secondary/40 px-6 py-4"
                    >
                      <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Enlaces útiles">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-foreground">Enlaces útiles</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-secondary/60"
                >
                  <link.icon className="size-6 shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{link.title}</div>
                    <div className="text-sm text-muted-foreground">{link.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

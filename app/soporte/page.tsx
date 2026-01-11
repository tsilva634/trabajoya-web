'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SoportePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: '¿Cómo me registro en TrabajoYa?',
      answer: 'Para registrarte, descarga la app desde Google Play o App Store. Luego selecciona si eres postulante o empresa, completa tus datos y verifica tu email. ¡Es gratis y toma menos de 5 minutos!'
    },
    {
      id: 2,
      question: '¿Es gratis usar TrabajoYa?',
      answer: 'Sí, crear una cuenta y buscar empleos es completamente gratis para postulantes. Las empresas tienen planes disponibles (Básico, Premium y Enterprise) según sus necesidades de contratación.'
    },
    {
      id: 3,
      question: '¿Cómo aplico a un empleo?',
      answer: 'Busca empleos que te interesen usando los filtros disponibles. Cuando encuentres uno, haz clic en "Aplicar" y tu perfil completo será enviado a la empresa. Puedes revisar el estado de tus aplicaciones en la sección "Mis Postulaciones".'
    },
    {
      id: 4,
      question: '¿Cómo puedo editar mi perfil?',
      answer: 'Ve a tu perfil desde el menú principal. Allí podrás editar tu información personal, experiencia laboral, educación, habilidades, agregar tu CV y video de presentación. Mantén tu perfil actualizado para mejorar tus oportunidades.'
    },
    {
      id: 5,
      question: '¿Puedo buscar empleos remotos?',
      answer: '¡Sí! Puedes filtrar los empleos por modalidad: remoto, híbrido o presencial. TrabajoYa te permite encontrar oportunidades laborales que se adapten a tus preferencias de trabajo.'
    },
    {
      id: 6,
      question: '¿Cómo publico una oferta de trabajo como empresa?',
      answer: 'Si eres empresa, ve a tu dashboard y selecciona "Publicar Empleo". Completa todos los detalles de la vacante (título, descripción, requisitos, salario, modalidad) y publica. Las postulaciones llegarán directamente a tu dashboard.'
    },
    {
      id: 7,
      question: '¿Cómo gestiono las postulaciones recibidas?',
      answer: 'En tu dashboard de empresa verás todas las postulaciones recibidas. Puedes ver perfiles completos de los candidatos, CVs, videos de presentación y comunicarte directamente con ellos a través de mensajería integrada.'
    },
    {
      id: 8,
      question: '¿Qué pasa si olvidé mi contraseña?',
      answer: 'En la pantalla de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?". Ingresa tu email y recibirás un enlace para restablecer tu contraseña de forma segura.'
    },
    {
      id: 9,
      question: '¿Cómo me comunico con las empresas o postulantes?',
      answer: 'TrabajoYa tiene un sistema de mensajería integrado. Puedes enviar mensajes directamente desde la app. También puedes realizar llamadas de voz y videollamadas con los candidatos o empresas según tu plan.'
    },
    {
      id: 10,
      question: '¿Mi información personal está segura?',
      answer: 'Sí, en TrabajoYa protegemos tu privacidad. Toda la información está encriptada y solo las empresas a las que aplicas pueden ver tu perfil profesional. Consulta nuestra Política de Privacidad para más detalles.'
    },
    {
      id: 11,
      question: '¿Puedo usar la app en otros idiomas?',
      answer: 'Sí, TrabajoYa está disponible en Español, Inglés y Portugués. Puedes cambiar el idioma en la configuración de la app.'
    },
    {
      id: 12,
      question: '¿Qué planes de suscripción tienen para empresas?',
      answer: 'Ofrecemos tres planes: Básico (ideal para pequeñas empresas), Premium (para empresas medianas) y Enterprise (para grandes corporaciones). Cada plan incluye diferentes límites de publicaciones y funcionalidades avanzadas.'
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-12 w-12 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl font-bold text-gray-900">
              Centro de Ayuda
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más frecuentes sobre TrabajoYa. Si no encuentras lo que buscas, contáctanos directamente.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">¿Necesitas más ayuda?</h2>
              <p className="text-gray-600 mb-4">
                Si no encuentras la respuesta que buscas, nuestro equipo de soporte está disponible para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:soporte@trabajoya.com"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar Email
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Formulario de Contacto
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Email de soporte:</strong>{' '}
                  <a href="mailto:soporte@trabajoya.com" className="text-blue-600 hover:underline">
                    soporte@trabajoya.com
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Nuestro equipo responderá en un plazo máximo de 24-48 horas hábiles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === faq.id ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Enlaces Útiles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/public/terms"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <div className="font-semibold text-gray-900">Términos y Condiciones</div>
                <div className="text-sm text-gray-600">Consulta nuestros términos de uso</div>
              </div>
            </Link>
            <Link
              href="/public/privacy"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <div className="font-semibold text-gray-900">Política de Privacidad</div>
                <div className="text-sm text-gray-600">Cómo protegemos tus datos</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 border-t pt-8 mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}


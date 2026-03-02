"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
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

export default function PrivacyPolicyPage() {
  const [terms, setTerms] = useState<TermsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadPrivacy = async () => {
      try {
        setLoading(true);
        const privacyData = await fetchTerms("PRIVACY");
        setTerms(privacyData);
        setShowContent(true);
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">
              Cargando política de privacidad...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !terms) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-red-600 mb-4">
              <svg
                className="h-12 w-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600 mb-4">
              {error || "No se pudo cargar la política de privacidad"}
            </p>
            <Link
              href="/"
              className="inline-block text-blue-600 hover:text-blue-700 font-medium"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute w-[400px] h-[400px] bg-blue-100 rounded-full opacity-40 -z-10 top-[10%] right-[-10%] animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-200 rounded-full opacity-30 -z-10 bottom-[20%] left-[-5%] animate-[float_6s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute w-[200px] h-[200px] bg-blue-50 rounded-full opacity-50 -z-10 top-[50%] right-[10%] animate-[float_10s_ease-in-out_infinite]"></div>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Por favor, leer la política de privacidad detenidamente para entender cómo protegemos tus datos personales.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {showContent && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-6">
              <span className="text-sm text-gray-500 font-medium">Aviso legal</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              POLÍTICA DE PRIVACIDAD
            </h2>

            {terms.markdownContent ? (
              <div className="prose prose-lg max-w-none 
                prose-headings:text-gray-900 prose-headings:font-bold 
                prose-h1:text-2xl prose-h1:uppercase prose-h1:border-b prose-h1:pb-3 prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed prose-p:text-sm
                prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-700
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:text-gray-700 prose-ul:my-4 prose-ul:pl-6
                prose-ol:text-gray-700 prose-ol:my-4 prose-ol:pl-6
                prose-li:mb-2 prose-li:leading-relaxed prose-li:text-sm
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-hr:my-8 prose-hr:border-gray-300">
                <ReactMarkdown
                  components={{
                    p: ({ ...props }) => (
                      <p className="mb-4 leading-relaxed text-gray-700 text-sm" {...props} />
                    ),
                    h1: ({ ...props }) => (
                      <h1 className="text-xl font-bold text-gray-900 mb-4 mt-8 first:mt-0" {...props} />
                    ),
                    h2: ({ ...props }) => (
                      <h2 className="text-lg font-bold text-gray-900 mb-3 mt-6 first:mt-0" {...props} />
                    ),
                    h3: ({ ...props }) => (
                      <h3 className="text-base font-semibold text-gray-900 mb-2 mt-4 first:mt-0" {...props} />
                    ),
                    ul: ({ ...props }) => (
                      <ul className="list-disc list-outside my-4 pl-6 space-y-2" {...props} />
                    ),
                    ol: ({ ...props }) => (
                      <ol className="list-decimal list-outside my-4 pl-6 space-y-2" {...props} />
                    ),
                    li: ({ ...props }) => (
                      <li className="mb-2 leading-relaxed text-gray-700 text-sm" {...props} />
                    ),
                    strong: ({ ...props }) => (
                      <strong className="font-semibold text-gray-900" {...props} />
                    ),
                    a: ({ ...props }) => (
                      <a className="text-blue-600 underline hover:text-blue-700" {...props} />
                    ),
                  }}
                >
                  {terms.markdownContent}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  El contenido no está disponible en formato texto.
                </p>
                {terms.fileUrl && (
                  <a
                    href={terms.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Ver documento PDF
                  </a>
                )}
              </div>
            )}
          </div>
        )}

        {/* Account Deletion Request Section */}
        {showContent && (
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-8 border-l-4 border-blue-600">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-blue-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Solicitar Eliminación de Cuenta y Datos
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Si deseas eliminar tu cuenta y todos los datos asociados, puedes solicitar la eliminación
                  de tus datos personales en cualquier momento. Esta acción es irreversible y eliminará
                  permanentemente tu cuenta, perfil, aplicaciones y todos los datos relacionados.
                </p>
                <a
                  href="mailto:privacidad@trabajoya.com?subject=Solicitud de Eliminación de Cuenta y Datos&body=Estimado equipo de TrabajoYa,%0D%0A%0D%0ADeseo solicitar la eliminación de mi cuenta y todos los datos asociados.%0D%0A%0D%0APor favor, incluyo la siguiente información:%0D%0A- Email de la cuenta:%0D%0A- Nombre completo:%0D%0A- Motivo de la solicitud (opcional):%0D%0A%0D%0AEntiendo que esta acción es irreversible.%0D%0A%0D%0AAtentamente"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Solicitar Eliminación de Datos
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  También puedes contactarnos a través de{" "}
                  <a
                    href="/contacto"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    nuestro formulario de contacto
                  </a>
                  {" "}o enviando un email directamente a{" "}
                  <a
                    href="mailto:privacidad@trabajoya.com"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    privacidad@trabajoya.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Protección de datos */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Protección de datos</h3>
            <p className="text-sm text-gray-600">
              Respetamos tu privacidad y protegemos tus datos personales con los más altos estándares de seguridad
            </p>
          </div>

          {/* Card 2 - Control de información */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Control de información</h3>
            <p className="text-sm text-gray-600">
              Tenés derecho a acceder, modificar o eliminar tu información personal en cualquier momento
            </p>
          </div>

          {/* Card 3 - Transparencia */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Transparencia</h3>
            <p className="text-sm text-gray-600">
              Te informamos claramente sobre cómo recopilamos, usamos y protegemos tus datos personales
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

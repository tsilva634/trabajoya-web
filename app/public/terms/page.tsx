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

export default function TermsPage() {
  const [terms, setTerms] = useState<TermsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);

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
        setShowContent(true);
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">
              Cargando términos y condiciones...
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
              {error || "No se pudieron cargar los términos y condiciones"}
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
            Términos y Condiciones de Uso
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Por favor, leer los términos y condiciones detenidamente antes de usar nuestros servicios.
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
              TÉRMINOS Y CONDICIONES DE USO
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
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Aceptación de términos */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Aceptación de términos</h3>
            <p className="text-sm text-gray-600">
              Debes registrarte y aceptar los términos para acceder y utilizar nuestros servicios
            </p>
          </div>

          {/* Card 2 - Uso Responsable */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Uso Responsable</h3>
            <p className="text-sm text-gray-600">
              Usa la plataforma de manera legal y adecuada, respetando las normas vigentes
            </p>
          </div>

          {/* Card 3 - Propiedad intelectual */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Propiedad intelectual</h3>
            <p className="text-sm text-gray-600">
              Los contenidos de la web están protegidos por derechos de autor
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TrabajoYa</h3>
              <p className="text-gray-300">
                Conectando talento con oportunidades.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/public/terms"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/public/privacy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:soporte@trabajo-ya.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    soporte@trabajo-ya.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:privacidad@trabajoya.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    privacidad@trabajoya.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Descargar</h4>
              <div className="space-y-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white block transition-colors"
                >
                  Android
                </a>
                <a
                  href="https://apps.apple.com/app/trabajoya/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white block transition-colors"
                >
                  iOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

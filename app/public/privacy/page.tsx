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
      } catch (err: any) {
        setError(err.message || "Error al cargar la política de privacidad");
      } finally {
        setLoading(false);
      }
    };

    loadPrivacy();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
            <Link href="/" className="text-blue-600 hover:underline">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <svg
              className="h-8 w-8 text-blue-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h1 className="text-4xl font-bold text-gray-900">
              Política de Privacidad
            </h1>
          </div>
          
          {terms.description && (
            <p className="text-sm text-gray-500 mt-2">{terms.description}</p>
          )}
         
        </div>

        {/* Markdown Content */}
        {showContent && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Contenido</h2>
              {terms.fileUrl && (
                <a
                  href={terms.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
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
                  Descargar PDF
                </a>
              )}
            </div>
            {terms.markdownContent ? (
              <div className="prose prose-lg max-w-none 
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                prose-h1:text-3xl prose-h1:uppercase prose-h1:border-b prose-h1:pb-3 prose-h1:mb-6
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-relaxed prose-p:text-base
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:text-gray-700 prose-ul:my-4 prose-ul:pl-6
                prose-ol:text-gray-700 prose-ol:my-4 prose-ol:pl-6
                prose-li:mb-2 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-hr:my-8 prose-hr:border-gray-300
                [&>p]:mb-4
                [&>h1]:first:mt-0
                [&>h2]:first:mt-0
                [&>h3]:first:mt-0">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => <p className="mb-4 leading-relaxed text-gray-700 text-base" {...props} />,
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold uppercase text-gray-900 mb-6 mt-8 pb-3 border-b border-gray-300 first:mt-0" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 first:mt-0" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 first:mt-0" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-outside my-4 pl-6 space-y-2" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-outside my-4 pl-6 space-y-2" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-2 leading-relaxed text-gray-700" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                    a: ({ node, ...props }) => <a className="text-blue-600 hover:underline no-underline" {...props} />,
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
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
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
                    href="mailto:soporte@trabajoya.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    soporte@trabajoya.com
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
    </div>
  );
}

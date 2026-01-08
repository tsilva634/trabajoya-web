'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchTerms } from '@/lib/api';

interface TermsData {
  id: string;
  type: string;
  version: string;
  fileUrl: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export default function PrivacyPolicyPage() {
  const [terms, setTerms] = useState<TermsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    const loadPrivacy = async () => {
      try {
        setLoading(true);
        const privacyData = await fetchTerms('PRIVACY');
        setTerms(privacyData);
        setShowPDF(true);
      } catch (err: any) {
        setError(err.message || 'Error al cargar la política de privacidad');
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
            <p className="mt-4 text-gray-600">Cargando política de privacidad...</p>
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
              <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600 mb-4">{error || 'No se pudo cargar la política de privacidad'}</p>
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
            <svg className="h-8 w-8 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h1 className="text-4xl font-bold text-gray-900">
              Política de Privacidad
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            TrabajoYa - Versión {terms.version}
          </p>
          {terms.description && (
            <p className="text-sm text-gray-500 mt-2">{terms.description}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">
            Última actualización: {new Date(terms.updatedAt).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* PDF Viewer */}
        {showPDF && terms.fileUrl && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Documento</h2>
              <a
                href={terms.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar PDF
              </a>
            </div>
            <div className="border rounded-lg overflow-hidden" style={{ height: '800px' }}>
              <iframe
                src={terms.fileUrl}
                className="w-full h-full"
                title="Política de Privacidad"
              />
            </div>
          </div>
        )}


        {/* Footer */}
        <div className="text-center text-gray-600 border-t pt-8 mt-8">
          <p className="font-semibold text-gray-800 mb-2">
            <strong>TrabajoYa</strong> - Plataforma de empleo que conecta
            postulantes con empresas
          </p>
          <p>© 2025 TrabajoYa. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}


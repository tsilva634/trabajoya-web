'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

function JobContent() {
  const params = useParams();
  const jobId = params?.id as string;
  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);

  // Construir el deep link para la app móvil
  const deepLink = `trabajoya://job/${jobId}`;

  useEffect(() => {
    // Intentar redirigir a la app móvil
    const redirectToApp = () => {
      if (!redirected && jobId) {
        setRedirected(true);
        console.log('🔗 Redirigiendo a app con deep link:', deepLink);
        window.location.href = deepLink;
      }
    };

    // Contador regresivo antes de redirigir
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          redirectToApp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Intentar redirigir inmediatamente (para usuarios en móvil)
    if (jobId) {
      redirectToApp();
    }

    return () => clearInterval(timer);
  }, [jobId, redirected, deepLink]);

  if (!jobId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Error
          </h1>
          <p className="text-gray-600 mb-6">
            No se encontró el ID del empleo.
          </p>
          <Link
            href="/"
            className="block text-sm text-blue-600 hover:text-blue-700"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Ver Empleo
        </h1>
        <p className="text-gray-600 mb-6">
          Redirigiendo a la aplicación para ver el empleo...
        </p>
        {countdown > 0 && (
          <p className="text-sm text-gray-500 mb-4">
            Redirigiendo en {countdown} segundo{countdown !== 1 ? 's' : ''}...
          </p>
        )}
        <div className="space-y-3">
          <a
            href={deepLink}
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Abrir en la aplicación
          </a>
          <p className="text-xs text-gray-500">
            Si no se abre automáticamente, haz clic en el botón de arriba
          </p>
          <Link
            href="/"
            className="block text-sm text-blue-600 hover:text-blue-700 mt-4"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function JobPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    }>
      <JobContent />
    </Suspense>
  );
}


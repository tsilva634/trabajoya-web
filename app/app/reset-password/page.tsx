'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);

  // Obtener token de la URL
  const token = searchParams?.get('token');

  // Construir el deep link para la app móvil
  const deepLink = token 
    ? `trabajoya://reset-password?token=${encodeURIComponent(token)}`
    : 'trabajoya://reset-password';

  useEffect(() => {
    // Intentar redirigir a la app móvil
    const redirectToApp = () => {
      if (!redirected) {
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
    redirectToApp();

    return () => clearInterval(timer);
  }, [token, redirected, deepLink]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100">
            <svg
              className="h-8 w-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Restablecer Contraseña
        </h1>
        <p className="text-gray-600 mb-6">
          Redirigiendo a la aplicación para restablecer tu contraseña...
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}


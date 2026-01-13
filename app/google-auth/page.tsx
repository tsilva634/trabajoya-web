'use client';

import { useEffect, useState } from 'react';

export default function GoogleAuthPage() {
  const [deepLink, setDeepLink] = useState<string>('');
  const [hasRedirected, setHasRedirected] = useState(false);
  const [params, setParams] = useState<string>('');

  useEffect(() => {
    // Capturar todos los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const queryString = urlParams.toString();
    
    setParams(queryString);
    
    // Construir el deep link hacia la app
    // El esquema 'trabajoya://' es el que tienes definido en tu app.json
    const appDeepLink = `trabajoya://google-auth${queryString ? `?${queryString}` : ''}`;
    
    setDeepLink(appDeepLink);
    
    // Intentar redirigir automáticamente después de un pequeño delay
    // para asegurar que el DOM esté listo y que expo-auth-session pueda procesar la URL HTTPS primero
    const timer = setTimeout(() => {
      // Intentar abrir la app con el deep link
      window.location.href = appDeepLink;
      setHasRedirected(true);
    }, 500); // Aumentamos el delay para dar tiempo a que expo-auth-session procese la URL

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Redirigiendo a TrabajoYa...
          </h1>
          <p className="text-gray-600 mb-6">
            Estamos abriendo la aplicación para completar tu inicio de sesión.
          </p>
        </div>

        {deepLink && (
          <div className="space-y-4">
            <a
              href={deepLink}
              className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = deepLink;
              }}
            >
              Abrir en la App
            </a>
            <p className="text-sm text-gray-500">
              Si la aplicación no se abre automáticamente, haz clic en el botón de arriba.
            </p>
          </div>
        )}

        {hasRedirected && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">
              Si no tienes la app instalada,{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                descárgala aquí
              </a>
            </p>
            {params && (
              <p className="text-xs text-gray-600 mt-2 break-all">
                Parámetros recibidos: {params.substring(0, 50)}...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


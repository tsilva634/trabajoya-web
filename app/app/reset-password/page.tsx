'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useState } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams?.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (pwd: string): string | null => {
    if (pwd.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validar que hay token
    if (!token) {
      setError('Token de recuperación no válido. Por favor, solicita un nuevo enlace de recuperación.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Validar formato de contraseña
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al restablecer la contraseña');
      }

      setSuccess(true);
      // Redirigir al inicio después de 3 segundos
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Error al restablecer la contraseña. El token puede haber expirado.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 py-8">
        <div className="max-w-md w-full">
          {/* Logo TrabajoYa */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="TrabajoYa"
              width={120}
              height={120}
              className="h-auto w-1/3"
              priority
            />
          </div>

          <div className="text-center">
            <div className="mb-4 mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
              <svg
                className="h-8 w-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="mb-2 text-left text-2xl font-semibold text-gray-800">
              Token Inválido
            </h1>
            <p className="mb-6 text-left text-sm text-gray-600">
              El enlace de recuperación no es válido o ha expirado. Por favor, solicita un nuevo enlace de recuperación.
            </p>
            <Link
              href="/"
              className="inline-block w-full rounded-full bg-[#1e3a8a] py-6 text-center text-base font-semibold text-white shadow-lg hover:bg-[#1e40af] transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 py-8">
        <div className="max-w-md w-full">
          {/* Logo TrabajoYa */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="TrabajoYa"
              width={120}
              height={120}
              className="h-auto w-1/3"
              priority
            />
          </div>

          <div className="text-center">
            <div className="mb-4 mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-[#2eb44f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="mb-2 text-left text-2xl font-semibold text-gray-800">
              ¡Contraseña Restablecida!
            </h1>
            <p className="mb-6 text-left text-sm text-gray-600">
              Tu contraseña ha sido restablecida exitosamente. Serás redirigido al inicio en unos segundos.
            </p>
            <Link
              href="/"
              className="inline-block w-full rounded-full bg-[#1e3a8a] py-6 text-center text-base font-semibold text-white shadow-lg hover:bg-[#1e40af] transition-colors"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-8">
      <div className="max-w-md w-full">
        {/* Logo TrabajoYa */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="TrabajoYa"
            width={120}
            height={120}
            className="h-auto w-1/3"
            priority
          />
        </div>

        {/* Título */}
        <h1 className="mb-6 text-left text-2xl font-semibold text-gray-800">
          Restablecer Contraseña
        </h1>

        {/* Descripción */}
        <p className="mb-6 text-left text-sm text-gray-600">
          Ingresa tu nueva contraseña para completar el proceso
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Campo de nueva contraseña */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-lg border px-4 py-4 pr-12 text-base shadow-sm placeholder:text-gray-400 ${
                error && error.includes('contraseña') && !error.includes('coinciden')
                  ? 'border-red-500'
                  : 'border-gray-300'
              } bg-white`}
              placeholder="Nueva contraseña"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              disabled={isLoading}
            >
              {showPassword ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
            {password && (
              <p className="mt-1 text-xs text-gray-500">
                Mínimo 8 caracteres
              </p>
            )}
          </div>

          {/* Campo de confirmar contraseña */}
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full rounded-lg border px-4 py-4 pr-12 text-base shadow-sm placeholder:text-gray-400 ${
                error && error.includes('coinciden')
                  ? 'border-red-500'
                  : 'border-gray-300'
              } bg-white`}
              placeholder="Confirmar contraseña"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              disabled={isLoading}
            >
              {showConfirmPassword ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Botón principal */}
          <button
            type="submit"
            disabled={!password || !confirmPassword || isLoading}
            className="mb-8 w-full rounded-full bg-[#1e3a8a] py-6 text-base font-semibold text-white shadow-lg disabled:opacity-50 hover:bg-[#1e40af] transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Restableciendo...
              </span>
            ) : (
              'Restablecer Contraseña'
            )}
          </button>

          {/* Link de volver */}
          <div className="text-center">
            <Link
              href="/"
              className="text-base font-semibold text-[#2eb44f] hover:text-[#25a042] transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </form>
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


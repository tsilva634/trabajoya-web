'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense, useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { LoadingSpinner } from '@/components/loading-spinner';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const inputClassName =
  "w-full rounded-lg border border-input bg-background px-3 py-3 pr-10 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams?.get('token');

  useEffect(() => {
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

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

    if (!token) {
      setError('Token de recuperación no válido. Por favor, solicitá un nuevo enlace de recuperación.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al restablecer la contraseña');
      }

      setSuccess(true);
      setTimeout(() => {
        window.location.href = 'trabajoya://auth/login';
      }, 2000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al restablecer la contraseña. El token puede haber expirado.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4 py-6">
      <div className="absolute inset-x-0 top-0 flex h-1.5 w-full">
        <div className="h-full flex-1 bg-primary" />
        <div className="h-full flex-1 bg-background" />
        <div className="h-full flex-1 bg-primary" />
      </div>
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
        <div className="mb-6 flex justify-center">
          <Image src="/icon-transparente.png" alt="TrabajoYa" width={80} height={80} className="object-contain" priority />
        </div>
        {children}
      </div>
    </div>
  );

  if (!token) {
    return (
      <PageWrapper>
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="size-6 text-destructive" />
          </div>
          <h1 className="mb-2 text-xl font-semibold text-foreground">Token inválido</h1>
          <p className="text-sm text-muted-foreground">
            El enlace de recuperación no es válido o ha expirado. Solicitá un nuevo enlace desde la aplicación.
          </p>
        </div>
      </PageWrapper>
    );
  }

  if (success) {
    return (
      <PageWrapper>
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/12">
            <CheckCircle2 className="size-8 text-primary" />
          </div>
          <h1 className="mb-2 text-xl font-semibold text-foreground">¡Contraseña restablecida!</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Tu contraseña fue restablecida exitosamente. Serás redirigido al login en unos segundos.
          </p>
          <a
            href="trabajoya://auth/login"
            className={cn(buttonVariants({ size: "lg" }), "w-full bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            Ir al login
          </a>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <h1 className="mb-2 text-xl font-semibold text-foreground">Restablecer contraseña</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Ingresá tu nueva contraseña para completar el proceso
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {error && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
            {error}
          </div>
        )}

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={cn(
              inputClassName,
              error?.includes('contraseña') && !error.includes('coinciden') && "border-destructive"
            )}
            placeholder="Nueva contraseña"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            disabled={isLoading}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? 'Ocultar' : 'Ver'}
          </button>
          {password && (
            <p className="mt-1 text-xs text-muted-foreground">Mínimo 8 caracteres</p>
          )}
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={cn(
              inputClassName,
              error?.includes('coinciden') && "border-destructive"
            )}
            placeholder="Confirmar contraseña"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            disabled={isLoading}
            aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showConfirmPassword ? 'Ocultar' : 'Ver'}
          </button>
        </div>

        <button
          type="submit"
          disabled={!password || !confirmPassword || isLoading}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          )}
        >
          {isLoading ? 'Restableciendo...' : 'Restablecer contraseña'}
        </button>
      </form>
    </PageWrapper>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<LoadingSpinner className="min-h-screen" />}>
      <ResetPasswordContent />
    </Suspense>
  );
}

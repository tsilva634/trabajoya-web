'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { RedirectCard } from '@/components/redirect-card';
import { LoadingSpinner } from '@/components/loading-spinner';

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);
  const token = searchParams?.get('token');
  const deepLink = token
    ? `trabajoya://verify-email?token=${encodeURIComponent(token)}`
    : 'trabajoya://verify-email';

  useEffect(() => {
    const redirectToApp = () => {
      if (!redirected) {
        setRedirected(true);
        window.location.href = deepLink;
      }
    };

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

    redirectToApp();

    return () => clearInterval(timer);
  }, [token, redirected, deepLink]);

  return (
    <RedirectCard
      icon={Mail}
      title="Verificar email"
      description="Redirigiendo a la aplicación para verificar tu email..."
      countdown={countdown}
      deepLink={deepLink}
      deepLinkLabel="Abrir en la aplicación"
    />
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<LoadingSpinner className="min-h-screen" />}>
      <VerifyEmailContent />
    </Suspense>
  );
}

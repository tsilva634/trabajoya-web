'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { RedirectCard } from '@/components/redirect-card';
import { LoadingSpinner } from '@/components/loading-spinner';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);
  const token = searchParams?.get('token') || searchParams?.get('PayerID');
  const orderId = searchParams?.get('orderId') || token;
  const params = new URLSearchParams();
  if (orderId) params.append('orderId', orderId);
  if (token) params.append('token', token);
  const queryString = params.toString();
  const deepLink = `trabajoya://payment/success${queryString ? `?${queryString}` : ''}`;

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
  }, [orderId, token, redirected, deepLink]);

  return (
    <RedirectCard
      icon={CheckCircle2}
      iconClassName="text-primary"
      iconBgClassName="bg-primary/12"
      title="¡Pago exitoso!"
      description="Tu pago se procesó correctamente. Redirigiendo a la aplicación..."
      countdown={countdown}
      deepLink={deepLink}
      deepLinkLabel="Abrir en la aplicación"
    />
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<LoadingSpinner className="min-h-screen" />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}

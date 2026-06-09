'use client';

import { useParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';
import { RedirectCard } from '@/components/redirect-card';
import { LoadingSpinner } from '@/components/loading-spinner';

function JobContent() {
  const params = useParams();
  const jobId = params?.id as string;
  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);
  const deepLink = `trabajoya://job/${jobId}`;

  useEffect(() => {
    const redirectToApp = () => {
      if (!redirected && jobId) {
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

    if (jobId) {
      redirectToApp();
    }

    return () => clearInterval(timer);
  }, [jobId, redirected, deepLink]);

  if (!jobId) {
    return (
      <RedirectCard
        icon={Briefcase}
        iconClassName="text-destructive"
        iconBgClassName="bg-destructive/10"
        title="Error"
        description="No se encontró el ID del empleo."
        deepLink="/"
        deepLinkLabel="Volver al inicio"
      />
    );
  }

  return (
    <RedirectCard
      icon={Briefcase}
      title="Ver empleo"
      description="Redirigiendo a la aplicación para ver el empleo..."
      countdown={countdown}
      deepLink={deepLink}
      deepLinkLabel="Abrir en la aplicación"
    />
  );
}

export default function JobPage() {
  return (
    <Suspense fallback={<LoadingSpinner className="min-h-screen" />}>
      <JobContent />
    </Suspense>
  );
}

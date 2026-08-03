"use client";

import { useEffect, useState } from "react";
import { XCircle } from "lucide-react";
import { RedirectCard } from "@/components/redirect-card";

export default function PaymentCancelPage() {
  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);
  const deepLink = "trabajoya://payment/cancel";

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
  }, [redirected]);

  return (
    <RedirectCard
      icon={XCircle}
      iconClassName="text-destructive"
      iconBgClassName="bg-destructive/10"
      title="Pago cancelado"
      description="Cancelaste el proceso de pago. Redirigiendo a la aplicación..."
      countdown={countdown}
      deepLink={deepLink}
      deepLinkLabel="Volver a la aplicación"
    />
  );
}

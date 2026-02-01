'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isPaymentPage = pathname?.startsWith('/payment');
  const isResetPasswordPage = pathname?.startsWith('/app/reset-password');

  if (isPaymentPage || isResetPasswordPage) {
    return null;
  }

  return <Navbar />;
}


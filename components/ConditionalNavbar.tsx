'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isPaymentPage = pathname?.startsWith('/payment');

  if (isPaymentPage) {
    return null;
  }

  return <Navbar />;
}


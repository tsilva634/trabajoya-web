'use client';

import { usePathname } from 'next/navigation';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

const MINIMAL_LAYOUT_PREFIXES = ['/payment', '/app/'];

function usesMinimalLayout(pathname: string) {
  return MINIMAL_LAYOUT_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? '';

  if (pathname === '/' || usesMinimalLayout(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import EmpresasPortalLink from '@/components/EmpresasPortalLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="TrabajoYa - Ir al inicio">
              <Image
                src="/logo.png"
                alt="TrabajoYa - Portal de empleo Argentina"
                width={60}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-blue-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/como-funciona"
              className="text-blue-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Cómo funciona
            </Link>
            <Link
              href="/soporte"
              className="text-blue-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Ayuda
            </Link>
            <Link
              href="/contacto"
              className="text-blue-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contacto
            </Link>
            <EmpresasPortalLink className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Empresas
            </EmpresasPortalLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil siempre montado (hidden si cerrado) para no desmontar EmpresasPortalLink al abrir el modal */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-gray-100 ${!isOpen ? "hidden" : ""}`}
          role="navigation"
          aria-label="Menú móvil"
          aria-hidden={!isOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-blue-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/como-funciona"
              className="text-blue-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Cómo funciona
            </Link>
            <Link
              href="/soporte"
              className="text-blue-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ayuda
            </Link>
            <Link
              href="/contacto"
              className="text-blue-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <EmpresasPortalLink
              className="text-blue-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onMobileModalOpen={() => setIsOpen(false)}
            >
              Empresas
            </EmpresasPortalLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

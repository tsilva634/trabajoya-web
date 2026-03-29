"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const PORTAL_URL = "https://empresas.trabajo-ya.com";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.trabajoya.app";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/trabajo-ya/id6757190754";

const MOBILE_MEDIA = "(max-width: 1023px)";

type EmpresasPortalLinkProps = {
  className?: string;
  children?: React.ReactNode;
  onMobileModalOpen?: () => void;
};

export default function EmpresasPortalLink({
  className,
  children = "Ir al portal de empresas",
  onMobileModalOpen,
}: EmpresasPortalLinkProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MEDIA);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isMobile) {
      e.preventDefault();
      setModalOpen(true);
      onMobileModalOpen?.();
    }
  }

  function goToPortal() {
    window.location.href = PORTAL_URL;
  }

  const modal =
    modalOpen && typeof document !== "undefined"
      ? createPortal(
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <button
              type="button"
              className="absolute inset-0 bg-slate-900/55 backdrop-blur-[2px]"
              onClick={() => setModalOpen(false)}
              aria-label="Cerrar"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="empresas-portal-modal-title"
              className="relative z-10 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute right-3 top-3 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
              <h2
                id="empresas-portal-modal-title"
                className="pr-10 text-lg font-semibold text-gray-900"
              >
                Portal pensado para computadora
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Para gestionar tu empresa con comodidad desde el celular,
                descargá la app TrabajoYa. Podés entrar igual al portal web,
                pero la experiencia es limitada en pantallas chicas.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700 sm:min-w-[140px]"
                >
                  Google Play
                </a>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 sm:min-w-[140px]"
                >
                  App Store
                </a>
              </div>
              <button
                type="button"
                onClick={goToPortal}
                className="mt-4 w-full rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                Ir al portal de empresas
              </button>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <a href={PORTAL_URL} onClick={handleClick} className={className}>
        {children}
      </a>
      {modal}
    </>
  );
}

import Link from "next/link";
import LogoFooter from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="w-max bg-white px-4 py-2 rounded-lg mb-4">
              <LogoFooter width={150} height={50} />
            </div>
            <p className="text-gray-300">
              Conectamos talento con oportunidades laborales en todo el país.
            </p>
          </div>
          <nav aria-label="Páginas principales">
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/soporte"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Enlaces legales">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/public/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/public/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:soporte@trabajo-ya.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  soporte@trabajo-ya.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:legal@trabajo-ya.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  legal@trabajo-ya.com
                </a>
              </li>
            </ul>
            <h4 className="font-semibold mb-2 mt-4">Descargar</h4>
            <div className="space-y-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar en Google Play"
                className="text-gray-300 hover:text-white inline-flex transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.6 2.3c-.3.2-.6.7-.6 1.4v16.6c0 .7.3 1.2.6 1.4L13.5 12 3.6 2.3Zm10.8 8.4L6 2.3l9.3 5.3-1 3.1ZM17 9.1l-1.4-.8-1.2 3.7 1.2 3.7 1.4-.8c1.8-1 2.9-1.7 3.4-2-.5-.3-1.6-1-3.4-2Zm-1.7 6.3L6 21.7l8.4-8.4.9 2.1Z" />
                </svg>
                <span className="sr-only">Android (Google Play)</span>
              </a>
              <a
                href="https://apps.apple.com/us/app/trabajo-ya/id6757190754"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar en App Store"
                className="text-gray-300 hover:text-white inline-flex transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.5 13.2c0-2.1 1.7-3.2 1.8-3.3-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2-1.5 2.5-.4 6.2 1.1 8.3.8 1 1.7 2.1 2.8 2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-.9 2.8-1.9.9-1.1 1.2-2.2 1.2-2.2-.1 0-3-.9-3-3.2ZM14.5 6.9c.7-.8 1.2-2 1.1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 .9.1 2.1-.5 2.8-1.4Z" />
                </svg>
                <span className="sr-only">iOS (App Store)</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} TrabajoYa. Todos los derechos
            reservados. Plataforma de empleo en Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}

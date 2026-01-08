import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Conecta con tu próximo
            <span className="text-blue-600"> empleo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            TrabajoYa es la plataforma que conecta postulantes con empresas.
            Encuentra el trabajo de tus sueños o el talento que necesitas.
          </p>
          
          {/* Download Buttons */}
          <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://play.google.com/store/apps/details?id=com.fosorio.TrabajoYa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Disponible en</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
            <a
              href="https://apps.apple.com/app/trabajoya/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Descarga en el</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Para Postulantes</h3>
            <p className="text-gray-600">
              Crea tu perfil, sube tu CV y encuentra empleos que se ajusten a tu perfil profesional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Para Empresas</h3>
            <p className="text-gray-600">
              Publica empleos, encuentra el talento que necesitas y gestiona tus postulaciones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunicación Directa</h3>
            <p className="text-gray-600">
              Chatea con empresas, realiza llamadas y gestiona todo desde la app.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TrabajoYa</h3>
              <p className="text-gray-400">
                Conectando talento con oportunidades.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/public/terms" className="text-gray-400 hover:text-white">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/public/privacy" className="text-gray-400 hover:text-white">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>soporte@trabajoya.com</li>
                <li>privacidad@trabajoya.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Descargar</h4>
              <div className="space-y-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fosorio.TrabajoYa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white block"
                >
                  Android
                </a>
                <a
                  href="https://apps.apple.com/app/trabajoya/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white block"
                >
                  iOS
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 TrabajoYa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


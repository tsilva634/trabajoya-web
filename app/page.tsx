import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated Circular Backgrounds - Full Screen */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full opacity-30 top-[20%] left-[10%] -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full opacity-50 top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2 animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute w-[250px] h-[250px] bg-blue-300 rounded-full opacity-25 top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute w-[350px] h-[350px] bg-blue-100 rounded-full opacity-35 top-[70%] left-[20%] -translate-x-1/2 -translate-y-1/2 animate-[float_9s_ease-in-out_infinite]"></div>
        <div className="absolute w-[450px] h-[450px] bg-blue-200 rounded-full opacity-30 top-[30%] right-[5%] -translate-x-1/2 -translate-y-1/2 animate-[float_11s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute w-[280px] h-[280px] bg-blue-50 rounded-full opacity-40 top-[90%] right-[30%] -translate-x-1/2 -translate-y-1/2 animate-[float_7s_ease-in-out_infinite]"></div>
        <div className="absolute w-[320px] h-[320px] bg-blue-300 rounded-full opacity-30 bottom-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-[float_13s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
          {/* Left Section - Text and CTA */}
          <div className="flex-1 lg:max-w-[500px] space-y-6">
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              Tu próximo trabajo empieza{" "}
              <span className="text-blue-600">acá</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600">
              TrabajoYa conecta personas y empresa a través de una plataforma simple, rápida y 100% digital.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Descargar app
              </button>
              <button className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
                Ver cómo funciona
              </button>
            </div>
            
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
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
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Consíguelo en</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Section - Phone Mockups */}
          <div className="flex-1 lg:flex-none relative flex items-center justify-center">
            {/* Animated Circular Backgrounds */}
            <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full opacity-40 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full opacity-30 -z-10 top-[20%] left-[10%] -translate-x-1/2 -translate-y-1/2 animate-[float_6s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full opacity-50 -z-10 top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2 animate-[float_10s_ease-in-out_infinite]"></div>
            <div className="absolute w-[250px] h-[250px] bg-blue-300 rounded-full opacity-25 -z-10 top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 animate-[float_12s_ease-in-out_infinite_reverse]"></div>
            <div className="absolute w-[350px] h-[350px] bg-blue-100 rounded-full opacity-35 -z-10 top-[70%] left-[20%] -translate-x-1/2 -translate-y-1/2 animate-[float_9s_ease-in-out_infinite]"></div>
            
            <div className="flex gap-4 relative z-10">
              {/* Left Phone Mockup */}
              <div className="relative">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                    {/* Replace src with your image */}
                    <img 
                      src="/tel1.png" 
                      alt="App screenshot - Job Search"
                      className="w-[180px] h-[380px] object-cover rounded-[1.8rem]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Phone Mockup */}
              <div className="relative mt-8">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                    {/* Replace src with your image */}
                    <img 
                      src="/tel2.png" 
                      alt="App screenshot - Profile"
                      className="w-[180px] h-[380px] object-cover rounded-[1.8rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {/* Card 1 - Create Profile */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Crear tu perfil, sube tu CV y encuentra empleos que se ajusten a tu perfil profesional.
            </p>
          </div>

          {/* Card 2 - Post Jobs */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-green-600 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Publica empleos, encuentra el talento que necesitas y gestiona tus postulaciones.
            </p>
          </div>

          {/* Card 3 - Chat */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Chatea con empresas, realiza llamadas y gestiona toda desde la app
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TrabajoYa</h3>
              <p className="text-gray-300">
                Conectando talento con oportunidades.
              </p>
            </div>
            <div>
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
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:soporte@trabajoya.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    soporte@trabajoya.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:privacidad@trabajoya.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    privacidad@trabajoya.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Descargar</h4>
              <div className="space-y-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.trabajoya.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white block transition-colors"
                >
                  Android
                </a>
                <a
                  href="https://apps.apple.com/app/trabajoya/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white block transition-colors"
                >
                  iOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

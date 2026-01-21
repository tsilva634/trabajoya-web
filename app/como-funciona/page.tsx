'use client';

import Link from "next/link";
import {
  UserPlus,
  Search,
  MessageSquare,
  Briefcase,
  ClipboardList,
  Headphones,
} from "lucide-react";

export default function ComoFuncionaPage() {
  const postulantesSteps = [
    {
      icon: UserPlus,
      title: "Creá tu perfil",
      description:
        "Carga tu CV y completá tus habilidades y experiencias para destacar ante las empresas.",
    },
    {
      icon: Search,
      title: "Buscá y postulá",
      description:
        "Explorá ofertas que se ajusten a tu perfil, filtrá por ubicación y modalidad, y aplicá con un click.",
    },
    {
      icon: MessageSquare,
      title: "Conectá con empresas",
      description:
        "Conversá por chat, coordiná entrevistas de trabajo y seguí el estado de tus postulaciones.",
    },
  ];

  const empresasSteps = [
    {
      icon: Briefcase,
      title: "Publicá tus empleos",
      description:
        "Creá ofertas laborales detalladas con requisitos, salario y modalidad de trabajo.",
    },
    {
      icon: ClipboardList,
      title: "Gestioná postulaciones",
      description:
        "Revisá perfiles, CVs y videos de presentación de los candidatos desde tu dashboard.",
    },
    {
      icon: Headphones,
      title: "Contactá con candidatos",
      description:
        "Conversá por chat, realizá llamadas y coordiná entrevistas directamente desde la app.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full opacity-30 -top-[200px] -right-[200px] animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] bg-green-100 rounded-full opacity-20 top-[60%] -left-[150px] animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full opacity-40 bottom-[10%] right-[10%] animate-[float_8s_ease-in-out_infinite]" />
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo se usa{" "}
            <span className="text-[#013160]">Trabajo<span className="text-[#18A338]">Ya</span></span>?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una plataforma simple y rápida que conecta postulantes y empresas en
            pocos pasos, facilitando la búsqueda de empleo y la contratación de
            talento de manera digital, ágil y segura.
          </p>
        </div>
      </section>

      {/* Para Postulantes Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              Para postulantes
            </h2>
            <p className="text-gray-600">Encontrá tu trabajo ideal</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 border border-gray-100">
            <div className="space-y-6">
              {postulantesSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex items-start gap-5 ${
                    index !== postulantesSteps.length - 1
                      ? "pb-6 border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[#DAE6FD] rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-[#2561EA]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold text-[#284070] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para Empresas Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
              Para empresas
            </h2>
            <p className="text-gray-600">Encontrá candidatos</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-green-100/50 p-6 md:p-8 border border-gray-100 relative">
            <div className="space-y-6">
              {empresasSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex items-start gap-5 ${
                    index !== empresasSteps.length - 1
                      ? "pb-6 border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold text-green-600 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Descargá la app y empezá a conectar con oportunidades laborales hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Descargar app
            </Link>
            <Link
              href="/ayuda"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              ¿Tenés dudas?
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#013160]">
                Trabajo<span className="text-[#18A338]">Ya</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Conectando talento con oportunidades
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/public/terms"
                    className="hover:text-white transition-colors"
                  >
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/public/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="mailto:soporte@trabajoya.com"
                    className="hover:text-white transition-colors"
                  >
                    soporte@trabajoya.com
                  </a>
                </li>
                
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Descargar</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    iOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TrabajoYa. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Car, Heart, Github, Linkedin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path) => {
    // Navigation handler (currently closes menu, but menuOpen is removed)
    // You can add navigation logic here if needed
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden mt-12">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Main footer content */}
        <div className="relative z-10 border-t-2 border-yellow-400 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

            {/* Main content section */}
            <div className="flex flex-col items-center justify-center text-center">
              {/* Logo con animación */}
              <button
                onClick={() => handleNavClick('/')}
                className="flex items-center gap-3 group transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="relative bg-yellow-400 p-2 rounded-full">
                    <Car className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    ViaSegura
                  </span>
                  <span className="text-xs text-gray-400 -mt-1">Educación Vial</span>
                </div>
              </button>
            </div>

            {/* Main message */}
            <div className="max-w-2xl mx-auto mb-8 mt-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Conduce con{' '}
                <span className="font-semibold text-yellow-400 relative">
                  Responsabilidad
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent block"></span>
                </span>
                . Siempre te van a esperar en casa.
              </p>
            </div>

            {/* Copyright and credits section */}
            <div className="border-t border-gray-700 pt-6 space-y-4">
              {/* Copyright */}
              <p className="text-sm sm:text-base text-gray-300">
                © {new Date().getFullYear()}{' '}
                <span className="font-semibold text-yellow-400">ViaSegura</span>
                . Todos los derechos reservados.
              </p>

              {/* Developer credits */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <span>Desarrollado con</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>por</span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/yerson-rodriguez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300 group hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Yerson Rodríguez</span>
                  </a>
                  <span className="text-gray-600">·</span>
                  <a
                    href="https://github.com/YersonRodriguez2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300 group hover:scale-105"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer >

      {/* Scroll to top button */}
      {
        showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        )
      }
    </>
  );
}
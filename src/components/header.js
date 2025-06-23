import { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Teoría', path: '/teoria' },
    { name: 'Tips', path: '/tips' },
    { name: 'Evaluaciones', path: '/evaluaciones' },
    { name: 'Estadísticas', path: '/estadisticas' },
  ];

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white sticky top-0 z-50 shadow-xl border-b-2 border-yellow-400 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-3 group transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-yellow-400 p-2 rounded-full">
                <Car className="h-6 w-6 text-black" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                ViaSegura
              </span>
              <span className="text-xs text-gray-400 -mt-1">Educación Vial</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${location.pathname === path
                  ? 'text-black bg-yellow-400 shadow-lg shadow-yellow-400/25'
                  : 'text-white hover:text-yellow-400 hover:bg-gray-800/50'
                  }`}
              >
                <span className="relative z-10">{name}</span>
                {location.pathname !== path && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                  </>
                )}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden relative p-2 text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded-lg transition-all duration-300 hover:bg-gray-800/50"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
          >
            <div className="relative">
              {menuOpen ? (
                <X size={24} className="transform rotate-0 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${menuOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4'
            } overflow-hidden`}
        >
          <div className="bg-gradient-to-b from-gray-900 to-black border-t border-yellow-400/30 backdrop-blur-sm">
            <nav className="px-6 py-4">
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ name, path }, index) => (
                  <li
                    key={path}
                    className={`transform transition-all duration-300 ${menuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                      }`}
                    style={{ transitionDelay: menuOpen ? `${index * 100}ms` : '0ms' }}
                  >
                    <Link
                      to={path}
                      onClick={handleMenuClose}
                      className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${location.pathname === path
                        ? 'text-black bg-yellow-400 shadow-lg shadow-yellow-400/25 font-semibold'
                        : 'text-white hover:text-yellow-400 hover:bg-gray-800/50 font-medium'
                        }`}
                    >
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${location.pathname === path
                        ? 'bg-black'
                        : 'bg-yellow-400 opacity-0 group-hover:opacity-100'
                        }`}></div>
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
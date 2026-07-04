import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'blog' | 'contact') => void;
  currentPage: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ onNavigate, currentPage, darkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home' as const },
    { name: 'Projects', page: 'projects' as const },
    { name: 'About', page: 'about' as const },
    { name: 'Blog', page: 'blog' as const },
    { name: 'Contact', page: 'contact' as const },
  ];

  const handleNavClick = (page: typeof navItems[0]['page']) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white dark:text-gray-900 font-bold text-xl">A</span>
            </div>
            <span className={`text-xl font-light tracking-wider ${
              isScrolled || darkMode ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              ARCH<span className="font-semibold">STUDIO</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  currentPage === item.page
                    ? isScrolled || darkMode
                      ? 'text-gray-900 dark:text-white'
                      : 'text-white'
                    : isScrolled || darkMode
                    ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {currentPage === item.page && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-200 dark:to-slate-400"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || darkMode
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <Moon className={`w-5 h-5 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Get a Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 ${
                isScrolled || darkMode ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl animate-slideDown">
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left py-2 text-base font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 text-white dark:text-gray-900 rounded-lg text-sm font-medium"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

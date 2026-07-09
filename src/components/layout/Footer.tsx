import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'projects' | 'about' | 'blog' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: 'home' | 'projects' | 'about' | 'blog' | 'contact') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-light tracking-wider">
                ARCH<span className="font-semibold">STUDIO</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating timeless architectural spaces that blend innovation with functionality.
            </p>
          </div>589

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['home', 'projects', 'about', 'blog', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page as any)}
                    className="text-gray-400 hover:text-white transition-colors text-sm capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

        <div>
        <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
        <ul className="space-y-3 ">
          {(['home', 'projects', 'about', 'blog', 'contact'] as const).map((page) => (
            <li key={page}>
              <button
                onClick={() => handleNavClick(page)}
                className="text-gray-400 hover:text-white transition-colors text-sm capitalize"
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Design Avenue, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@archstudio.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates and news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-400 text-gray-900 rounded-lg text-sm font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2026 ArchStudio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Social media link"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

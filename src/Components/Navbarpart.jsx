import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbarpart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Gradient background */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700">
        {/* Content container */}
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <div className="text-3xl italic tracking-tight font-sans">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white hover:from-white hover:to-blue-300 transition-all duration-500 transform hover:scale-105">
              Pixel
            </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white hover:from-white hover:to-blue-300 transition-all duration-500 transform hover:scale-105">
              Craze
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 font-medium font-poppins mx-10">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.id}`}
                  className="text-white hover:text-blue-300 relative transition duration-300 cursor-pointer group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none hover:scale-110 transition-transform duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 bg-opacity-95 text-white py-6 px-5 space-y-4 font-poppins border-t border-blue-600">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.id}`}
              className="block hover:text-blue-300 text-lg font-medium cursor-pointer transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbarpart;

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className="text-3xl italic tracking-tight font-sans">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white hover:from-white hover:to-blue-300 transition-all duration-500 transform hover:scale-105">
              Pixel
            </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white hover:from-white hover:to-blue-300 transition-all duration-500 transform hover:scale-105">
              Craze
            </span>
          </div>
          <p className="text-sm text-blue-100">
            We craft innovative digital solutions for businesses, focusing on design, technology, and user experience.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>SEO Optimization</li>
            <li>Custom Software Development</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Email: info@pixelcraze.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Location: Texa, USA</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#facebook" className="py-2 px-2 text-blue-100 rounded-full bg-[#4f46e5] text-2xl hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#linkedin" className="py-2 px-2 text-blue-100 rounded-full bg-[#4f46e5] text-2xl hover:text-blue-400">
              <FaLinkedinIn />
            </a>
            <a href="#instagram" className="py-2 px-2 text-blue-100 rounded-full bg-[#4f46e5] text-2xl hover:text-blue-400">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-blue-800 pt-5 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} PixelCraze. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


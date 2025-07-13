import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaTelegramPlane, FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const navLinks = [
  { title: 'О нас', href: '/about' },
  { title: 'Услуги', href: '/services' },
  { title: 'Клиентам', href: '/clients' },
  { title: 'Наши работы', href: '/works' },
  { title: 'Блог', href: '/blog' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Контакты', href: '/contacts' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-[#161616] z-50 relative text-white">
      <div className="flex items-center justify-between mx-auto px-[5%] md:px-[15%] py-1">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-16 w-16 md:h-24 md:w-24 object-contain transform scale-150" />
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow items-center justify-center">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className={`text-base font-normal hover:text-gray-300 transition-colors ${
                    location.pathname === link.href ? 'text-[#F077EB]' : ''
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side container */}
        <div className="flex items-center space-x-4">
          {/* Desktop Contacts */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-base font-medium whitespace-nowrap">+7 952 981 39 98</span>
            <a href="#" className="text-xl hover:text-[#E000D7] transition-colors">
              <FaWhatsapp />
            </a>
            <a href="#" className="text-xl hover:text-[#E000D7] transition-colors">
              <FaTelegramPlane />
            </a>
          </div>

          {/* Order Button */}
          <button className="bg-transparent text-white border border-white rounded-full px-6 py-2 text-base font-medium whitespace-nowrap hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all">
            Заказать
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] absolute top-full left-0 w-full border-t border-gray-800 py-4 px-[5%]">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className={`text-base font-normal hover:text-gray-300 block transition-colors ${
                    location.pathname === link.href ? 'text-[#F077EB]' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-700 mt-4">
              <span className="text-base font-medium block mb-2">+7 952 981 39 98</span>
              <div className="flex space-x-4">
                <a href="#" className="text-xl hover:text-[#E000D7] transition-colors">
                  <FaWhatsapp />
                </a>
                <a href="#" className="text-xl hover:text-[#E000D7] transition-colors">
                  <FaTelegramPlane />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header; 
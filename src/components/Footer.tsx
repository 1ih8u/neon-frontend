import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaWhatsapp, FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa';

function Footer() {
  const servicesLinks = ["Неоновые вывески", "Объемные буквы", "Световые кубы", "Нестандартные изделия", "Таблички", "Печать"];
  const clientLinks = ["Дизайн", "Монтаж", "Оплата", "Доставка", "Гарантия"];
  const companyLinks = [
    { title: 'О нас', href: '/about' },
    { title: 'Наши работы', href: '/works' },
    { title: 'Блог', href: '#' },
    { title: 'FAQ', href: '#' },
  ];

  return (
    <footer className="bg-white text-black py-12">
      <div className="mx-auto px-[15%]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Logo */}
          <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
            <Link to="/">
              <img src={logo} alt="logo" className="h-12" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">УСЛУГИ</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => <li key={link}><a href="#" className="hover:underline">{link}</a></li>)}
            </ul>
          </div>
          
          {/* Clients */}
          <div>
            <h4 className="font-bold mb-4">КЛИЕНТАМ</h4>
            <ul className="space-y-2">
              {clientLinks.map((link) => <li key={link}><a href="#" className="hover:underline">{link}</a></li>)}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">О КОМПАНИИ</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contacts */}
          <div>
            <h4 className="font-bold mb-4">СВЯЗАТЬСЯ С НАМИ</h4>
            <div className="space-y-2">
              <p>+7 952 981 39 98</p>
              <p className="text-gray-500">10:00 - 19:00</p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-xl hover:text-[#E000D7] transition-colors"><FaWhatsapp /></a>
                <a href="#" className="text-xl hover:text-[#E000D7] transition-colors"><FaTelegramPlane /></a>
                <a href="#" className="text-xl hover:text-[#E000D7] transition-colors"><FaVk /></a>
                <a href="#" className="text-xl hover:text-[#E000D7] transition-colors"><FaYoutube /></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
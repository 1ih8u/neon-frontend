import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../assets/logo2.svg';
import { FaWhatsapp, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

function Footer() {
  const navigate = useNavigate();

  const servicesLinks = [
    { title: 'Неоновые вывески', category: 'Неоновые вывески' },
    { title: 'Объемные буквы', category: 'Объемные буквы' },
    { title: 'Световые кубы', category: 'Световые кубы' },
    { title: 'Нестандартные изделия', category: 'Нестандартные изделия' },
    { title: 'Таблички', category: 'Таблички' },
    { title: 'Печать', category: 'Печать' },
  ];
  const clientLinks = [
    { title: "Дизайн", href: "/clients#design" },
    { title: "Монтаж", href: "/clients#montage" },
    { title: "Оплата", href: "/clients#payment" },
    { title: "Доставка", href: "/clients#delivery" },
    { title: "Гарантия", href: "/clients#warranty" },
  ];
  const companyLinks = [
    { title: 'О нас', href: '/about' },
    { title: 'Наши работы', href: '/works' },
    { title: 'Блог', href: '/blog' },
    { title: 'FAQ', href: '/faq' },
  ];

  const handleServiceClick = (category: string) => {
    navigate('/works', { state: { category } });
  };

  const handleClientClick = (href: string) => {
    navigate(href);
    setTimeout(() => {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const SocialIcons = () => (
    <div className="flex space-x-4">
      <a href="https://api.whatsapp.com/send?phone=79529813998" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#E000D7] transition-colors"><FaWhatsapp /></a>
      <a href="https://t.me/Bogorodov_Neon" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#E000D7] transition-colors"><FaTelegramPlane /></a>
      <a href="https://youtube.com/@bogorodov_neon?si=CoZTGSv2NNbADpHG" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#E000D7] transition-colors"><FaYoutube /></a>
    </div>
  );

  return (
    <footer className="bg-white text-black py-12">
      <div className="mx-auto px-[5%] md:px-[15%]">
        
        {/* Mobile Header */}
        <div className="flex justify-between items-center mb-10 md:hidden">
          <Link to="/">
            <img src={logo2} alt="logo" className="h-10" />
          </Link>
          <SocialIcons />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Logo for Desktop */}
          <div className="hidden md:block col-span-2 md:col-span-1">
            <Link to="/">
              <img src={logo2} alt="logo" className="h-12" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">УСЛУГИ</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.title}>
                  <button onClick={() => handleServiceClick(link.category)} className="hover:underline text-left">
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Clients */}
          <div>
            <h4 className="font-bold mb-4">КЛИЕНТАМ</h4>
            <ul className="space-y-2">
               {clientLinks.map((link) => (
                <li key={link.title}>
                  <button onClick={() => handleClientClick(link.href)} className="hover:underline text-left">
                    {link.title}
                  </button>
                </li>
              ))}
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
              <div className="hidden md:flex space-x-4 pt-2">
                <SocialIcons />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
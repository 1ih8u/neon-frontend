import React from 'react';

const menuItems = [
  'Неоновые вывески',
  'Объемные буквы',
  'Световые кубы',
  'Таблички',
  'Печать',
  'Нестандартные изделия',
];

const WorksMenu = () => {
  return (
    <section className="bg-[#161616] text-white pt-8 md:pt-16 pb-16 md:pb-24">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full border border-white text-sm md:text-base hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksMenu; 
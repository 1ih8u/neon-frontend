import React, { useState, useRef } from 'react';
import Icon1 from '../assets/Icon1.svg';
import Icon2 from '../assets/Icon2.svg';
import Icon3 from '../assets/Icon3.svg';
import Icon4 from '../assets/Icon4.svg';
import Icon5 from '../assets/Icon5.svg';
import Icon6 from '../assets/Icon6.svg';
import icon1v2 from '../assets/icon1v2.svg';
import icon2v2 from '../assets/icon2v2.svg';
import icon3v2 from '../assets/icon3v2.svg';
import icon4v2 from '../assets/icon4v2.svg';
import icon5v2 from '../assets/icon5v2.svg';
import icon6v2 from '../assets/icon6v2.svg';

interface AdvantageCard {
  id: number;
  icon: string;
  iconHover: string;
  title: string;
  description: string;
  isVisible?: boolean; 
}

function AdvantagesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const advantageCards: AdvantageCard[] = [
    {
      id: 1,
      icon: Icon1,
      iconHover: icon1v2,
      title: "Без посредников",
      description: "Благодаря собственному производству, контролируем качество каждого изделия.",
      isVisible: true,
    },
    {
      id: 2,
      icon: Icon2,
      iconHover: icon2v2,
      title: "Индивидуальность",
      description: "Создаем уникальные вывески, помогая увеличивать вашу клиентскую базу.",
      isVisible: true,
    },
    {
      id: 3,
      icon: Icon3,
      iconHover: icon3v2,
      title: "5+ лет опыта",
      description: "Имеем за плечами многолетнюю успешную деятельность в сфере рекламы.",
      isVisible: true,
    },
    {
      id: 4,
      icon: Icon4,
      iconHover: icon4v2,
      title: "Долговечность",
      description: "Используем сертифицированные материалы для производства наших изделий.",
      isVisible: true,
    },
    {
      id: 5,
      icon: Icon5, 
      iconHover: icon5v2,
      title: "Модернизация",
      description: "Применяем инновационные методы производства для достижения высокого качества.",
      isVisible: true, 
    },
    {
      id: 6,
      icon: Icon6, 
      iconHover: icon6v2,
      title: "Ответственность",
      description: "Гарантируем выполнение заказов в срок и безупречное качество изготовления.",
      isVisible: true, 
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8 md:py-16 bg-[#161616] text-white">
      <div className="pl-[5%] md:pl-[15%]">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 gap-5 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {advantageCards
            .filter(card => card.isVisible !== false)
            .map(card => (
              <div 
                key={card.id}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`flex-shrink-0 rounded-[24px] px-4 md:p-6 snap-center w-[216px] h-[299px] md:w-[360px] md:h-[475px] flex flex-col justify-center transition-transform duration-300 ease-in-out ${
                  hoveredId === card.id
                    ? 'scale-95 bg-gradient-to-r from-[#E601C9] to-[#D504D8]'
                    : 'border border-white'
                }`}
              >
                <img src={hoveredId === card.id ? card.iconHover : card.icon} alt={card.title} className="w-16 h-16 md:w-28 md:h-28 mb-6 md:mb-8" />
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">{card.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{card.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection; 
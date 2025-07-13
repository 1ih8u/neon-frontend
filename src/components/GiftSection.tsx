import React from 'react';
import giftBg from '../assets/gift.svg';

function GiftSection() {
  return (
    <section className="py-16 bg-[#161616]">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <div
          className="relative w-full h-[620px] md:h-[600px] rounded-2xl overflow-hidden bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${giftBg})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-full md:max-w-[800px] mx-auto text-center px-5 md:px-4">
            <h2 className="text-2xl md:text-4xl font-normal mb-4 md:mb-6">
              Мы заботимся о наших клиентах и дарим подарки в знак благодарности
              за выбор нашей компании
            </h2>
            <p className="text-sm md:text-lg mb-8 md:mb-10 opacity-90">
              Всегда готовы помочь вам выбрать стиль, создать дизайн и узнать
              стоимость вывески.
            </p>
            <button className="bg-transparent text-white border border-white rounded-full px-6 md:px-8 py-3 md:py-4 font-normal text-base md:text-lg hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all">
              Получить подарок
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiftSection; 
import React from 'react';
import guaranteeImage from '../assets/guarantee.svg';

const WarrantySection = () => {
  return (
    <section id="warranty" className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[25%]">

        {/* --- Mobile Layout: Title -> Image -> Text Box --- */}
        <div className="md:hidden">
          <h2 className="text-2xl font-normal text-left mb-3">Гарантия</h2>
          <img src={guaranteeImage} alt="Гарантия" className="w-full h-80 object-cover rounded-3xl mb-3" />
          <div className="border border-white rounded-3xl p-6">
            <div className="space-y-4 text-sm mb-8">
              <p>Мы предоставляем полную гарантию. Если вдруг с вывеской или блоком питания что-то произойдет, мы берем это на себя. А именно:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>доставку из любого региона;</li>
                <li>ремонт полностью за наш счёт, вплоть до замены на новую вывеску;</li>
                <li>подарок, от которого у вас будут только хорошие воспоминания о нас.</li>
              </ul>
            </div>
            <p className="text-sm font-normal">Гарантия 12 месяцев на все изделия.</p>
          </div>
        </div>

        {/* --- Desktop Layout --- */}
        <div className="hidden md:block border border-white rounded-3xl md:pt-[60px] md:pb-[82px] md:px-[10%]">
            <div className="flex flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">Гарантия</h2>
                    <div className="space-y-4 text-lg mb-8">
                      <p>Мы предоставляем полную гарантию. Если вдруг с вывеской или блоком питания что-то произойдет, мы берем это на себя. А именно:</p>
                      <ul className="list-disc list-inside space-y-2 mt-2">
                        <li>доставку из любого региона;</li>
                        <li>ремонт полностью за наш счёт, вплоть до замены на новую вывеску;</li>
                        <li>подарок, от которого у вас будут только хорошие воспоминания о нас.</li>
                      </ul>
                    </div>
                    <p className="text-2xl font-normal">Гарантия 12 месяцев на все изделия.</p>
                </div>
                <div className="flex-shrink-0">
                    <img src={guaranteeImage} alt="Гарантия" className="w-full max-w-xs sm:max-w-sm lg:w-[240px] lg:h-[360px] object-cover rounded-3xl" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection; 
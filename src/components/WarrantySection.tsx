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
        <div className="hidden md:block border border-white rounded-3xl p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-normal mb-12 leading-tight">Гарантия</h2>
                    <div className="space-y-4 text-lg">
                        <p>На все наши изделия действует гарантия 12 месяцев. Мы уверены в качестве своей продукции и используемых материалов.</p>
                        <p>В случае возникновения проблем, мы оперативно устраним неисправность или заменим изделие.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={guaranteeImage} alt="Гарантия" className="w-auto h-auto max-h-80 object-contain rounded-3xl" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection; 
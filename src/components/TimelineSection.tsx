import React from 'react';
import timelineImage from '../assets/deadlines.svg'; 

const TimelineSection = () => {
  return (
    <section id="timeline" className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[25%]">
        
        {/* --- Mobile Layout: Title -> Image -> Text Box --- */}
        <div className="md:hidden">
          <h2 className="text-2xl font-normal text-left mb-3">Сроки выполнения</h2>
          <img src={timelineImage} alt="Сроки выполнения" className="w-full h-80 object-cover rounded-3xl mb-3" />
          <div className="border border-white rounded-3xl p-6">
            <div className="space-y-4 text-sm">
                <p>Срочные заказы выполняем за 2-3 дня. В среднем сроки производства составляют 3-10 дней.</p>
                <p>Сроки могут варьироваться в зависимости от сложности заказа и загруженности производства.</p>
            </div>
          </div>
        </div>

        {/* --- Desktop Layout --- */}
        <div className="hidden md:block border border-white rounded-3xl md:pt-[60px] md:pb-[82px] md:px-[10%]">
            <div className="flex flex-row gap-12 items-center">
                <div className="flex-shrink-0">
                    <img src={timelineImage} alt="Сроки выполнения" className="w-full max-w-xs sm:max-w-sm lg:w-[360px] lg:h-[320px] object-cover rounded-3xl" />
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-normal mb-12 leading-tight">Сроки выполнения</h2>
                    <div className="space-y-4 text-lg">
                      <p>Срочные заказы выполняем за 2-3 дня. В среднем сроки производства составляют 3-10 дней.</p>
                      <p>Сроки могут варьироваться в зависимости от сложности заказа и загруженности производства.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection; 
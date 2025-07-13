import React from 'react';
import a_foto from '../assets/a_foto.svg';

function PricingSection() {
  return (
    <section className="py-16 bg-[#161616]">
      <div className="mx-auto px-[5%] md:px-[25%]">
        <h2 className="text-3xl md:text-5xl font-normal mb-10 md:mb-12 max-w-3xl text-left">
          Почему рекламные вывески могут казаться дорогими
        </h2>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
          {/* Image Placeholder */}
            <div className="relative rounded-3xl h-64 md:h-[300px] md:w-[300px] overflow-hidden">
            <img src={a_foto} alt="Signage example" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Опытные специалисты */}
            <div className="border border-white rounded-3xl p-6 md:py-[60px] md:px-10 flex-1">
            <h3 className="text-xl font-medium mb-3">Опытные специалисты</h3>
            <p className="text-sm text-gray-300">
              Это ключевой фактор успешного создания нашей продукции. Мы ценим опыт наших сотрудников и нанимаем исключительно профессионалов в области наружной рекламы, обеспечивая высокое качество и надежность нашей работы.
            </p>
            <br />
            <p className="text-sm text-gray-300">
              И, наконец, специалисты по неоновым вывескам особенно редки и востребованы. Их опыт и навыки придают нашим вывескам уникальность и эффектность.
            </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
          {/* Качественные материалы */}
            <div className="border border-white rounded-3xl p-6 md:py-[60px] md:px-10 flex-1 md:flex-[1.8]">
            <h3 className="text-xl font-medium mb-3">Качественные материалы</h3>
            <p className="text-sm text-gray-300">
              Это основа долговечности рекламных конструкций. Стоимость материалов составляет значительную часть общей суммы. Мы используем сертифицированные материалы, большая часть которых поставляется из Европы, что может гарантировать высокое качество и долговечность вывесок.
            </p>
          </div>
          
          {/* Превосходная вывеска */}
            <div className="bg-gradient-to-r from-[#E601C9] to-[#D504D8] rounded-3xl p-6 md:py-[60px] md:px-10 text-white flex-1">
            <h3 className="text-xl font-medium mb-3">Превосходная вывеска</h3>
            <p className="text-sm">
              Цена рекламной вывески отражает качество материалов и работу специалистов, что обеспечивает долговечность и эффективность вашей рекламы.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection; 
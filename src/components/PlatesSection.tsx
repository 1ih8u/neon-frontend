import tableImage from '../assets/table.svg';

const PlatesSection = () => {
  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[20%]">
        <h2 className="text-2xl font-normal mb-6 text-left md:hidden">Таблички</h2>
        <img src={tableImage} alt="Табличка" className="w-full h-40 object-cover rounded-3xl mb-6 md:hidden" />
        <div className="border border-white rounded-3xl p-6 md:p-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                    <h2 className="hidden md:block text-4xl md:text-5xl font-normal mb-12">Таблички</h2>
                    <p className="text-sm md:text-lg">
                        Таблички можно использовать в различных целях, например, как указатели, отображение режима работы, привлечение в социальные сети с помощью QR-кодов, или интерьерные вывески с разнообразными вариантами подсветки.
                    </p>
                    <p className="text-sm md:text-lg mt-4">
                        Таблички могут располагаться снаружи и внутри помещения. Изготавливаем таблички с подсветкой и без неё.
                    </p>
                </div>
                <div className="hidden md:block md:w-2/3 h-1/3">
                    <img src={tableImage} alt="Табличка" className="w-full max-w-sm mx-auto rounded-3xl h-full object-cover" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PlatesSection; 
import nonStandardImage from '../assets/non-standet.svg'; 

const NonStandardProductsSection = () => {
  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[20%] flex flex-col gap-6">
        <h2 className="text-2xl font-normal text-left md:hidden">Нестандартные изделия</h2>
        <img src={nonStandardImage} alt="Нестандартные изделия" className="w-full h-80 object-cover rounded-3xl md:hidden" />
        <div className="border border-white rounded-3xl p-6 md:p-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                    <h2 className="hidden md:block text-4xl md:text-5xl font-normal mb-12">Нестандартные изделия</h2>
                    <p className="text-sm md:text-lg">
                        Помогаем в создании уникальных изделий, таких как: буквы с мхом, неоном, лампочками, пенопластом, деревом и т.д.
                    </p>
                    <p className="text-sm md:text-lg mt-4">
                        Нестандартные изделия подойдут для декора интерьера, оформления мероприятий, блогов и социальных сетей, и тех, кто хочет чего-то необычного.
                    </p>
                </div>
                <div className="hidden md:block md:w-2/3">
                    <img src={nonStandardImage} alt="Нестандартные изделия" className="w-full max-w-sm mx-auto rounded-3xl h-full object-cover" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NonStandardProductsSection; 
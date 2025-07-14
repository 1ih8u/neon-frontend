import { useRef } from 'react';
import montageImage from '../assets/montage.svg'; // Заглушка, замените на montage.svg

// --- Изображения для инструкции ---
// !ВАЖНО: Замените '...' на реальные пути к вашим 7 изображениям
import instructionImg1 from '../assets/instruction1.svg'; // Заглушка
import instructionImg2 from '../assets/instruction2.svg'; // Заглушка
import instructionImg3 from '../assets/instruction3.svg'; // Заглушка
import instructionImg4 from '../assets/instruction4.svg'; // Заглушка
import instructionImg5 from '../assets/instruction5.svg'; // Заглушка
import instructionImg6 from '../assets/instruction6.svg'; // Заглушка
import instructionImg7 from '../assets/instruction7.svg'; // Заглушка

const instructionImages = [
    instructionImg1,
    instructionImg2,
    instructionImg3,
    instructionImg4,
    instructionImg5,
    instructionImg6,
    instructionImg7,
];

const MontageSection = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainer.current) {
            const scrollAmount = 285 + 24; // Card width + gap
            scrollContainer.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    
    return (
    <section id="montage" className="bg-[#161616] text-white pt-3 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        {/* Padded container for main content */}
        <div className="mx-auto px-[5%] md:px-[25%]">
            {/* --- Mobile Layout: Title -> Image -> Text --- */}
            <div className="md:hidden">
                <h2 className="text-2xl font-normal text-left">Монтаж</h2>
                <img src={montageImage} alt="Монтаж" className="w-full h-64 object-cover rounded-3xl mt-3" />
                <div className="border border-white rounded-3xl p-6 mt-3">
                    <div className="space-y-4">
                        <p className="text-sm">
                            Вы можете заказать услугу монтажа в Москве и Московской области. Чтобы узнать точную стоимость, напишите или позвоните нам.
                        </p>
                        <p className="text-sm">
                            Мы часто слышим от наших клиентов вопросы о том, как самостоятельно повесить вывеску. Постараемся подробно рассказать о способах установки неоновой вывески.
                        </p>
                        <p className="text-sm">
                            Надеемся, благодаря нашим инструкциям, процесс монтажа неоновой вывески будет простым и понятным, и не займет много сил и времени.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* --- Desktop Layout --- */}
            <div className="hidden md:block border border-white rounded-3xl py-16 px-[10%]">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-2/5">
                        <img src={montageImage} alt="Монтаж" className="w-full rounded-3xl" />
                    </div>
                    <div className="md:w-3/5">
                        <h2 className="text-2xl md:text-5xl font-normal mb-12">Монтаж</h2>
                        <div className="space-y-4">
                            <p className="text-sm md:text-lg">
                                Вы можете заказать услугу монтажа в Москве и Московской области. Чтобы узнать точную стоимость, напишите или позвоните нам.
                            </p>
                            <p className="text-sm md:text-lg">
                                Мы часто слышим от наших клиентов вопросы о том, как самостоятельно повесить вывеску. Постараемся подробно рассказать о способах установки неоновой вывески.
                            </p>
                            <p className="text-sm md:text-lg">
                                Надеемся, благодаря нашим инструкциям, процесс монтажа неоновой вывески будет простым и понятным, и не займет много сил и времени.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

             {/* Carousel Title */}
            <div className="mt-16 md:mt-24 mb-6 md:mb-12">
                <h2 className="text-xl md:text-5xl font-normal text-left">
                    Инструкция монтажа неоновой<br className="hidden md:block"/> вывески на стену
                </h2>
            </div>
        </div>

        {/* Carousel Scroll Area - full bleed */}
        <div 
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto pb-4 pl-[5%] md:pl-[25%] pr-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {instructionImages.map((imgSrc, index) => (
                <div key={index} className="flex-shrink-0 w-[285px] h-[320px] bg-gray-700 rounded-3xl overflow-hidden">
                    <img src={imgSrc} alt={`Шаг ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>

        {/* Padded container for buttons */}
        <div className="mx-auto px-[5%] md:px-[25%]">
            <div className="flex justify-between md:justify-start md:gap-4">
                <button onClick={() => scroll('left')} className="group w-20 h-12 flex items-center justify-center rounded-full border border-white hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all duration-300">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 15L1.5 8L8.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button onClick={() => scroll('right')} className="group w-20 h-12 flex items-center justify-center rounded-full border border-white hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all duration-300">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L8.5 8L1.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
    );
};

export default MontageSection; 
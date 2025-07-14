import React, { useRef } from 'react';

// --- Используйте свои изображения для инструкции по монтажу на окно ---
import instructionImg1 from '../assets/instruction-window.svg';
import instructionImg2 from '../assets/instruction-window2.svg';
import instructionImg3 from '../assets/instruction-window3.svg';
import instructionImg4 from '../assets/instruction-window4.svg';
import instructionImg5 from '../assets/instruction-window5.svg';
import instructionImg6 from '../assets/instruction-window6.svg';
import instructionImg7 from '../assets/instruction-window7.svg';


const instructionImages = [
    instructionImg1,
    instructionImg2,
    instructionImg3,
    instructionImg4,
    instructionImg5,
    instructionImg6,
    instructionImg7,
];

const WindowMontageSection = () => {
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
        <section className="bg-[#161616] text-white pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
            <div className="mx-auto px-[5%] md:px-[20%]">
                <div className="mb-6 md:mb-12">
                    <h2 className="text-xl md:text-5xl font-normal text-left">
                        Инструкция монтажа неоновой<br className="hidden md:block"/>вывески на окно
                </h2>
                </div>
            </div>

            <div 
                ref={scrollContainer}
                className="flex gap-6 overflow-x-auto pb-4 pl-[5%] md:pl-[20%] pr-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {instructionImages.map((imgSrc, index) => (
                    <div key={index} className="flex-shrink-0 w-[285px] h-[320px] bg-gray-700 rounded-3xl overflow-hidden">
                        <img src={imgSrc} alt={`Шаг ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Padded container for buttons */}
            <div className="mx-auto px-[5%] md:px-[20%]">
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

export default WindowMontageSection; 
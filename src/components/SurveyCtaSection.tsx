import { useState } from 'react';
import SurveyModal from './SurveyModal';
import surveyBg from '../assets/survey.svg'; 

const SurveyCtaSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section 
        className="py-20 text-white bg-[#161616]" 
      >
        <div className="container mx-auto px-4">
        <div 
            className="bg-cover bg-center rounded-3xl flex flex-col justify-center items-center aspect-[9/16] md:aspect-[2/1]"
          style={{ backgroundImage: `url(${surveyBg})` }}
        >
            <div className="w-full px-6 md:px-[170px] text-center">
              <h2 className="text-2xl md:text-5xl font-normal max-w-4xl mx-auto mb-4">
              Пройдите опрос и получите подарок за выбор нашей компании
            </h2>
              <p className="max-w-3xl mx-auto mb-8 text-sm md:text-lg">
              Ответьте на 5 вопросов, и мы предложим вам оптимальное решение. Опрос поможет понять вашу идею, бюджет и сроки, а также необходимость в дополнительных услугах.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
                className="bg-white text-black font-normal py-3 md:py-4 px-16 rounded-full text-lg hover:text-white hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] transition-all whitespace-nowrap"
            >
              Пройти опрос
            </button>
            </div>
          </div>
        </div>
      </section>
      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default SurveyCtaSection; 
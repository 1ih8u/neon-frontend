import React, { useState } from 'react';

// --- Изображения для Вопроса 1 ---
import a1_1 from '../assets/a1.1.svg';
import a1_2 from '../assets/a1.2.svg';
import a1_3 from '../assets/a1.3.svg';
import a1_4 from '../assets/a1.4.svg';
import a1_5 from '../assets/a1.5.svg';


interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Placeholder = () => <div className="w-full h-32 bg-gray-700 rounded-2xl"></div>;

const signTypes = [
  { name: 'Объемные буквы', image: a1_1 },
  { name: 'Панель-кронштейн', image: a1_2 },
  { name: 'Световой короб', image: a1_3 },
  { name: 'Неоновая вывеска', image: a1_4 },
  { name: 'Табличка', image: a1_5 },
];

const Step1 = ({ onSelect }: { onSelect: (value: string) => void }) => (
  <div>
    <h2 className="text-3xl font-medium mb-4">Какая вывеска вам нужна?</h2>
    <div className="md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center">
        {signTypes.map(type => (
          <div 
            key={type.name} 
            onClick={() => onSelect(type.name)} 
            className="cursor-pointer rounded-2xl bg-[#2C2C2C] hover:bg-[#3C3C3C] transition overflow-hidden flex flex-col"
          >
            <div className="h-40">
              {type.image ? <img src={type.image} alt={type.name} className="w-full h-full object-cover" /> : <Placeholder />}
            </div>
            <div className="p-4 flex-grow flex items-center justify-center">
              <p>{type.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  if (!isOpen) {
    return null;
  }

  const handleSelect = (question: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };
  
  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const resetSurvey = () => {
    setStep(1);
    setAnswers({});
    onClose();
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onSelect={(answer) => handleSelect('signType', answer)} />;
      default:
        return <div>Вопрос {step} (в разработке)</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#161616] text-white rounded-3xl w-full max-w-5xl max-h-[90vh] relative">
        <button onClick={resetSurvey} className="absolute top-6 right-6 text-2xl z-10">&times;</button>
        <div className="overflow-y-auto h-full p-8 md:p-16">
            <div className="mx-auto" style={{width: 'clamp(100%, 100%, 80%)'}}>
                <div className="flex justify-end opacity-60 mb-8">Вопрос {step} из 5</div>
                {renderStep()}
                <div className="flex justify-between items-center mt-12">
                    <div>
                        {step > 1 && (
                            <button onClick={handleBack} className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition">Назад</button>
                        )}
                    </div>
                    <div>
                        <button onClick={handleNext} className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition">Дальше</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyModal; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import giftImage from '../assets/heart.svg';

interface Answer {
  id: number;
  text: string;
  description: string | null;
  image: string | null;
  nextQuestionId: number | null;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionForm = ({ onSubmit, onBack, isSubmitting }: { onSubmit: (data: any) => void; onBack: () => void; isSubmitting: boolean; }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState<string[]>([]);

  const handleContactMethodChange = (method: string) => {
    setContactMethod(prev => 
      prev.includes(method) ? prev.filter(m => m !== method) : [...prev, method]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone, contactMethod: contactMethod.join(', ') });
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8 md:gap-16 items-center h-full">
      <div className="w-full md:w-1/2 flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Спасибо за ваши ответы</h2>
        <p className="text-white/70 mb-6 md:mb-8 text-sm md:text-base">
          Оставьте ваши контактные данные, чтобы мы отправили подарок и рассказали о стоимости.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            required
            className="w-full bg-[#2C2C2C] border border-transparent rounded-full px-6 py-3 md:py-4 placeholder-white/50 focus:outline-none focus:border-white/50 text-sm md:text-base"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Номер телефона"
            required
            className="w-full bg-[#2C2C2C] border border-transparent rounded-full px-6 py-3 md:py-4 placeholder-white/50 focus:outline-none focus:border-white/50 text-sm md:text-base"
          />
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm md:text-base">Предпочтительный способ связи</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {['Звонок', 'WhatsApp', 'Telegram'].map(method => (
              <label key={method} className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={contactMethod.includes(method)}
                  onChange={() => handleContactMethodChange(method)}
                  className="w-5 h-5 mr-2 bg-transparent border-white rounded"
                />
                <span className="text-sm md:text-base">{method}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-auto pt-6">
            <button type="button" onClick={onBack} className="w-full sm:w-auto bg-transparent border border-white text-white font-normal py-3 px-8 rounded-full text-base md:text-lg transition-all hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent">Назад</button>
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-white text-black font-normal py-3 px-8 rounded-full text-base md:text-lg transition-all hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent hover:text-white disabled:opacity-50">
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
        <img src={giftImage} alt="Подарок" className="max-w-xs md:max-w-sm" />
      </div>
    </form>
  );
};


const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [answerPath, setAnswerPath] = useState<{ questionText: string; answerText: string }[]>([]);
  const [questionHistory, setQuestionHistory] = useState<Question[]>([]);
  
  const [isSubmissionStep, setIsSubmissionStep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const totalSteps = 5;

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setIsSubmissionStep(false);
      setQuestionHistory([]);
      setAnswerPath([]);
      setSelectedAnswer(null);
      axios.get('http://localhost:8000/api/survey/questions/start/')
        .then(response => {
          setCurrentQuestion(response.data);
          setError(null);
        })
        .catch(() => setError('Не удалось загрузить опрос.'))
        .finally(() => setLoading(false));
    }
  }, [isOpen]);

  const fetchNextQuestion = (nextId: number) => {
    setLoading(true);
    setError(null);
    setSelectedAnswer(null);
    axios.get(`http://localhost:8000/api/survey/questions/${nextId}/`)
      .then(response => setCurrentQuestion(response.data))
      .catch(() => setError('Не удалось загрузить следующий вопрос.'))
      .finally(() => setLoading(false));
  };
  
  const handleNext = () => {
    if (!selectedAnswer) return;

    const answer = currentQuestion?.answers.find(a => a.id === selectedAnswer);
    if (!answer) return;

    setQuestionHistory(prev => [...prev, currentQuestion!]);
    setAnswerPath(prev => [...prev, { questionText: currentQuestion!.text, answerText: answer.text }]);

    if (answer.nextQuestionId) {
      fetchNextQuestion(answer.nextQuestionId);
    } else {
      setCurrentQuestion(null);
      setIsSubmissionStep(true);
    }
  };
  
  const handleBack = () => {
    setError(null);
    const lastQuestion = questionHistory.pop();
    if (isSubmissionStep) {
      setIsSubmissionStep(false);
    }
    
    if (lastQuestion) {
        setCurrentQuestion(lastQuestion);
        setAnswerPath(prev => prev.slice(0, -1));
    }
    
    setQuestionHistory([...questionHistory]);
    setSelectedAnswer(null);
  };

  const handleSubmit = async (formData: { name: string; phone: string; contactMethod: string; }) => {
    setIsSubmitting(true);
    setError(null);
    
    const submissionData = {
      ...formData,
      answers_path: [...answerPath, { questionText: 'Способ связи', answerText: formData.contactMethod }]
    };

    try {
      await axios.post('http://localhost:8000/api/survey/submit/', submissionData);
      alert('Спасибо! Ваша заявка отправлена. Мы скоро с вами свяжемся.');
      resetSurvey();
    } catch (err) {
      setError('Не удалось отправить заявку. Пожалуйста, попробуйте еще раз.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSurvey = () => {
    setCurrentQuestion(null);
    setAnswerPath([]);
    setQuestionHistory([]);
    setIsSubmissionStep(false);
    setSelectedAnswer(null);
    onClose();
  };

  if (!isOpen) return null;

  const hasImageAnswers = currentQuestion?.answers.some(a => a.image);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#161616] text-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col relative">
        <button 
          onClick={resetSurvey} 
          className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl z-10 transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8]"
        >
          &times;
        </button>
        <div className="overflow-y-auto flex-grow p-6 md:p-16">
          {loading && <div className="text-center">Загрузка...</div>}
          
          {error && (
            <div className="text-center text-red-500">
              <p className="text-xl">{error}</p>
              <div className="flex justify-center items-center mt-12">
                  {questionHistory.length > 0 && (
                      <button onClick={handleBack} className="bg-transparent border border-white text-white font-normal py-3 px-8 rounded-full text-lg transition-all hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent">Назад</button>
                  )}
              </div>
            </div>
          )}
          
          {!loading && !error && (
            isSubmissionStep ? (
              <SubmissionForm onSubmit={handleSubmit} onBack={handleBack} isSubmitting={isSubmitting} />
            ) : currentQuestion && (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-medium pr-4">{currentQuestion.text}</h2>
                    <div className="opacity-60 text-sm text-right flex-shrink-0">Вопрос {questionHistory.length + 1} из {totalSteps}</div>
                </div>

                <div className="flex-grow">
                    {currentQuestion.answers.length > 0 ? (
                        hasImageAnswers ? (
                             <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3 md:gap-4 text-center">
                                {currentQuestion.answers.map(answer => (
                                  <div key={answer.id} onClick={() => setSelectedAnswer(answer.id)} className={`cursor-pointer rounded-2xl transition overflow-hidden flex flex-col ${selectedAnswer === answer.id ? 'ring-2 ring-white' : ''}`}>
                                    {answer.image && (
                                      <div className="h-28 md:h-52">
                                        <img src={answer.image} alt={answer.text} className="w-full h-full object-contain" />
                                      </div>
                                    )}
                                    <div className="p-2 md:p-4 flex-grow flex items-center justify-center">
                                      <p className="text-xs md:text-base">{answer.text}</p>
                                    </div>
                                  </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 text-center mt-4 md:mt-12 md:gap-6">
                                {currentQuestion.answers.map(answer => (
                                    <div key={answer.id} onClick={() => setSelectedAnswer(answer.id)} className={`cursor-pointer rounded-2xl bg-transparent border border-white/50 hover:border-white transition py-4 px-2 md:py-10 md:px-6 flex flex-col justify-center items-center ${selectedAnswer === answer.id ? 'ring-2 ring-white' : ''}`}>
                                        <p className="text-base md:text-xl font-medium">{answer.text}</p>
                                        {answer.description && <p className="text-white/60 mt-1 text-xs md:text-sm">{answer.description}</p>}
                                    </div>
                                ))}
                            </div>
                        )
                    ) : (
                        <div className="text-center">Нет доступных ответов.</div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-auto pt-6">
                    {questionHistory.length > 0 ? (
                        <button onClick={handleBack} className="w-full sm:w-auto bg-transparent border border-white text-white font-normal py-3 px-8 rounded-full text-base md:text-lg transition-all hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent">Назад</button>
                    ) : (
                      <div className="hidden sm:block"></div>
                    )}
                    <button 
                        onClick={handleNext} 
                        disabled={!selectedAnswer}
                        className="w-full sm:w-auto bg-white text-black font-normal py-3 px-8 rounded-full text-base md:text-lg transition-all hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent hover:text-white disabled:opacity-50"
                    >
                        Дальше
                    </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyModal; 
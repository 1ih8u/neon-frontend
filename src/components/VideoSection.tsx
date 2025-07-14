import React from 'react';
import { useNavigate } from 'react-router-dom';

function VideoSection() {
  const navigate = useNavigate();
  const videoUrl = "https://youtube.com/shorts/9wcfpmmGinQ?si=4yEJkR56xHOu23AQ";
  const videoId = "9wcfpmmGinQ"; // ID видео из URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // Высокое качество
  // Альтернативные URL для превью:
  // `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` - Стандартное качество
  // `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` - Среднее качество
  // `https://img.youtube.com/vi/${videoId}/sddefault.jpg` - Высокое качество
  
  const handleNavigate = () => {
    navigate('/works#works-hero');
    // Небольшая задержка, чтобы прокрутка сработала после рендера
    setTimeout(() => {
      const element = document.getElementById('works-hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-16 bg-[#161616]">
      <div className="mx-auto px-[5%] md:px-[25%]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Текстовый блок */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-4xl font-normal mb-6">
              От ярких неоновых надписей до креативных световых эффектов
            </h2>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Наша команда создает уникальные и впечатляющие решения, которые привлекают внимание и запоминаются надолго.
            </p>
            <p className="text-base md:text-lg mb-8 opacity-90">
              Доверьте нам оформление вашего бизнеса, и вы получите стильный и эффективный инструмент для привлечения клиентов и укрепления имиджа вашей компании.
            </p>
            <button 
              onClick={handleNavigate}
              className="bg-transparent text-white border border-white rounded-full px-8 py-4 font-medium text-lg w-full md:w-auto flex justify-center hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all"
            >
              Наши работы
            </button>
          </div>
          
          {/* Видео блок */}
          <div className="w-full md:w-1/2">
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative rounded-xl overflow-hidden aspect-[9/16] max-w-[350px] mx-auto"
            >
              {/* Превью видео */}
              <img 
                src={thumbnailUrl} 
                alt="Видео превью" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Если изображение не загрузилось, используем запасной вариант
                  e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />
              
              {/* Кнопка воспроизведения */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-black ml-1"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 
import React, { useState } from 'react';

interface WorkImage {
  id: number;
  image: string;
}

interface Work {
  id: number;
  title: string;
  description: string;
  price: string;
  images: WorkImage[];
}

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragX, setDragX] = useState(0);


  if (!work.images || work.images.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === work.images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? work.images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setDragX(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setDragX(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const dragThreshold = 50;
    if (dragX > dragThreshold) {
      prevSlide();
    } else if (dragX < -dragThreshold) {
      nextSlide();
    }
    setIsDragging(false);
    setDragX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragX(0);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragX(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setDragX(e.touches[0].clientX - startX);
  };

  return (
    <div className="flex flex-col">
      <div 
        className="relative w-full h-0 pb-[115%] mb-4 overflow-hidden rounded-2xl group cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {work.images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.image} 
              alt={`${work.title} - image ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
        
        {/* Индикаторы слайдера */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {work.images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2.5 transition-all duration-300 ease-in-out rounded-full ${
                currentIndex === slideIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-l font-normal text-center mb-1">{work.title}</p>
      <p className="text-xl text-white/70 mb-2 text-center">{work.description}</p>
      <p className="text-2xl font-normal text-center">{parseInt(work.price, 10).toLocaleString('ru-RU')} руб.</p>
    </div>
  );
};

export default WorkCard; 
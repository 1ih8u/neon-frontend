import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Определяем структуру данных для изображений и самого поста
export interface PostImage {
  id: number;
  image: string;
}

export interface Post {
  id: number;
  title: string;
  slug: string; // Добавляем slug
  shortDescription: string;
  fullContent: string;
  images: PostImage[];
}

// Определяем пропсы для компонента PostCard
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragX, setDragX] = useState(0);

  const hasImages = post.images && post.images.length > 0;

  const nextSlide = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
  };
  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Останавливаем всплытие, чтобы не триггерить onClick карточки
    setIsDragging(true);
    setStartX(e.clientX);
    setDragX(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isDragging) return;
    setDragX(e.clientX - startX);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isDragging) return;
    
    const dragThreshold = 50;
    if (dragX > dragThreshold) {
      prevSlide();
    } else if (dragX < -dragThreshold) {
      nextSlide();
    } else {
        // Если не было свайпа, считаем это кликом и позволяем Link сработать
        // Для этого нужно будет обернуть все в Link и предотвратить
        // стандартное поведение Link при свайпе.
    }
    
    setIsDragging(false);
    setDragX(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Если был свайп, отменяем переход по ссылке
    if (Math.abs(dragX) > 10) { 
        e.preventDefault();
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isDragging) {
      setIsDragging(false);
      setDragX(0);
    }
  };
  
  // Добавим обработчики для тач-событий позже, если потребуется

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="border border-white rounded-3xl p-10 md:p-10 flex flex-col h-[420px] md:h-[480px] w-full cursor-pointer"
      onClick={handleClick}
    >
      <div 
        className="relative bg-[#303030] rounded-2xl w-full h-3/5 mb-6 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {hasImages ? (
          <>
            {post.images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={image.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Можно добавить индикаторы слайдера, если нужно */}
          </>
        ) : (
          <div className="w-full h-full bg-[#303030]"></div>
        )}
      </div>
      <h3 className="text-xl font-medium mb-3">{post.title}</h3>
      <p className="text-sm text-gray-300 overflow-hidden">
        {post.shortDescription}
      </p>
    </Link>
  );
};

export default PostCard; 
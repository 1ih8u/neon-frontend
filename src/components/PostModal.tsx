import React from 'react';
import type { Post } from './PostCard';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#1E1E1E] text-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие по клику внутри модалки
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-3xl"
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h2 className="text-3xl font-medium mb-6">{post.title}</h2>
        {/* Здесь можно добавить слайдер для изображений, если они есть */}
        <div className="prose prose-invert max-w-none">
          <p>{post.fullContent}</p>
        </div>
      </div>
    </div>
  );
};

export default PostModal; 
import React from 'react';

const PolicyPage: React.FC = () => {
  return (
    <div className="bg-[#161616] text-white min-h-screen py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <h1 className="text-3xl md:text-5xl font-medium mb-8 md:mb-12">
          Политика обработки данных
        </h1>
        <div className="prose prose-invert max-w-none">
          {/* Вы сможете вставить сюда свой текст */}
          <p>
            Здесь будет ваш текст о политике обработки персональных данных.
            Пожалуйста, предоставьте его, и я заменю этот блок.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage; 
import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import apiClient from '../services/api';

interface Testimonial {
  id: number;
  image: string;
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    apiClient.get('/api/testimonials/')
      .then(response => {
        setTestimonials(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Не удалось загрузить отзывы.');
        setLoading(false);
      });
  }, []);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector('div > div');
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 24; // Corresponds to space-x-6
        const scrollAmount = (cardWidth + gap) * Math.sign(scrollOffset);
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="bg-[#161616] text-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto px-[5%] md:px-[15%] mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-normal text-left">
          Отзывы наших клиентов
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide mb-8 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-6 px-[5%] md:px-[15%]">
          {loading && Array(4).fill(0).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-[216px] h-[288px] md:w-[360px] md:h-[480px] bg-[#303030] rounded-3xl animate-pulse"></div>
          ))}
          {error && <div className="text-red-500">{error}</div>}
          {!loading && !error && testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[216px] h-[288px] md:w-[360px] md:h-[480px] bg-[#303030] rounded-3xl overflow-hidden"
              aria-label={`Отзыв клиента ${testimonial.id}`}
            >
              <img src={testimonial.image} alt={`Отзыв ${testimonial.id}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto px-[5%] md:px-[15%]">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scroll(-1)}
            className="group border border-white rounded-full w-20 h-12 flex items-center justify-center hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all duration-300"
            aria-label="Прокрутить влево"
          >
            <FaArrowLeft className="text-white" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="group border border-white rounded-full w-20 h-12 flex items-center justify-center hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all duration-300"
            aria-label="Прокрутить вправо"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
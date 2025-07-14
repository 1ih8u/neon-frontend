import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';

interface Category {
  id: number;
  title: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Неоновые вывески",
    image: card1,
  },
  {
    id: 2,
    title: "Объемные буквы",
    image: card2,
  },
  {
    id: 3,
    title: "Таблички",
    image: card3,
  }
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle: string) => {
    navigate('/works', { state: { category: categoryTitle } });
  };

  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <h2 className="text-2xl md:text-5xl font-normal mb-8 md:mb-12 text-left">
          Чаще всего наши клиенты выбирают
        </h2>
        <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.title)}
              className="relative w-[288px] h-[330px] md:w-auto md:h-[440px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E000D7]/50 group-active:bg-[#E000D7]/60 transition-colors duration-300"></div>
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-normal transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                {category.title}
              </h3>
                <FaArrowRight className="text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 
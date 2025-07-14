import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import card4 from '../assets/card4.svg';
import card5 from '../assets/card5.svg';
import card6 from '../assets/card6.svg';

interface ServiceCategory {
  id: number;
  title: string;
  image: string;
}

const serviceCategories: ServiceCategory[] = [
  { id: 1, title: "Неоновые вывески", image: card1 },
  { id: 2, title: "Объемные буквы", image: card2 },
  { id: 3, title: "Световые кубы", image: card6 },
  { id: 4, title: "Таблички", image: card3 },
  { id: 5, title: "Печать", image: card5 },
  { id: 6, title: "Нестандартные изделия", image: card4 },
];

const ServiceCategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle: string) => {
    navigate('/works', { state: { category: categoryTitle } });
  };

  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <h2 className="text-3xl md:text-5xl font-normal mb-8 md:mb-12 text-left">Что мы делаем</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 justify-items-center md:justify-items-stretch">
          {serviceCategories.map((category) => (
            <div 
              onClick={() => handleCategoryClick(category.title)} 
              key={category.id} 
              className="md:w-full cursor-pointer"
            >
              <div className="relative w-[140px] h-[160px] md:w-auto md:h-[440px] rounded-3xl overflow-hidden group">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-[#E000D7]/50 group-active:bg-[#E000D7]/60 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 flex items-center justify-between">
                  <h3 className="text-base md:text-2xl font-normal transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    {category.title}
                  </h3>
                  <FaArrowRight className="text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection; 
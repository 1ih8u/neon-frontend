import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WorkCard from './WorkCard';
import apiClient from '../services/api';

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

interface Category {
  id: number;
  name: string;
  works: Work[];
}

const WorksMenu: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        setLoading(true);
        // Теперь загружаем категории, в которых уже есть работы
        const response = await apiClient.get('/api/categories/');
        setCategories(response.data);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить работы. Попробуйте позже.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  useEffect(() => {
    if (loading) {
      return; // Выходим, если данные еще загружаются
    }

    const categoryToScrollTo = location.state?.category;

    if (categoryToScrollTo) {
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(categoryToScrollTo);
        attempts += 1;
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          clearInterval(interval);
        } else if (attempts > 50) { // Предохранитель, чтобы не работать вечно (50 * 100ms = 5s)
          clearInterval(interval);
        }
      }, 100);
      
      // Очистка интервала при размонтировании компонента
      return () => clearInterval(interval);
    }
    
    // Оставляем логику для хэша, если она где-то еще используется
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [loading, location.state, location.hash]);

  if (loading) {
    return <div className="text-center text-white py-10">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }
  
  return (
    <section className=" text-white pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-12">
          {categories.map(category => (
            <a 
              key={category.id} 
              href={`#${category.name}`} 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(category.name)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-center px-6 py-3 rounded-full text-base font-normal transition-all border border-white whitespace-nowrap bg-transparent hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent"
            >
              {category.name}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {categories.map(category => (
            <div key={category.id} id={category.name}>
              <h2 className="text-2xl md:text-3xl font-medium mb-8">{category.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
                {category.works.map(work => (
                  <WorkCard key={work.id} work={work} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksMenu; 
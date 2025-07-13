import { Link } from 'react-router-dom';
import missionSvg from '../assets/mission.svg';

const MissionSection = () => {
  return (
    <section className="bg-[#161616] py-16 md:py-24 text-white">
      <div className="mx-auto px-[5%] md:px-[20%]">
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-12 md:gap-24">
          {/* Text Content */}
          <div className="w-full md:w-5/12 text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-6xl font-normal mb-6 md:mb-8 leading-tight">
              Наша цель — помогать бизнесу развиваться
            </h2>
            <p className="text-base md:text-xl font-normal mb-6 md:mb-8">
              Мы создаем вывески, которые отражают концепцию вашего бизнеса.
            </p>
            <p className="text-base md:text-xl font-normal mb-10 md:mb-12">
              Наше производство оснащено последними технологиями, что гарантирует высокое качество изготовления всех рекламных материалов.
            </p>
            <Link
              to="/works"
              className="bg-white text-black rounded-full px-6 py-2 font-normal hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:text-white transition-all w-full md:w-[190px] h-[50px] flex justify-center items-center"
            >
              Наши работы
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-6/12 order-1 md:order-2">
            <img
              src={missionSvg}
              alt="Неоновая вывеска в виде крыльев"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 
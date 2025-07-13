import heroBackground from '../assets/banner_about.svg';

function AboutHero() {
  return (
    <section className="w-full overflow-hidden bg-[#161616]">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <div className="relative flex flex-col md:flex-row items-center pt-0 pb-12 md:py-12 md:h-[650px]">
          {/* Image */}
          <div className="w-full md:w-8/12 h-[250px] md:h-full md:absolute md:top-0 md:right-0 z-0 order-1 md:order-2">
            <div
              className="h-full w-full bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${heroBackground})`,
              }}
            ></div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 w-full md:w-8/12 text-left order-2 md:order-1 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-[6rem] font-medium mb-4 md:mb-6 leading-tight">
              О нас и нашей
              <br /> мастерской
            </h1>
            <p className="text-base md:text-2xl font-normal ">
              Наша специализация – изготовление качественных и привлекательных
              вывесок, которые станут мощным инструментом для привлечения новых
              клиентов, и узнаваемости вашего бренда.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero; 
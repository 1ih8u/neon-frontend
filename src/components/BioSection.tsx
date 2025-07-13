import bioFoto from '../assets/bio_foto.svg';

const BioSection = () => {
  const teamRoles = [
    'монтажник',
    'фрезеровщик',
    'маркетолог',
    'дизайнер',
    'макетчик по сборке вывесок',
    'технический специалист',
  ];

  return (
    <section className="bg-[#161616] pb-16 pt-20 md:pb-24 md:pt-32 text-white">
      <div className="mx-auto px-[5%] md:px-[20%]">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-24">
          {/* Image */}
          <div className="w-[288px] md:w-5/12 flex-shrink-0">
            <img
              src={bioFoto}
              alt="Владислав Борогодов"
              className="rounded-3xl w-full h-[360px] md:h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-6xl font-regular mb-4 md:mb-8 text-left">
              Меня зовут Владислав Богородов
            </h2>
            <div className="font-normal text-left">
              <p className="text-base md:text-xl mb-6">
                Я основатель и главный мастер.
              </p>
              <p className="text-base md:text-xl mb-4">
                Моя команда – профессионалы с большим опытом работы:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-xl">
                {teamRoles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection; 
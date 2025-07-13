import letter1 from '../assets/letter1.svg';
import letter2 from '../assets/letter2.svg';

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`border border-white rounded-3xl p-6 md:py-[60px] md:px-[40px] ${className}`}>
    {children}
  </div>
);

const VolumetricLettersSection = () => {
  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[20%]">
        <h2 className="text-2xl md:text-5xl font-normal mb-6 md:mb-12 text-left">
          Объемные буквы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-3 md:gap-6">
            <Card>
              <h3 className="text-xl md:text-2xl font-normal mb-4">Варианты световых букв</h3>
              <p className="text-base md:text-xl">
                Мы предлагаем 3 оптимальных варианта свечения для объемных букв: световое лицо, контражурная подсветка, или оба эти свечения вместе.
              </p>
            </Card>
            <div className="rounded-3xl overflow-hidden">
              <img src={letter1} alt="Restaurant SVOBY" className="w-full h-full object-cover" />
            </div>
            <Card>
              <h3 className="text-xl md:text-2xl font-normal mb-4">Контражурная подсветка</h3>
              <p className="text-base md:text-xl">
                Это подсветка контура за буквами (сзади). Данный вариант вывески смотрится выигрышно на любом фоне, фасаде здания и в любое время суток. Можно комбинировать со световым лицом для усиления эффекта.
              </p>
            </Card>
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-3 md:gap-6">
             <div className="bg-gradient-to-r from-[#E601C9] to-[#D504D8] rounded-3xl p-6 md:py-[60px] md:px-10 flex items-center md:order-1 order-2">
              <p className="text-base md:text-xl">
                Чаще всего для бизнеса выбирают именно объемные буквы, которые хорошо видны издалека и заметны в темное время суток. При создании световых букв вы можете выбрать любой шрифт, цвет, размер и форму.
              </p>
            </div>
            <Card className="md:order-2 order-1">
               <h3 className="text-xl md:text-2xl font-normal mb-4">Световое лицо</h3>
               <p className="text-base md:text-xl">
                 Это объемные буквы, у которых подсвечивается лицевая поверхность. Чаще используются на улице, но можно и внутри помещения. Подходят для разных типов бизнеса: от ресторанов и магазинов до офисов и ТЦ.
               </p>
            </Card>
            <div className="rounded-3xl overflow-hidden md:order-3 order-3">
              <img src={letter2} alt="FLOS" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolumetricLettersSection; 
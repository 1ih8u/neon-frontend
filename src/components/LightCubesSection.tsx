import cube from '../assets/cube.svg';
import cube2 from '../assets/cube2.svg';
import cube3 from '../assets/cube3.svg';

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`border border-white rounded-3xl p-4 md:py-[60px] md:px-[40px] ${className}`}>
    {children}
  </div>
);

const LightCubesSection = () => {
  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[20%]">
        <h2 className="text-2xl md:text-5xl font-normal mb-6 md:mb-12 text-left">
          Световые кубы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 md:gap-6">
          {/* Row 1 */}
          <div className="rounded-3xl overflow-hidden md:col-span-3">
            <img src={cube} alt="Лайтбокс" className="w-full h-full object-cover" />
          </div>
          <Card className="md:col-span-7">
            <h3 className="text-xl md:text-2xl font-normal mb-4">Лайтбокс</h3>
            <p className="text-sm md:text-lg">
              Лайтбоксы или световые кубы – это панели с внутренней подсветкой. Отлично подходят, когда необходимо разместить большое количество текста или логотип с мелкими деталями.
            </p>
            <p className="text-sm md:text-lg mt-4">
              Изготавливаем лайтбоксы для разных целей: интерьерные и уличные, односторонние и двусторонние, напольные, настенные, подвесные.
              </p>
            </Card>

          {/* Row 2 */}
          <Card className="md:col-span-7">
            <h3 className="text-xl md:text-2xl font-normal mb-4">Панель-кронштейн</h3>
            <p className="text-sm md:text-lg">
              Эти световые панели работают как указатели, могут включать в себя название компании, логотип и другие сведения. Отличное решение для тех, кто хочет, чтобы рекламу было видно с двух сторон.
            </p>
            <p className="text-sm md:text-lg mt-4">
              Изготавливаем разные типы: односторонние, двусторонние, с подсветкой, без подсветки. Их монтируют на стенах и фасадах зданий.
              </p>
            </Card>
          <div className="rounded-3xl overflow-hidden md:col-span-3">
            <img src={cube2} alt="Панель-кронштейн" className="w-full h-full object-cover" />
          </div>

          {/* Row 3 */}
          <div className="rounded-3xl overflow-hidden md:col-span-3">
            <img src={cube3} alt="Короб с инкрустацией" className="w-full h-full object-cover" />
          </div>
          <Card className="md:col-span-7">
            <h3 className="text-xl md:text-2xl font-normal mb-4">Короб с инкрустацией</h3>
            <p className="text-sm md:text-lg">
              Это лайтбокс, который не требует использования светового фона, поскольку все элементы на нем (надписи и логотипы) подсвечиваются изнутри.
            </p>
            <p className="text-sm md:text-lg mt-4">
              Идеально подходит для фасадного размещения и на козырьках зданий, а также для ТЦ.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LightCubesSection; 
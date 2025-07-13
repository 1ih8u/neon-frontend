import printImage from '../assets/print.svg'; 
import print2Image from '../assets/print2.svg'; 

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`border border-white rounded-3xl p-6 md:py-[60px] md:px-[40px] ${className}`}>
    {children}
  </div>
);

const PrintingSection = () => {
  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[20%]">
        <h2 className="text-2xl md:text-5xl font-normal mb-6 md:mb-12 text-left">
          Печатная продукция
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {/* Card "Печать" - Mobile order 2, Desktop order 1 */}
            <Card className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-normal mb-4">Печать</h3>
              <p className="text-sm md:text-lg">
                Также мы предоставляем услуги широкоформатной печати и нарезки наклеек с использованием современного оборудования и высокого качества печати.
              </p>
              <p className="text-sm md:text-lg mt-4">
                Делаем ламинацию пленки для защиты от условий среды и внешних повреждений.
              </p>
            </Card>
            
            {/* Image "Печать" - Mobile order 1, Desktop order 2 */}
            <div className="rounded-3xl overflow-hidden order-1 md:order-2">
                <img src={printImage} alt="Печать" className="w-full h-full object-cover rounded-3xl" />
            </div>

            {/* Image "Баннер" - Mobile order 3, Desktop order 3 */}
            <div className="rounded-3xl overflow-hidden order-3">
                <img src={print2Image} alt="Баннер" className="w-full h-full object-cover rounded-3xl" />
          </div>

            {/* Card "Баннер" - Mobile order 4, Desktop order 4 */}
            <Card className="order-4">
              <h3 className="text-xl md:text-2xl font-normal mb-4">Баннер</h3>
              <p className="text-sm md:text-lg">
                Баннер выглядит как полотно с рекламным объявлением. Его устанавливают на витринах, крышах и фасадах зданий, монтируют на щит билборда. Размеры баннера не ограничены.
              </p>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default PrintingSection; 
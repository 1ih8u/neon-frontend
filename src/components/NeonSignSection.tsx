import neonSignImage from '../assets/neon_sign.svg';

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`border border-white rounded-3xl p-6 md:py-[60px] md:px-10 ${className}`}
  >
    {children}
  </div>
);

const NeonSignSection = () => {
  return (
    <section id="neon-sign" className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[20%]">
        <h2 className="text-2xl md:text-5xl font-normal mb-6 md:mb-12 text-left">
          Неоновая вывеска
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-3 md:gap-6">
            <Card className="flex-1 order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
              Гибкий неон
            </h3>
              <div className="space-y-4">
                <p className="text-base md:text-xl">
              При создании неоновых вывесок используется гибкий неон, который
              позволяет делать различные формы и изгибы.
            </p>
                <p className="text-base md:text-xl">
              Сложность заключается в том, что неон требует аккуратного
              обращения и качественной установки, чтобы его яркость и красота
              сохранились долгое время. Для максимальной эффективности рекламы
              важно также правильно подобрать цвета и шрифты.
            </p>
              </div>
          </Card>
            <div className="rounded-3xl overflow-hidden order-1 md:order-2">
              <img
                src={neonSignImage}
                alt="Неоновая вывеска"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="bg-gradient-to-r from-[#E601C9] to-[#D504D8] rounded-3xl p-6 md:py-[60px] md:px-10">
              <p className="text-base md:text-xl">
              Это идеальный вариант для парикмахерской, салона красоты,
              цветочного магазина, кафе, кофейни, табачного магазина, вейп-шопа
              и др.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <Card>
                <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
              Яркость
            </h3>
                <p className="text-base md:text-xl">
              Благодаря насыщенным цветам ваша реклама будет бросаться в глаза и
              запоминаться.
            </p>
          </Card>
          <Card>
                <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
              Долговечность
            </h3>
                <p className="text-base md:text-xl">
              Высокая стойкость к влаге, ультрафиолету и любым механическим
              повреждениям.
            </p>
          </Card>
            </div>
            <Card>
              <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4">
                Высокая видимость
              </h3>
              <p className="text-base md:text-xl">
                Неоновые вывески отлично привлекают внимание на больших
                расстояниях и в любое время суток, даже при плохой освещенности.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeonSignSection; 
import designImage from '../assets/design.svg'; 

const DesignSection = () => (
  <section id="design" className="bg-[#161616] text-white pt-16 md:pt-24">
    <div className="mx-auto px-[5%] md:px-[25%]">
      <div className="border border-white rounded-3xl p-6 md:px-[10%] md:py-[120px]">
          <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                  <h2 className="hidden md:block text-4xl md:text-5xl font-normal mb-12 leading-tight">Дизайн<br/>макета</h2>
                  <p className="text-sm md:text-lg">
                      Мы предлагаем бесплатное создание дизайна макета вывески.
                  </p>
                  <p className="text-sm md:text-lg mt-4">
                      Вместе с вами внимательно прорабатываем каждый этап макета и вносим изменения по вашему желанию.
                  </p>
              </div>
              <div className="hidden md:block md:w-2/3">
                  <img src={designImage} alt="Дизайн макета" className="w-full max-w-md mx-auto rounded-3xl" />
              </div>
          </div>
      </div>
      
      {/* Mobile Only Image and Title */}
      <img src={designImage} alt="Дизайн макета" className="w-full h-64 object-cover rounded-3xl mt-6 md:hidden" />
      <h2 className="text-2xl font-normal mt-6 text-left md:hidden">Дизайн<br/>макета</h2>
    </div>
  </section>
);

export default DesignSection; 
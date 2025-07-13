import contactBg from '../assets/contakt.svg';

const ContactSection = () => {
  return (
    <section className="bg-[#161616] py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[15%] flex justify-center">
        <div 
          className="relative w-[320px] md:w-full h-[560px] md:h-[600px] bg-cover bg-center rounded-3xl flex flex-col justify-center items-center text-center p-6 md:p-8"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-2xl md:text-5xl font-normal mb-8 leading-tight">
              Хотите привлечь внимание клиентов и выделиться среди конкурентов?
            </h2>
            <button className="bg-transparent text-white border border-white rounded-full px-12 md:px-12 py-3 md:py-4 font-medium hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
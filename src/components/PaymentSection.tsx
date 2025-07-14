import paymentImage from '../assets/payment.svg';

const PaymentSection = () => {
  return (
    // Temporarily hidden on mobile
    <section id="payment" className="bg-[#161616] text-white py-16 md:py-24 hidden md:block">
      <div className="mx-auto px-[5%] md:px-[25%]">
        {/* --- Desktop Layout --- */}
        <div className="hidden md:block border border-white rounded-3xl p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-normal mb-12 leading-tight">Оплата</h2>
                    <div className="space-y-4 text-lg">
                        <p>Для физических лиц: онлайн-оплата по QR-коду или наличными.</p>
                        <p>Для юридических лиц: перевод на расчетный счет по реквизитам.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={paymentImage} alt="Оплата" className="w-auto h-auto max-h-80 object-contain rounded-3xl" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection; 
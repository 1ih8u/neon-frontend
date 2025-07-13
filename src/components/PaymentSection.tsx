import React from 'react';
import paymentImage from '../assets/payment.svg';

const PaymentSection = () => {
  return (
    // Temporarily hidden on mobile
    <section id="payment" className="bg-[#161616] text-white py-16 md:py-24 hidden md:block">
      <div className="mx-auto px-[5%] md:px-[25%]">
        <div className="border border-white rounded-3xl md:pt-[60px] md:pb-[82px] md:px-[10%]">
            <div className="flex flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-normal mb-12 leading-tight">Оплата</h2>
                    <div className="space-y-4 text-lg">
                      <p>Для физических лиц:<br/>перевод на карту, оплата наличными.</p>
                      <p>Для юридических лиц:<br/>перевод на расчетный счет по реквизитам.</p>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <img src={paymentImage} alt="Оплата" className="w-full max-w-xs sm:max-w-sm lg:w-[360px] lg:h-[320px] object-cover rounded-3xl" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection; 
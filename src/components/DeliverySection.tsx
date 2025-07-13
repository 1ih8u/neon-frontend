import React from 'react';
import deliveryImage from '../assets/delivery.svg';

const DeliverySection = () => {
  return (
    <section id="delivery" className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[20%]">
        
        {/* --- Mobile Header --- */}
        <div className="md:hidden">
            <h2 className="text-2xl font-normal mb-3 text-left">Доставка</h2>
            <div className="rounded-3xl overflow-hidden mb-3">
                <img src={deliveryImage} alt="Доставка" className="w-full h-full object-cover"/>
            </div>
            <div className="rounded-3xl p-6 flex flex-col justify-center text-left bg-gradient-to-b from-[#E601C9] to-[#9C07F5] mb-3">
                <h3 className="text-lg font-normal mb-4">При заказе услуги Монтаж – доставка бесплатно</h3>
                <p className="text-sm">Благодаря нашей внимательной и надежной системе упаковки, за всё время нашей деятельности не было ни одного случая, когда вывеска была получена в поврежденном состоянии.</p>
            </div>
        </div>

        <h2 className="hidden md:block text-2xl md:text-5xl font-normal mb-6 md:mb-12 text-left">Доставка</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
          {/* Card 1: Самовывоз */}
          <div className="border border-white rounded-3xl p-6 md:pt-[60px] md:pb-[82px] md:px-10 h-full">
            <h3 className="text-lg md:text-xl font-normal mb-6">Самовывоз</h3>
            <div className="space-y-4 text-sm md:text-lg">
              <p>По адресу:<br/>Московская обл., г. Подольск, Гаражный проезд, 24.</p>
              <p>Время работы:<br/>пн-пт с 10:00 до 19:00.</p>
              <p>Дата и время самовывоза уточняется по телефону<br/>8(952)-981-39-98<br/>или в WhatsApp<br/>8(961)-303-78-08.</p>
            </div>
          </div>

          {/* Card 2: Службы доставки */}
          <div className="border border-white rounded-3xl p-6 md:pt-[60px] md:pb-[82px] md:px-10 h-full">
            <h3 className="text-lg md:text-xl font-normal mb-6">Службы доставки</h3>
            <div className="space-y-4 text-sm md:text-lg">
              <p>Перед отправкой заказа производится тщательная упаковка, все заказы застрахованы.</p>
              <p>По желанию вы можете выбрать: CDEK, Boxberry, Почта России.</p>
              <p>Сроки доставки:<br/>от 2 до 7 дней, зависит от региона.</p>
            </div>
          </div>

          {/* Card 3: Курьером */}
          <div className="border border-white rounded-3xl p-6 md:pt-[60px] md:pb-[82px] md:px-10 h-full">
            <h3 className="text-lg md:text-xl font-normal mb-6">Курьером</h3>
            <div className="space-y-4 text-sm md:text-lg">
                <p>Вы получаете фото заказа у курьера в машине, а также уведомление о том, что заказ отправлен.</p>
                <p>Доставка Яндекс по Москве и Московской области курьером до указанного адреса.</p>
                <p>Сроки доставки:<br/>по готовности заказа в удобное для вас время.</p>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
            <div className="rounded-3xl overflow-hidden md:col-span-1">
                <img src={deliveryImage} alt="Доставка" className="w-full h-full object-cover"/>
            </div>
            <div className="rounded-3xl p-10 flex flex-col justify-center text-left md:col-span-2 bg-gradient-to-b from-[#E601C9] to-[#9C07F5]">
                <h3 className="text-xl md:text-2xl font-normal mb-4">При заказе услуги Монтаж – доставка бесплатно</h3>
                <p className="text-sm md:text-lg">Благодаря нашей внимательной и надежной системе упаковки, за всё время нашей деятельности не было ни одного случая, когда вывеска была получена в поврежденном состоянии.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection; 
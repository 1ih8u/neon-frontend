import { FaWhatsapp, FaTelegramPlane, FaViber } from 'react-icons/fa';

function ContactDetails() {
    return (
        <section className="bg-[#161616] text-white pt-8 md:pt-12 pb-16 md:pb-24">
            <div className="mx-auto px-[5%] md:px-[15%]">
                <div className="w-full">
                    <h2 className="text-3xl font-medium mb-8">Контакты</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="border border-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-2">Адрес</h3>
                            <p className="text-white/70">Московская обл., г. Подольск, Гаражный проезд, д. 2</p>
                        </div>
                        <div className="border border-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-2">Часы работы</h3>
                            <p className="text-white/70">Понедельник - пятница, с 10:00 до 19:00</p>
                        </div>
                        <div className="border border-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-2">Связаться с нами</h3>
                            <p className="text-white/70">Телефон или WhatsApp: +7 952 981-39-98</p>
                        </div>
                        <div className="border border-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-2">Наши соцсети</h3>
                            <div className="flex gap-4 text-2xl">
                                <FaWhatsapp className="hover:text-purple-400 cursor-pointer" />
                                <FaTelegramPlane className="hover:text-purple-400 cursor-pointer" />
                                <FaViber className="hover:text-purple-400 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactDetails; 
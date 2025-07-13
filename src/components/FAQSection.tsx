import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    { question: "Неоновая вывеска это опасно?", answer: "Конечно нет. Все наши вывески из качественных экологически чистых материалов. Не содержат внутри ртути или газа (в отличии от стеклянного неона). Имеют повышенную степень прочности. Сам неон имеет пониженное напряжение 12 Вольт, которое исключает возможность возгорания." },
    { question: "Какой срок службы неоновой вывески?", answer: "Срок службы вывесок из гибкого неона 50000 часов в работающем режиме. Это больше 5 лет." },
    { question: "Даёте ли вы гарантию?", answer: "Да, мы даем гарантию на наши изделия в течении 12 месяцев." },
    { question: "Делаете ли вы изделия по индивидуальному дизайну?", answer: "Да, мы изготавливаем любые вывески. Любой рисунок, текст, идею, даже фотографию мы можем исполнить в виде неоновой вывески. Оставьте заявку или свяжитесь с нами для консультации." },
    { question: "Как узнать точную стоимость вывески?", answer: "Для расчета точной стоимости свяжитесь с нами любым удобным для вас способом: Оставьте заявку на сайте, напишите на WhatsApp, Telegram, VK, e-mail." },
    { question: "Какой срок изготовления вывески?", answer: "Каждое наше изделие это уникальное изделие, которое собирается мастером вручную. Стандартный срок изготовления вывески от 3 до 10 дней. Но, если у вас горят сроки, то мы можем рассчитать непосредственно перед оформлением заказа." },
    { question: "Как подключаются вывески? И сколько они потребляют электричества?", answer: "Наши вывески работают от сети 220V с помощью блока питания (сетевого адаптера). Блок питания идет в комплекте с каждой вывеской. Наши вывески отличаются экономичностью и экологичностью по потреблению электричества. Расход электричества совсем небольшой, от 20 Вт." },
    { question: "На что крепится вывеска?", answer: "Все вывески крепятся с помощью дистанционных держателей. Только для этого нужно просверлить 2-4 отверстия в стене. Не хотите портить стены? Можно использовать подставку. Монтаж совсем несложный, поэтому вы можете повесить ее самостоятельно." },
    { question: "Есть ли монтаж, платно ли это?", answer: "Да. Монтаж (установка) - дополнительная услуга. У нас есть своя бригада монтажников, которая состоит из профессионалов." },
];

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ item, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border border-white rounded-3xl overflow-hidden">
            <button
                className="w-full flex items-center text-left p-6 gap-4"
                onClick={onClick}
            >
                <span>{isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}</span>
                <span className="text-lg font-medium">{item.question}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-6 text-white/70">
                    <p>{item.answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#161616] text-white py-16 md:py-24">
            <div className="mx-auto px-[5%] md:px-[15%]">
                <div className="flex flex-col gap-4">
                    {faqData.map((item, index: number) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection; 
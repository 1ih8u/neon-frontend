import { FiPaperclip } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

function ContactForm() {
    return (
        <section className="bg-[#161616] text-white pt-16 md:pt-24 pb-8 md:pb-12">
            <div className="mx-auto px-[5%] md:px-[30%]">
                <div className="md:border border-white rounded-3xl md:py-[80px] md:flex md:justify-center">
                    <div className="w-full md:max-w-[600px]">
                        <h2 className="text-3xl font-medium mb-2">Форма обратной связи</h2>
                        <p className="text-white/70 mb-8">Оставьте ваши контактные данные, и мы свяжемся с вами, чтобы обсудить все детали вашего заказа. Вы также можете прикрепить к сообщению файлы с фотографиями, или просто указать ваш номер телефона, и мы свяжемся с вами в мессенджере.</p>
                        <form className="flex flex-col gap-6">
                            <input type="text" placeholder="Ваше имя*" className="bg-[#2D2D2D] p-4 rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" />
                            <input type="tel" placeholder="Номер телефона*" className="bg-[#2D2D2D] p-4 rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" />
                            <textarea placeholder="Ваши пожелания: расскажите о вашей идее, какую вывеску хотите, какого размера, где будет располагаться, на когда нужна вывеска и другие важные для вас детали." className="bg-[#2D2D2D] p-4 rounded-lg h-32 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"></textarea>

                            <div className="border md:border-none border-white/30 rounded-xl p-4 md:p-0">
                                <p className="mb-3">Предпочтительный способ связи</p>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="sr-only peer" />
                                        <span className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center transition-colors group-hover:border-[#E000D7] peer-checked:bg-[#E000D7] peer-checked:border-[#E000D7] peer-checked:hover:bg-[#812A7E] peer-checked:hover:border-[#812A7E]">
                                            <FaCheck className="text-white text-sm opacity-0 peer-checked:opacity-100" />
                                        </span>
                                        <span>Звонок</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="sr-only peer" />
                                        <span className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center transition-colors group-hover:border-[#E000D7] peer-checked:bg-[#E000D7] peer-checked:border-[#E000D7] peer-checked:hover:bg-[#812A7E] peer-checked:hover:border-[#812A7E]">
                                            <FaCheck className="text-white text-sm opacity-0 peer-checked:opacity-100" />
                                        </span>
                                        <span>WhatsApp</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="sr-only peer" />
                                        <span className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center transition-colors group-hover:border-[#E000D7] peer-checked:bg-[#E000D7] peer-checked:border-[#E000D7] peer-checked:hover:bg-[#812A7E] peer-checked:hover:border-[#812A7E]">
                                            <FaCheck className="text-white text-sm opacity-0 peer-checked:opacity-100" />
                                        </span>
                                        <span>Telegram</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="border md:border-none border-white/30 rounded-xl p-4 md:p-0">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <FiPaperclip />
                                    <span>Прикрепить файл</span>
                                    <input type="file" className="hidden" />
                                </label>
                            </div>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="sr-only peer" />
                                <span className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center transition-colors group-hover:border-[#E000D7] peer-checked:bg-[#E000D7] peer-checked:border-[#E000D7] peer-checked:hover:bg-[#812A7E] peer-checked:hover:border-[#812A7E]">
                                    <FaCheck className="text-white text-sm opacity-0 peer-checked:opacity-100" />
                                </span>
                                <span>Я согласен с <a href="#" className="text-[#F077EB] hover:underline">Политикой обработки данных</a></span>
                            </label>
                            <button type="submit" className="bg-transparent text-white border border-white font-bold p-4 rounded-full hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all w-full md:w-auto md:self-start px-12">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm; 
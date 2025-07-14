const TABS = [
  { name: 'Дизайн', id: 'design' },
  { name: 'Монтаж', id: 'montage' },
  { name: 'Доставка', id: 'delivery' },
  { name: 'Оплата', id: 'payment' },
  { name: 'Сроки выполнения', id: 'timeline' },
  { name: 'Гарантии', id: 'warranty' },
];

const ClientNav = () => (
  <section className="bg-[#161616] text-white pt-16 md:pt-24">
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
        {TABS.map(tab => (
          <a
            key={tab.name}
            href={`#${tab.id}`}
            className={`text-center px-6 py-3 rounded-full text-base font-normal transition-all border border-white whitespace-nowrap bg-transparent hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent`}
          >
            {tab.name}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ClientNav; 
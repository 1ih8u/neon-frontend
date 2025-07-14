interface WorkflowStep {
  id: string;
  title: string;
  description: string;
}

function WorkflowSection() {
  const workflowSteps: WorkflowStep[] = [
    {
      id: "01",
      title: "Заявка",
      description: "Оставьте заявку на сайте или свяжитесь с нами удобным способом."
    },
    {
      id: "02",
      title: "Дизайн",
      description: "Составляем техническое задание, согласуем макет, заключаем договор."
    },
    {
      id: "03",
      title: "Изготовление",
      description: "Отправляем макет в производство, срок выполнения 3-10 дней."
    },
    {
      id: "04",
      title: "Доставка",
      description: "Отправляем вам заказ, при желании мы также осуществляем монтаж."
    }
  ];

  return (
    <section className="py-16 bg-[#161616] text-white">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <h2 className="text-3xl md:text-5xl font-normal mb-10 md:mb-12 leading-tight text-left">
          Как мы работаем и достигаем<br className="hidden md:block" /> лучших результатов для вас
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.id}
              className="relative border border-white rounded-3xl p-8 h-52 md:h-72 overflow-hidden"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-normal mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{step.description}</p>
              </div>
              <div className="absolute -bottom-8 md:-bottom-12 right-2 md:right-auto md:left-1/2 md:-translate-x-1/2 pointer-events-none">
                <span
                  className="font-bold leading-none text-[110px] md:text-[170px] text-white"
                  style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                >
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowSection; 
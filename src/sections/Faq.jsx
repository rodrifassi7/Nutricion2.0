export const Faq = () => {
  const faqs = [
    {
      question: "¿Qué tipo de comidas ofrecen?",
      answer:
        "Ofrecemos una variedad de comidas saludables y equilibradas, elaboradas con ingredientes frescos, diseñada por nuestra nutricionista.",
    },
    {
      question: "¿Hacen entregas a domicilio?",
      answer:
        "Sí, realizamos entregas a domicilio. Contactate por Whatsapp o llamada para obtener más información.",
    },

    {
      question: "¿Tienen opciones vegetarianas o veganas?",
      answer:
        "Sí, ofrecemos varias opciones vegetarianas y veganas. Puedes ver el menú para más detalles.",
    },
    {
      question: "¿Cómo puedo contactar con el servicio al cliente?",
      answer:
        "Puedes contactarnos a través de Whatsapp o llamada",
    },
    {
      question: "¿Donde se encuentran ubicados?",
      answer:
        "Nos encontramos en Paraguay 55, Trelew",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className=" text-center max-w-2xl text-4xl xl:text-6xl font-custom tracking-tight leading-none text-oransh   justify-self-center pt-20 pb-10">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-sm hover:shadow-lg  hover:bg-sweetoransh delay-150 transition-shadow duration-300"
          >
            <h2 className="text-lg font-bold">{faq.question}</h2>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

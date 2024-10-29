export const Faq = () => {
  const faqs = [
    {
      question: "¿Qué tipo de comidas ofrecen?",
      answer:
        "Ofrecemos una variedad de comidas saludables y equilibradas, elaboradas con ingredientes frescos y de temporada.",
    },
    {
      question: "¿Hacen entregas a domicilio?",
      answer:
        "Sí, realizamos entregas a domicilio en ciertas áreas. Puedes verificar si tu ubicación está disponible en la sección de entrega de nuestro sitio.",
    },
    {
      question: "¿Puedo personalizar mi pedido?",
      answer:
        "¡Por supuesto! Puedes personalizar tu pedido según tus preferencias dietéticas y restricciones alimentarias.",
    },
    {
      question: "¿Cuál es el tiempo de preparación para los pedidos?",
      answer:
        "Generalmente, el tiempo de preparación es de 30 a 45 minutos, dependiendo de la cantidad de pedidos que tengamos.",
    },
    {
      question: "¿Tienen opciones vegetarianas o veganas?",
      answer:
        "Sí, ofrecemos varias opciones vegetarianas y veganas. Puedes ver el menú para más detalles.",
    },
    {
      question: "¿Cómo puedo contactar con el servicio al cliente?",
      answer:
        "Puedes contactarnos a través de nuestro formulario de contacto en la página web o enviarnos un correo electrónico a soporte@nutricionprofesional.com.",
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

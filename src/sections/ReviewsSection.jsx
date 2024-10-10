import { Resena } from "../components/Resena";


const ReviewsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Descubre lo que nuestros clientes opinan sobre nosotros. Nos enorgullece ofrecer la mejor experiencia y calidad.
        </p>
        {/* Integración del Widget de Elfsight */}
        <div className="flex justify-center">
         <Resena/>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

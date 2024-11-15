export const MenuPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="my-10 max-w-2xl mx-auto text-4xl xl:text-6xl font-custom tracking-tight leading-none text-oransh">
        Menú Semanal
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-lg ">
        ¡Presiona el botón para consultar nuestro menú semanal actualizado!
        Cada semana te ofrecemos nuevas opciones saludables y deliciosas.
      </p>
      <a
        href="https://drive.google.com/drive/folders/1vQXrF0w-y7filq9eSfQ4tQFClppe4f4d?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-oransh text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-colors"
      >
        Ver Menú Semanal
      </a>
    </div>
  );
};


import menuImage from "../assets/images/menu.jpg";


export const MenuPage = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Menú Semanal</h1>
          <p className="text-lg text-gray-600 mb-6 text-center max-w-lg">
            Consulta nuestro menú saludable, especialmente diseñado para una nutrición balanceada.
            Recordá que actualizamos el menú cada semana para ofrecerte más opciones.
          </p>
          <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
            <img
              src={menuImage}
              alt="Menu Semanal"
              className="w-full h-auto object-cover"
            />
          </div>
          <a
            href={menuImage}
            download
            className="mt-6 px-6 py-3 bg-oransh text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-colors"
          >
            Descargar Menú
          </a>
        </div>
      );
    };

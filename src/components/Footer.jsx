import { getYear } from "../helpers/date";
import igpng from "../assets/icons/igpng.png";
import facebook from "../assets/icons/facebook.png";
import whatsapp from "../assets/icons/whatsapp.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-grei text-white md:px-28 px-7">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-4">
        <div className="md:flex md:justify-center flex justify-center mt-2">
          <div className="grid grid-cols-2 gap-8 sm:gap-36 sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
                Conectemos
              </h2>
              <ul className="flex  gap-x-4 text-gray-400 font-medium">
                <li className="self-center hover:scale-110">
                  <a
                    href="https://www.instagram.com/nutricionprofesionaltw/#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={igpng} alt="Instagram" className="w-8 h-8 gap-2" />
                  </a>
                </li>
                <li className="self-center hover:scale-110">
                  <a
                    href="https://www.facebook.com/nutricionprofesionaltw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="Facebook" className="w-8 h-8 gap-2" />
                  </a>
                </li>
                <li className="self-center hover:scale-110">
                  <a
                    href="https://wa.me/542804385269"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={whatsapp} alt="Whatsapp" className="w-8 h-8 gap-2" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">
                Recursos
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-2">
                  <NavLink
                    to="/about"
                    className="hover:underline hover:text-[#399f3e]"
                  >
                    Preguntas Frecuentes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="hover:underline hover:text-[#399f3e]"
                  >
                    Nosotros
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-700 sm:mx-auto lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-400 sm:text-center">
            © {getYear()}{" "}
            <span to="/" className="hover:underline hover:text-[#e9772a]">
              Nutricion Profesional™
            </span>
            . Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { getYear } from "../helpers/date";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-stone-100 ">
      <div className="mx-auto  w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse pl-7"
        >
          <img
            src={Logo}
            className="h-12 rounded-full"
            alt="Nutricion Profesional Logo"
          />
        </Link>
        <div className="md:flex md:justify-center flex justify-center">
          <div className="mb-6 md:mb-0 flex align-center"></div>
          <div className="grid grid-cols-2 gap-8 sm:gap-36 sm:grid-cols-2">
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-400">
                Conectemos
              </h2>
              <ul className="text-gray-500 dark:text-gray-700 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Recursos
              </h2>
              <ul className="text-gray-900  font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    no se
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {getYear()}{" "}
            <a href="" className="hover:underline">
              Nutricion Profesional™
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

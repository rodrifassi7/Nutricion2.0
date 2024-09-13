import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { getYear } from "../helpers/date";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-stone-100 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
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
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                ???????
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    ????
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    ????
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-400">
                Seguinos
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
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Link, NavLink } from "react-router-dom";
import { useMenuToggle } from "../hooks/useMenuToggle";

export const Navbar = () => {
  const { isMenuOpen, handleClick } = useMenuToggle();

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>

        {/* Mostrar ul en pantallas grandes */}
        <div className="hidden lg:flex flex-1 text-center px-7 pt-1 justify-end">
          <ul className="flex  space-x-8">
            <li>
              <NavLink
                to={"/"}
                className="text-gray-900 dark:text-white hover:text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="text-gray-900 dark:text-white hover:text-blue-500"
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className="text-gray-900 dark:text-white hover:text-blue-500"
              >
                Productos
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mostrar botón en pantallas pequeñas */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {isMenuOpen && (
          <div className="lg:hidden w-full">
            <ul className="flex flex-col space-y-2 p-4 text-center">
              <li>
                <NavLink
                  to={"/"}
                  className="block text-gray-900 dark:text-white hover:text-blue-500"
                  onClick={handleClick} // Cierra el menú cuando se hace clic en un enlace
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className="block text-gray-900 dark:text-white hover:text-blue-500"
                  onClick={handleClick} // Cierra el menú cuando se hace clic en un enlace
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products"}
                  className="block text-gray-900 dark:text-white hover:text-blue-500"
                  onClick={handleClick} // Cierra el menú cuando se hace clic en un enlace
                >
                  Productos
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

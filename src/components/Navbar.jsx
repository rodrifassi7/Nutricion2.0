import { Link, NavLink } from "react-router-dom";
import { useMenuToggle } from "../hooks/useMenuToggle";
import Logo from "../assets/images/logo.png";

export const Navbar = () => {
  const { isMenuOpen, handleClick } = useMenuToggle();

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 h-20 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  pt-4 ">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse pl-7"
        >
          <img
            src={Logo}
            className="h-12 rounded-full "
            alt="Nutricion Profesional Logo"
          />
        </Link>

        <div className="lg:hidden flex items-center space-x-3 pr-7 ">
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

        <div
          className={`
            ${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 `}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-4 lg:text-center items-center dark:bg-gray-800 pb-4 md:pb-0">
            <li>
              <NavLink
                to={"/"}
                className="block text-gray-900 dark:text-white hover:text-blue-500"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="block text-gray-900 dark:text-white hover:text-blue-500"
                onClick={handleClick}
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className="block text-gray-900 dark:text-white hover:text-blue-500"
                onClick={handleClick}
              >
                Productos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import { Link, NavLink } from "react-router-dom";
import { useMenuToggle } from "../hooks/useMenuToggle";
import Logo from "../assets/images/logo.png";

export const Navbar = () => {
  const { isMenuOpen, handleClick } = useMenuToggle();

  return (
    <nav
      id="navbar"
      className="w-full border-gray-200 bg-gray-50 dark:bg-stone-100 dark:border-gray-700 h-20 z-50"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between pt-4">
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

        <div className="lg:hidden flex items-center space-x-3 pr-7">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            transform transition-all duration-500 ease-in-out
        ${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 bg-gray-50 dark:bg-gray-800  inset-0 lg:relative lg:inset-auto lg:top-auto lg:left-auto z-50  
      `}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4 lg:text-center items-center dark:bg-stone-100  pb-4 md:pb-0">
            <li>
              <NavLink
                to="/"
                className="bg-red-500 rounded-md h-10 w-20 flex items-center justify-center text-gray-900 dark:text-black  hover:scale-110 duration-150"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="bg-red-500 rounded-md h-10 w-20 flex items-center justify-center  text-gray-900 dark:text-black hover:scale-110 duration-150 "
                onClick={handleClick}
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="bg-red-500 rounded-md h-10 w-20  flex items-center justify-center hover:bg-green-900 hover:text-black  text-gray-900 dark:text-white hover:scale-110 duration-150 "
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

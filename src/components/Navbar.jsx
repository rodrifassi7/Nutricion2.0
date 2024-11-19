import { Link, NavLink } from "react-router-dom";
import { useMenuToggle } from "../hooks/useMenuToggle";
import Logo from "/images/NPLOGO.png";

export const Navbar = () => {
  const { handleClick } = useMenuToggle();

  return (
    <nav
      id="header-nav"
      className="w-full h-16 z-[999] sticky top-0 bg-stone-100 border-b-[1px] md:px-28 px-7 "
    >
      <div className="max-w-screen-xl flex items-center justify-between w-full h-full ">
        <Link to="/" className="flex-shrink-0">
          <img
            src={Logo}
            className="h-14 rounded-full  hover:scale-110 duration-200"
            alt="Nutricion Profesional Logo"
          />
        </Link>

        <div className="flex-grow">
          <ul className="flex justify-center space-x-10 text-gray-900 dark:text-black text-md ">
            <NavLink
              to="/"
              onClick={handleClick}
              className="hover:bg-oransh px-4 py-2 rounded-lg  hover:text-white duration-500   "
            >
              Inicio
            </NavLink>
            <li className="hover:bg-oransh px-4 py-2 rounded-lg hover:text-white duration-500">
              <NavLink to="/about" onClick={handleClick}>
                Nosotros
              </NavLink>
            </li>
            <li className="hover:bg-oransh px-4 py-2 rounded-lg hover:text-white duration-500    ">
              <NavLink to="/menu" onClick={handleClick}>
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

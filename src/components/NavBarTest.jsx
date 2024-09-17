import { Link, NavLink } from "react-router-dom";
import { useMenuToggle } from "../hooks/useMenuToggle";
import Logo from "../assets/images/logo.png";

export const NavBarTest = () => {
  const { handleClick } = useMenuToggle();

  return (
    <nav
      id="header-nav"
      className="w-full h-16 z-50 sticky top-0 bg-stone-100   "
    >
      <div className="max-w-screen-xl flex items-center justify-between w-full h-full px-7">
        <Link to="/" className="flex-shrink-0">
          <img
            src={Logo}
            className="h-12 rounded-full"
            alt="Nutricion Profesional Logo"
          />
        </Link>

        <div className="flex-grow">
          <ul className="flex justify-center space-x-14 text-gray-900 dark:text-black font-normal">
            <li className="hover:bg-red-400">
              <NavLink to="/" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="hover:bg-red-400">
              <NavLink to="/about" onClick={handleClick}>
                Nosotros
              </NavLink>
            </li>
            <li className="hover:bg-red-400">
              <NavLink to="/products" onClick={handleClick}>
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

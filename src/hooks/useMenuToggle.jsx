import { useState } from "react";

export const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prevState) => !prevState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    isMenuOpen,
    handleClick,
  };
};

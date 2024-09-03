import { useState } from "react";

export const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return {
    isMenuOpen,
    handleClick,
  };
};

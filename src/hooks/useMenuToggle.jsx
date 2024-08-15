import { useState } from "react";

// Hook personalizado: usa el prefijo 'use' en su nombre
export const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return {
    isMenuOpen,
    handleClick,
  };
};

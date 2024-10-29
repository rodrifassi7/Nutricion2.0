import { Footer } from "../components/Footer";
import { Mapa } from "../components/Mapa";
import { HeroSection } from "../sections/HeroSection";
import { MenuSection } from "../sections/MenuSection";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <Mapa />
      <Footer />
    </div>
  );
};

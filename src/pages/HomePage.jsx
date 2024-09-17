import { Footer } from "../components/Footer";
import { Mapa } from "../components/Mapa";
import { MenuSection } from "../sections/MenuSection";
// import { HeroPage } from "./HeroPage";
import { Test } from "./Test";

export const HomePage = () => {
  return (
    <div className="">
      <Test />
      <MenuSection />
      <Mapa />
      <Footer />
    </div>
  );
};

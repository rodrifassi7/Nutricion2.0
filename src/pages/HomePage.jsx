import { Footer } from "../components/Footer";
import { Mapa } from "../components/Mapa";
import { MenuSection } from "../sections/MenuSection";
import ReviewsSection from "../sections/ReviewsSection";
// import { HeroPage } from "./HeroPage";
import { Test } from "./Test";

export const HomePage = () => {
  return (
    <div>
      <Test />
      <MenuSection />
      <Mapa />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

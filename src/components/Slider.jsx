import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { MenuCard } from "./MenuCard";
import AptoDiabetico from "../assets/images/aptoDiabetico.webp";
import Hiposodica from "../assets/images/Hiposodica.webp";
import Charlas from "../assets/images/Charlas.webp";
import Packs from "../assets/images/Packs.webp";
import Saludable from "../assets/images/saludable.webp";
import SinGluten from "../assets/images/sinGluten.webp";
import Perimenopausia from "../assets/images/Perimenopausia.webp";

export const Slider = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    const glideInstance = new Glide(glideRef.current, {
      type: "carousel",
      peek: 40,
      startAt: 0,
      perView: 4,
      gap: 5,
      rewind: true,
      autoplay: 1,
      animationDuration: 5000,
      animationTimingFunc: "linear",
      breakpoints: {
        768: {
          gap: 5,
          perView: 2,
        },
        480: {
          gap: 3,
          perView: 1,
        },
      },
    });

    glideInstance.mount();

    return () => {
      glideInstance.destroy();
    };
  }, []);

  return (
    <div className="glide" ref={glideRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <MenuCard imageUrl={Charlas} cardName={"Charlas"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl={AptoDiabetico} cardName={"Apto Diabetico"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl={Hiposodica} cardName={"Hiposódica"} />
          </li>{" "}
          <li className="glide__slide">
            <MenuCard imageUrl={Packs} cardName={"Packs Semanales"} />
          </li>{" "}
          <li className="glide__slide">
            <MenuCard imageUrl={Saludable} cardName={"Saludable"} />
          </li>{" "}
          <li className="glide__slide">
            <MenuCard imageUrl={SinGluten} cardName={"Sin Gluten"} />
          </li>{" "}
          <li className="glide__slide">
            <MenuCard imageUrl={Perimenopausia} cardName={"Mujeres +45"} />
          </li>{" "}
          <li className="glide__slide">
            <MenuCard imageUrl={AptoDiabetico} cardName={"Apto Diabetico"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

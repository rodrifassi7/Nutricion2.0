import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { MenuCard } from "./MenuCard";

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
            <MenuCard imageUrl="/images/Charlas.webp" cardName={"Charlas"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl="/images/AptoDiabetico.webp" cardName={"Apto Diabético"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl="/images/Hiposodica.webp" cardName={"Hiposódica"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl="/images/Packs.webp" cardName={"Packs Semanales"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl="/images/Saludable.webp" cardName={"Saludable"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl="/images/SinGluten.webp" cardName={"Sin Gluten"} />
          </li>
          <li className="glide__slide">
            <MenuCard imageUrl="/images/Perimenopausia.webp" cardName={"Mujeres +45"} />
          </li>
         
        </ul>
      </div>
    </div>
  );
};

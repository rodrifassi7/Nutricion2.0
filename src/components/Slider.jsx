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
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"Viandas empresariales"}
              cardName={"Viandas empresariales"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Packs semanales"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Saludable"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Descenso"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Hiposódico"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Sin Gluten"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Apto diabético"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Meriendas saludables"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              // cardDescription={"salmon con patatas"}
              cardName={"Capacitaciones y charlas"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

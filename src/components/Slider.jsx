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
      perView: 3,
      gap: 10,
      rewind: true,
      autoplay: 2000,
      animationTimingFunc: "ease-out",
      breakpoints: {
        768: {
          perView: 2,
        },
        480: {
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
              cardDescription={"salmon con patatas"}
              cardName={"1"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              cardDescription={"salmon con patatas"}
              cardName={"2"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              cardDescription={"salmon con patatas"}
              cardName={"3"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              cardDescription={"salmon con patatas"}
              cardName={"4"}
            />
          </li>
          <li className="glide__slide">
            <MenuCard
              imageUrl={
                "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              cardDescription={"salmon con patatas"}
              cardName={"5"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

import React from "react";
import { foodForYou, freshFood, homemadeFood } from "../assets/icons";

import { DifItem } from "../components/DifItem";

export const Diferents = () => {
  const items = [
    {
      title: "Productos Frescos",
      description: "Trabajamos con materia prima fresca y de estación.",
      imgSrc: freshFood,
      bgColor: "sweetgrin",
    },
    {
      title: "Comidas pensadas en vos",
      description:
        "Nuestra nutricionista se asegura de que incorpores nutrientes de calidad.",
      imgSrc: foodForYou,
      bgColor: "sweetoransh",
    },
    {
      title: "Comidas caseras y muy ricas",
      description:
        "Amamos la cocina, y por eso te cocinamos como en casa: sin conservantes artificiales ni cosas raras.",
      imgSrc: homemadeFood,
      bgColor: "sweetgrin",
    },
  ];

  return (
    <div className=" md:px-28 p-7">
      <h1 className=" text-center max-w-2xl text-4xl xl:text-6xl font-custom tracking-tight leading-none text-oransh   justify-self-center pt-20 pb-10">
        Lo que nos hace diferentes
      </h1>
      <section className="flex flex-wrap md:flex-nowrap justify-center items-center space-y-4 md:space-y-0 md:space-x-8 py-20">
        {items.map((item, index) => (
          <DifItem
            key={index}
            imgSrc={item.imgSrc}
            bgColor={item.bgColor}
            title={item.title}
            description={item.description}
            delay={`animate__delay-${index + 1}s`}
            className={`w-full md:w-1/3`}
          />
        ))}
      </section>
    </div>
  );
};

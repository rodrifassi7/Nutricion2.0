import MyImage from "../assets/images/Nutricionista.webp";

export const AboutUsPage = () => {
  return (
    <>
      <div className=" flex flex-col-reverse items-center justify-center h-[calc(100vh-64px)]  bg-red-500 px-7 -mt-14 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-center h-80 bg-grin">
          <img
            src={MyImage}
            alt="My Image"
            className="max-w-full max-h-full  "
          />

          <section className=" text-center  ">
            <h1 className=" max-w-2xl mb-4  text-3xl xl:text-5xl tracking-tight leading-none font-thin text-black  text-center lg:text-center   ">
              ¿Por qué elegirnos?
            </h1>

            <p>Donde muchos ven una vianda, nosotros vemos</p>
            <p>
              trabajo en equipo, dedicación y mucho amor. En cada comida vas a
              encontrar la planificación de nuestra nutricionista, las
              habilidades de nuestro equipo de cocineras y el control de
              nuestros profesionales. Tenemos más de 20 años en el rubro, y nos
              avala el amor por lo que hacemos día a día.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

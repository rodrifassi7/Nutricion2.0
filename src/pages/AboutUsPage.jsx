import MyImage from "../assets/images/Nutricionista.webp";
import "animate.css";
import { Footer } from "../components/Footer";

export const AboutUsPage = () => {
  return (
    <>
      <div className=" bg-stone-100 flex flex-col items-center justify-center h-[calc(100vh-64px)]   ">
        <div className="flex flex-col-reverse gap-4 lg:flex-row items-center justify-center h-80 lg:h-full px-10">
          <img
            src={MyImage}
            alt="My Image"
            className="max-w-full max-h-full animate__animated animate__fadeIn "
            style={{ animationDelay: "1s" }}
          />

          <section className=" text-center ">
            <h1 className="mb-7 text-center max-w-2xl text-4xl xl:text-6xl font-extrabold tracking-tight leading-none text-oransh font-questrial animate__animated  animate__tada">
              ¿Por qué elegirnos?
            </h1>
            <p
              className="mb-7 text-center max-w-3xl text-md xl:text-2xl  tracking-tight leading-none  font-questrial text-pretty animate__animated animate__fadeIn"
              style={{ animationDelay: "1s" }}
            >
              Donde muchos ven una vianda, nosotros vemos trabajo en equipo,
              dedicación y mucho amor. En cada comida vas a encontrar la
              planificación de nuestra nutricionista, las habilidades de nuestro
              equipo de cocineras y el control de nuestros profesionales.
              Tenemos más de 20 años en el rubro, y nos avala el amor por lo que
              hacemos día a día.
            </p>
          </section>
        </div>
      </div>
      <h1 className="mb-7 text-center text-3xl xl:text-6xl font-extrabold tracking-tight leading-none text-oransh font-questrial">
        Lo que nos hace diferentes
      </h1>
      <section className="  text-left flex justify-center  gap-10 py-10 px-7 bg-stone-100 ">
        <div>
          <img
            src="
          "
            alt=""
          />
          <h2 className="text-xl md:text-3xl">Productos Frescos</h2>
          <h4>Trabajamos con materia prima fresca y de estación.</h4>
        </div>
        <div>
          <img
            src="
          "
            alt=""
          />
          <h2 className="text-xl md:text-3xl">Comidas pensadas en vos</h2>
          <h4>
            Nuestra nutricionista se asegura de que incorpores nutrientes de
            calidad.
          </h4>
        </div>
        <div>
          <img
            src="
          "
            alt=""
          />
          <h2 className="text-xl md:text-3xl ">Casero y muy rico</h2>
          <h4>
            Amamos la cocina, y por eso te cocinamos como en casa: sin
            conservantes artificiales ni cosas raras.
          </h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

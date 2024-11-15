import MyImage from "/images/Nutricionista.webp";
import "animate.css";
import { Footer } from "../components/Footer";
import { Diferents } from "../sections/Diferents";
import { Faq } from "../sections/Faq";
import WhatsApp from "../assets/logos/whatsapp";

export const AboutUsPage = () => {
  return (
    <>
      <div className="bg-stone-100 md:px-28 px-7">
        <div className="  flex flex-col items-center justify-center h-[calc(100vh-64px)]   ">
          <div className="flex flex-col-reverse gap-4 lg:flex-row items-center justify-center h-80 lg:h-full px-10">
            <img
              src={MyImage}
              alt="My Image"
              className="max-w-full max-h-full animate__animated animate__fadeIn "
              style={{ animationDelay: "1s" }}
            />

            <section className=" text-center ">
              <h1 className="mb-7 text-center max-w-2xl text-4xl xl:text-6xl font-custom tracking-tight leading-none text-oransh  animate__animated  animate__fadeInLeft">
                ¿Por qué elegirnos?
              </h1>
              <p
                className="mb-7 text-center max-w-3xl text-md xl:text-2xl  tracking-tight leading-none  font-questrial text-pretty animate__animated animate__fadeIn"
                style={{ animationDelay: "1s" }}
              >
                Donde muchos ven una vianda, nosotros vemos trabajo en equipo,
                dedicación y mucho amor. En cada comida vas a encontrar la
                planificación de nuestra nutricionista, las habilidades de
                nuestro equipo de cocineras y el control de nuestros
                profesionales. Tenemos más de 20 años en el rubro, y nos avala
                el amor por lo que hacemos día a día.
              </p>
            </section>
          </div>
        </div>
        <Diferents />

        <Faq />

        <div className="fixed bottom-14 right-10 z-50 flex items-center justify-center hover:scale-105 duration-300">
          <a
            href="https://wa.me/5492804385269?text=Hola!%20Me%20gustaría%20más%20información%20sobre%20las%20viandas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

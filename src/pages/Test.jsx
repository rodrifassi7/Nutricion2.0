import MyImage from "../assets/images/HeroImg.webp";
import "animate.css";
import WhatsApp from "../assets/logos/whatsapp";
import { BotonReu } from "../components/BotonReu";
import { ImgText } from "../components/ImgText";

export const Test = () => {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="flex flex-col md:flex-col lg:flex-row  justify-center sm:justify-end h-[calc(100vh-64px)] bg-stone-100 -mt-16 md:mt-0 gap-10 md:px-28 px-7"
        style={{
          backgroundImage: `url(${MyImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: window.innerWidth <= 768 ? "scroll" : "fixed",
        }}
      >
        <div className="flex flex-col w-full max-w-2xl gap-7   md:px-28 md:py-12 lg:py-16 xl:py-20 ">
          <h1 className="max-w-2xl  text-5xl xl:text-8xl  tracking-tight leading-none font-montserrat font-semibold text-grei animate__animated animate__fadeInLeft text-center">
            Nutrición Profesional
          </h1>

          <div className="flex flex-col justify-center items-end md:self-center lg:justify-start lg:items-start animate__animated animate__fadeInLeft animate__delay-1s md:text-center">
            <ImgText />
          </div>
          <div
            style={{ animationDelay: "1.5s" }}
            className="flex flex-col justify-center items-end md:self-center lg:justify-start lg:items-start animate__animated animate__fadeInLeft animate__delay-1s md:text-center"
          >
            <BotonReu nombre="EMPECEMOS!" onClick={handleScrollToMenu} />
          </div>
        </div>
      </section>
      <div className="fixed bottom-14 right-10 z-50 flex items-center justify-center hover:scale-105 duration-300">
        <a
          href="https://wa.me/5492804385269?text=Hola!%20Me%20gustaría%20más%20información%20sobre%20las%20viandas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
        </a>
      </div>
    </>
  );
};

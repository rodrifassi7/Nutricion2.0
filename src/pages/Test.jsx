import MyImage from "../assets/images/hero2.jpg";
import "animate.css";
import WhatsApp from "../assets/images/whatsapp";
import { BotonReu } from "../components/BotonReu";

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
        <div className="flex flex-col w-full max-w-2xl gap-7   md:px-28 md:py-12 lg:py-16 xl:py-20 rounded-lg ">
          <h1 className="max-w-2xl  text-5xl xl:text-7xl  tracking-tight leading-none font-montserrat font-semibold text-grei animate__animated animate__fadeInLeft text-end">
            Nutrición Profesional
          </h1>
          <p
            className="max-w-2xl  text-grei text-end lg:mb-8 text-xl xl:text-2xl animate__animated animate__fadeInLeft    font-montserrat font-semibold text-balance"
            style={{ animationDelay: "1s" }}
          >
            Viandas nutritivas, cuidadosamente elaboradas por nuestra
            nutricionista para tu día a día.
          </p>
          <div
            style={{ animationDelay: "1.5s" }}
            className="flex flex-col justify-center items-end md:self-center lg:justify-start lg:items-start animate__animated animate__fadeInLeft animate__delay-1s md:text-center"
          >
            <BotonReu nombre="EMPECEMOS!" onClick={handleScrollToMenu} />
          </div>
        </div>
      </section>
      <div className="fixed bottom-14 right-10 z-50 flex items-center justify-center">
        <a
          href="https://wa.me/5493512076229?text=Viven%20en%20un%20Country%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
        </a>
      </div>
    </>
  );
};

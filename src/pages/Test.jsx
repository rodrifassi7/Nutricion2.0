import MyImage from "../assets/images/lalalala.jpg";
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
        className="flex flex-col md:flex-col lg:flex-row items-center justify-center sm:justify-end h-[calc(100vh-64px)] bg-stone-100 -mt-16 md:mt-0 gap-10 md:px-28 px-7"
        style={{
          backgroundImage: `url(${MyImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: window.innerWidth <= 768 ? "scroll" : "fixed",
        }}
      >
        <div className="flex flex-col w-full max-w-2xl px-7 py-6 md:px-28 md:py-12 lg:py-16 xl:py-20 rounded-lg md:items-end">
          <h1 className="max-w-2xl mb-4 text-4xl xl:text-6xl tracking-tight leading-none font-questrial text-white animate__animated animate__fadeInLeft text-center md:text-right">
            Nutrición Profesional
          </h1>
          <p
            className="max-w-2xl mb-6 text-white lg:mb-8 text-md xl:text-xl animate__animated animate__fadeInLeft font-questrial text-center md:text-right"
            style={{ animationDelay: "1s" }}
          >
            Viandas nutritivas, cuidadosamente elaboradas por nuestra
            nutricionista para tu día a día.
          </p>
          <div
            style={{ animationDelay: "1.5s" }}
            className="flex flex-col justify-center items-center lg:justify-start lg:items-start animate__animated animate__fadeInLeft animate__delay-1s"
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

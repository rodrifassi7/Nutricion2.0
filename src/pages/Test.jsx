import MyImage from "../assets/images/my-image.jpg";
import "animate.css";
import WhatsApp from "../assets/images/whatsapp";

export const Test = () => {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="flex flex-col md:flex-col lg:flex-row  items-center justify-center h-[calc(100vh-64px)]  bg-stone-100 px-7 -mt-14 md:mt-0 gap-10">
        <div>
          <div className="fixed bottom-14 right-10 z-50 flex items-center justify-center ">
            <a
              href="https://wa.me/5493512076229?text=Hola!%20Quiero%20más%20entregar%20la%20cola%20sensual%20rodri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp />
            </a>
          </div>
          <h1 className=" max-w-2xl mb-4  text-4xl xl:text-6xl tracking-tight leading-none font-questrial text-black animate__animated animate__fadeInLeft text-center lg:text-start   ">
            Nutrición Profesional
          </h1>
          <p
            className=" max-w-2xl mb-6   text-gray-700 lg:mb-8 text-md xl:text-xl animate__animated animate__fadeInLeft font-questrial text-center lg:text-left "
            style={{ animationDelay: "1s" }}
          >
            Deliciosas viandas preparadas por nuestra nutricionista, con una
            variedad de productos de alta calidad y listas en un segundo.
          </p>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <button
              onClick={handleScrollToMenu}
              className="  bg-black flex flex-col  items-center  animate__animated animate__fadeInLeft animate__delay-1s  py-3 px-7 justify-center"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-white font-questrial">EMPECEMOS!</p>
            </button>
          </div>
        </div>
        <div>
          <img
            src={MyImage}
            alt="My Image"
            className="w-full h-[250px] lg:h-[500px] animate__animated animate__fadeInUp " style={{ animationDelay: "1s" }}
          />
        </div>
      </section>
    </>
  );
};

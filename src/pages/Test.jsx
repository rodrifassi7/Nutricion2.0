import MyImage from "../assets/images/my-image.jpg";
// import "animate.css";
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
      <section className="flex  items-center justify-evenly h-[calc(100vh-64px)]  bg-stone-100 px-7 -mt-14 md:mt-0">
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
          <h1 className=" max-w-2xl mb-4  text-3xl xl:text-6xl tracking-tight leading-none font-thin text-black animate__animated animate__fadeInLeft text-center lg:text-start   ">
            Nutrición Profesional
          </h1>
          <p
            className=" max-w-2xl mb-6   text-gray-700 lg:mb-8 text-xl xl:text-xl animate__animated animate__fadeInLeft font-questrial text-center lg:text-left "
            style={{ animationDelay: "1s" }}
          >
            Deliciosas viandas preparadas por nuestra nutricionista, con una
            variedad de productos de alta calidad y listas en un segundo.
          </p>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <button
              onClick={handleScrollToMenu}
              className=" mt-7 bg-black flex flex-col  items-center  animate__animated animate__fadeInLeft animate__delay-1s  h-10 w-36 justify-center"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-white text-italic">EMPECEMOS!</p>
            </button>
          </div>
        </div>
        <div>
          <img src={MyImage} alt="My Image" className="w-80 h-[500px]" />
        </div>
      </section>
    </>
  );
};

import MyImage from "../assets/images/my-image.jpg";
import { ArrowDown } from "../components/ArrowDown";
import "animate.css";
export const HeroPage = () => {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className=" h-[calc(100vh-80px)] bg-cover bg-center"
      style={{
        backgroundImage: `url(${MyImage})`,
      }}
    >
      <section className=" flex flex-col items-center justify-center h-full p-12 bg-black bg-opacity-50">
        <h1 className="text-center max-w-2xl mb-4  text-6xl xl:text-8xl font-extrabold tracking-tight leading-none text-white animate__animated animate__fadeInLeft ">
          Nutrición Profesional
        </h1>
        <p className="text-center max-w-2xl mb-6 font-light text-white lg:mb-8 text-xl xl:text-2xl animate__animated animate__fadeInLeft " style={{ animationDelay: '0.5s' }}>
          Deliciosas viandas preparadas por nuestra nutricionista, con una
          variedad de productos de alta calidad y listas en un segundo.
        </p>
        <button
          onClick={handleScrollToMenu}
          className=" mt-7 bg-red-500 rounded-xl flex flex-col  items-center  hover:bg-green-900 hover:text-black  text-gray-900 dark:text-white  animate__animated animate__fadeInLeft animate__delay-1s  h-16 w-28 justify-center"
        >
          <p>Empecemos!</p>
          <div className="  ">
            <a href="#experiencia" className="scroll-smooth">
              <ArrowDown />
            </a>
          </div>
        </button>
      </section>
    </div>
  );
};

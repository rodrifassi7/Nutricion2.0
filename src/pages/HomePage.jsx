import MyImage from "../assets/images/my-image.jpg";
import { HeroButton } from "../components/HeroButton";

export const HomePage = () => {
  return (
    <>
      <section className="dark:bg-green-900 p-12 h-[calc(100vh-80px)]">
        <div className="grid max-w-screen-xl lg:gap-8 xl:gap-0  lg:grid-cols-12 h-full ">
          <div className=" place-self-center lg:col-span-7 sm:flex sm:flex-col sm:items-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Nutrición Profesional
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              En Nutricion Profesional nos dedicamos a proporcionarte la mejor
              calidad de alimentos para tus necesidades de salud y de calidad de
              vida.
            </p>

            <HeroButton />
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-full">
            <img
              className="h-[450px] w-full object-cover rounded-3xl"
              src={MyImage}
              alt="foto de un plato de comida preparado por Nutricion Profesional"
            />
          </div>
        </div>
      </section>
    </>
  );
};

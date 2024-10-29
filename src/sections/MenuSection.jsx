import { Slider } from "../components/Slider";

export const MenuSection = () => {
  return (
    <>
      <div
        id="menu-section"
        className="   flex flex-col items-center justify-center  py-11  pt-16 md:px-28 px-7 "
      >
        <h1 className="mb-7 text-center  text-4xl xl:text-6xl font-custom tracking-tight leading-none text-oransh">
          Mirá todo lo que ofrecemos
        </h1>
        <div className="w-full ">
          <Slider />
        </div>
      </div>
    </>
  );
};

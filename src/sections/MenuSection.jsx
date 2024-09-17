import { Slider } from "../components/Slider";

export const MenuSection = () => {
  return (
    <>
      <div
        id="menu-section"
        className="   flex flex-col items-center justify-center  bg-stone-100 py-11 px-7 pt-16 "
      >
        <h1 className="mb-7 text-center max-w-2xl text-4xl xl:text-6xl font-extrabold tracking-tight leading-none text-oransh">
          Mirá todo lo que ofrecemos
        </h1>
        <div className="w-full ">
          <Slider />
        </div>
      </div>
    </>
  );
};

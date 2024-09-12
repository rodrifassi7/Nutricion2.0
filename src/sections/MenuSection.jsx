import { Slider } from "../components/Slider";

export const MenuSection = () => {
  return (
    <>
      <div
        id="menu-section"
        className="   flex flex-col items-center justify-center  bg-oransh py-11 px-7 "
      >
        <h1 className="mb-7 text-center max-w-2xl text-6xl xl:text-8xl font-extrabold tracking-tight leading-none text-white">
          Nutricion deliciosa a tu puerta
        </h1>
        <div className="w-full " >
          <Slider />
        </div>
      </div>
    </>
  );
};

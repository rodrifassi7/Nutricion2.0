import MyImage from "../assets/images/my-image.jpg";

export const HeroImg = () => {
  return (
    <div
      className="bg-cover bg-center  h-[calc(100vh-80px)] "
      style={{
        backgroundImage: `url(${MyImage})`,
      }}
    ></div>
  );
};

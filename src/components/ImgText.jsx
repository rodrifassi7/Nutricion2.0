import imageSrc from "../assets/images/corazon.png";

export const ImgText = () => {
  const texts = [
    "Viandas saludables en Trelew",
    "Hechas con amor",
    "Diseñadas por una nutricionista",
  ];

  return (
    <div className="flex flex-col space-y-1 max-h-auto items-end">
      {texts.map((text, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-lg leading-none">{text}</span>
          <img
            src={imageSrc}
            alt={`Imagen ${index + 1}`}
            className="w-8 h-8 rounded-full"
          />

        </div>
      ))}
    </div>
  );
};

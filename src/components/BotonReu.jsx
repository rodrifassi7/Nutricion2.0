/* eslint-disable react/prop-types */

export const BotonReu = ({ nombre, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      className="bg-oransh flex flex-col items-center py-3 px-7 justify-center rounded-lg hover:scale-105 duration-200"
    >
      <p className="text-white font-questrial">{nombre}</p>
    </button>
  );
};

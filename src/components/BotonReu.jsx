
export const BotonReu = ({ nombre, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      className="bg-oransh flex flex-col items-center py-3 px-7 justify-center"
    >
      <p className="text-white font-questrial">{nombre}</p>
    </button>
  );
};

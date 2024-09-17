/* eslint-disable react/prop-types */
export const MenuCard = ({ imageUrl, cardName }) => {
  return (
    <div className="max-w-sm h-80 overflow-hidden transform transition-all  ">
      <div className="h-fit overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={imageUrl}
          alt={cardName}
        />
      </div>
      <div className="p-5 text-center  ">
        <h5 className="pb-7 text-xl md:text-2xl font-bold tracking-tight  text-oransh   ">
          {cardName}
        </h5>
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
export const MenuCard = ({ imageUrl, cardName }) => {
  return (
    <div className="w-64 h-96  overflow-hidden transform transition-all ">
      <div className=" overflow-hidden ">
        <img
          className="w-full h-80  object-cover"
          src={imageUrl}
          alt={cardName}
        />
      </div>
      <div className=" text-center mt-2  ">
        <h5 className=" text-xl md:text-2xl  tracking-tight  text-black text-center   ">
          {cardName}
        </h5>
      </div>
    </div>
  );
};

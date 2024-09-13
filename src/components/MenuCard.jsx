/* eslint-disable react/prop-types */
export const MenuCard = ({ imageUrl, cardName }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-all  dark:bg-gray-800 dark:border-gray-700">
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={cardName}
        />
      </div>
      <div className="p-5 text-center  h-32">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-pretty ">
          {cardName}
        </h5>
      </div>
    </div>
  );
};

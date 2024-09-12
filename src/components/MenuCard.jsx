/* eslint-disable react/prop-types */
export const MenuCard = ({ imageUrl, cardName, cardDescription }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={cardName}
        />
      </div>
      <div className="p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {cardName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cardDescription}
        </p>
      </div>
    </div>
  );
};

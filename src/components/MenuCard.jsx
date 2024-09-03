export const MenuCard = ({ imageUrl, cardName, cardDescription }) => {
  return (
    <div className="max-h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-red-800 dark:border-gray-700">
      <a>
        <img className="rounded-t-lg size-64" src={imageUrl} alt={cardName} />
      </a>
      <div className="p-5 text-center">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {cardName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cardDescription}
        </p>
      </div>
    </div>
  );
};

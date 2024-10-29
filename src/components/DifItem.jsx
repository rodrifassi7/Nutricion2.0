import React from "react";

export const DifItem = ({ imgSrc, title, description, delay, bgColor }) => {
  return (
    <div
      className={`flex flex-col items-center text-center w-80 self-start animate__animated animate__fadeInUp ${delay}`}
    >
      <div className={`rounded-full p-4 bg-${bgColor}`}>
        <img className="h-16 w-16" src={imgSrc} alt={title} />
      </div>
      <h2 className="text-xl md:text-3xl font-semibold pb-2">{title}</h2>
      <h4 className="text-gray-700">{description}</h4>
    </div>
  );
};

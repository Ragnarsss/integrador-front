import React from "react";

interface ServiceCardProps {
  title?: string;
  price?: number;
  description?: string;
  imageUrl?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Title",
  price = 0,
  description = "Description",
  imageUrl,
}) => {
  const style = imageUrl
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        height: "200px",
      }
    : { backgroundColor: "gray", height: "200px" };

  return (
    <div className="w-full max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="w-full bg-gray-300" style={style} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${price}
        </span>
      </div>
    </div>
  );
};

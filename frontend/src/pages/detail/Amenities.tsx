import React from "react";

type Props = {
  amenities: string[];
};

const Amenities = ({ amenities }: Props) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <h2 className="font-bold text-xl">
        Popüler konaklama yeri imkan ve özellikleri
      </h2>

      <div className="grid grid-cols-2 gap-2">
        {amenities.map((amenity) => (
          <p
            key={amenity}
            className="bg-gray-200 rounded-lg py-1 px-2 text-center font-medium"
          >
            {amenity}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

import React from "react";
import { HotelType } from "../../types";
import { Link } from "react-router-dom";
import { getBgColorByRating } from "../../utils/helper";
import Status from "../status";

type Props = {
  hotel: HotelType;
};

const Card = ({ hotel }: Props) => {
  return (
    <Link to={`/detail/${hotel._id}`}>
      <div className="p-4 border-[1px] border-gray rounded-lg flex gap-3 h-[300px] relative">
        <Status
          status={hotel.availability}
          designs="absolute rounded-lg p-2 top-4 right-4"
        />

        <img
          src={hotel.image_url}
          alt="hotel-image"
          className="h-full w-[400px] rounded-lg"
        />

        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl">{hotel.name}</h2>

          <p className="font-medium">{hotel.location}</p>

          <div className="flex gap-3 flex-wrap">
            {hotel.amenities.map((amenity, key) => (
              <p
                key={key}
                className="font-medium border border-gray py-1 px-2 rounded-lg text-center"
              >
                {amenity}
              </p>
            ))}
          </div>

          <p className={`${getBgColorByRating(hotel.rating)} rating`}>
            {hotel.rating}
          </p>
        </div>

        <div className="flex flex-col items-end absolute bottom-4 right-4">
          <span className="font-bold text-xl">{hotel.price_per_night}$</span>
          <p className="text-gray-400 text-sm font-medium">
            Vergiler ve ücretler dahildir
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

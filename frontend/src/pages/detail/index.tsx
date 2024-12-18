import React from "react";
import { HotelDetailType } from "../../types";
import Buttons from "./Buttons";
import { useQuery } from "@tanstack/react-query";
import { getHotelById } from "../../api";
import { useParams } from "react-router-dom";
import Status from "../../components/status";
import Amenities from "./Amenities";
import Header from "./Header";

const Detail = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery<HotelDetailType>({
    queryKey: ["hotel", id],
    queryFn: () => getHotelById(id as string),
  });

  return (
    <div className="w-[90vw] md:w-[40vw] mx-auto py-5">
      <Buttons id={id as string} />

      {isPending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error!</div>
      ) : (
        <div className="flex flex-col">
          <Header
            name={data.name}
            rating={data.rating}
            description={data.description}
          />

          <img
            src={data.image_url}
            alt="image-detail"
            className="w-full h-[500px] object-cover rounded-lg"
          />

          <Amenities amenities={data.amenities} />

          <div className="flex justify-between items-center">
            <p className="font-bold text-xl">
              ${data.price_per_night}
              <span className="text-sm text-gray-400 font-normal">/gece</span>
            </p>

            <Status
              status={data.availability}
              designs="flex items-center gap-2 py-1 px-3 rounded-lg"
              text
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

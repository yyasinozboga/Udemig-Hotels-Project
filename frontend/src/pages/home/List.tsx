import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllHotels } from "../../api";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card";
import { HotelType } from "../../types";

const List = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries(searchParams.entries());

  const { isPending, error, data } = useQuery<HotelType[]>({
    queryKey: ["hotels", params],
    queryFn: () => getAllHotels(params),
  });

  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-nowrap mb-5">
        Yakınınızdaki Lokasyonlar
      </h1>

      <div className="flex flex-col gap-5">
        {isPending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error!</div>
        ) : (
          data.map((item) => <Card key={item._id} hotel={item} />)
        )}
      </div>
    </div>
  );
};

export default List;

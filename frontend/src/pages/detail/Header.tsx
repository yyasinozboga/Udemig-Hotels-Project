import React from "react";
import { getBgColorByRating, getTextByRating } from "../../utils/helper";

type Props = {
  name: string;
  rating: number;
  description: string;
};

const Header = ({ name, rating, description }: Props) => {
  return (
    <div className="py-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{name}</h1>

        <div className="flex gap-3 items-center font-medium">
          <p className={`${getBgColorByRating(rating)} rating`}>{rating}</p>
          <p>{getTextByRating(rating)}</p>
        </div>
      </div>
      <p className="font-medium">{description}</p>
    </div>
  );
};

export default Header;

interface defaultValues {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating: string;
  price_per_night: string;
  availability: boolean;
}

interface AddedHotelType extends Omit<defaultValues, "amenities"> {
  image_url: string;
  amenities: string[];
}

interface HotelType {
  _id: string;
  name: string;
  location: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

interface HotelDetailType extends HotelType {
  address: string;
  description: string;
}

interface ParamsType {
  location?: string;
  title?: string;
  order?: string;
}

export {
  defaultValues,
  AddedHotelType,
  HotelType,
  HotelDetailType,
  ParamsType,
};

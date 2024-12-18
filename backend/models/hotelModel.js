import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    address: String,
    description: String,
    amenities: [String],
    rating: Number,
    price_per_night: Number,
    availability: Boolean,
    image_url: String,
  },
  { timestamps: true },
);

const Hotel = mongoose.model("hotel", hotelSchema);

export default Hotel;

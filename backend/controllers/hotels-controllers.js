import Hotel from "../models/hotelModel.js";
import APIFeatures from "../utils/apiFeatures.js";

const getAllHotels = async (req, res) => {
  const features = new APIFeatures(Hotel.find(), req.query, req.formattedQuery)
    .filter()
    .sort()
    .limit();

  const hotels = await features.query;

  res.status(200).json({
    hotels,
  });
};

const getHotel = async (req, res) => {
  const hotel = await Hotel.findOne({ _id: req.params.id });

  if (!hotel) {
    return res.status(404).json({ message: "Hotel not found!" });
  }

  res.status(200).json({
    hotel,
  });
};

const addHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);

    res.status(201).json({ hotel: newHotel });
  } catch (error) {
    res.status(404).json({ message: "Invalid hotel!" });
  }
};

const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    return res.status(204).json({ message: "Hotel deleteted successfully!" });
  } catch (error) {
    res.status(404).json({ message: "Hotel didn't delete" });
  }
};

export { getAllHotels, getHotel, addHotel, deleteHotel };

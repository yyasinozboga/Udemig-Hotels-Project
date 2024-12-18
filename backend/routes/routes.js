import express from "express";
import {
  addHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
} from "../controllers/hotels-controllers.js";
import formatQuery from "../middleware/formatQuery.js";

const router = express.Router();

router.route("/hotels").get(formatQuery, getAllHotels).post(addHotel);

router.route("/hotels/:id").get(getHotel).delete(deleteHotel);

export default router;

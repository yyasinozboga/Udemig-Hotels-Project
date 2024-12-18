import axios from "axios";
import {
  HotelDetailType,
  HotelType,
  ParamsType,
  AddedHotelType,
} from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getAllHotels = (params?: ParamsType): Promise<HotelType[]> =>
  api.get("/hotels", { params }).then((res) => res.data.hotels);

const getHotelById = (id: string): Promise<HotelDetailType> =>
  api.get(`/hotels/${id}`).then((res) => res.data.hotel);

const createHotel = (body: AddedHotelType) => api.post("/hotels", body);

const deleteHotel = (id: string) => api.delete(`/hotels/${id}`);

export { api, getAllHotels, getHotelById, createHotel, deleteHotel };

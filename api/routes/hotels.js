import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updatedHotel } from "../controllers/hotel.js";
const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);

//Update
router.put("/:id", verifyAdmin, updatedHotel);

//Delete
router.delete("/find/:id", verifyAdmin, deleteHotel)

//Get
router.get("/:id", getHotel);

//Get all
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
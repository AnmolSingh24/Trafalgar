import express from "express";
import Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";
const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);

//Update
router.put("/:id", verifyAdmin, updatedHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel)

//Get
router.get("/:id", getHotel);

//Get all
router.get("/", getHotels);

export default router;
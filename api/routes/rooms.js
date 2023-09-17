import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updatedRoom } from "../controllers/room.js";

const router = express.Router();

router.post("/:hotelId", verifyAdmin, createRoom);

//Update
router.put("/:id", verifyAdmin, updatedRoom);

//Delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

//Get
router.get("/:id", getRoom);

//Get all
router.get("/", getRooms);

export default router;

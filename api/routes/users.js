import express from "express";
import { updatedUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello User, You are logged in");
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello User, You are logged in and you an delete your account");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, You are logged in and you an delete all account");
// })

//Create
// router.create(":/id", verifyUser, createUser);

//Update
router.put("/:id", verifyUser, updatedUser);

//Delete
router.delete("/:id", verifyUser, deleteUser)

//Get
router.get("/:id", verifyUser, getUser);

//Get all
router.get("/", verifyAdmin, getUsers);

export default router;
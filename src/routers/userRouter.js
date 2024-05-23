import express from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getUsers/:page", authMiddleware, getUsers);
router.get("/getUser/:id", authMiddleware, getUser);
router.post("/createUser", authMiddleware, createUser);
router.put("/updateUser/:id", authMiddleware, updateUser);
router.delete("/deleteUser/:id", authMiddleware, deleteUser);

export default router;

import express from "express";
import {
  getAspirasis,
  getAspirasiById,
  createAspirasi,
  updateAspirasi,
  deleteAspirasi,
} from "../controllers/Aspirasis.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/aspirasis", verifyUser, getAspirasis);
router.get("/aspirasi/:id", verifyUser, getAspirasiById);
router.post("/aspirasi", verifyUser, createAspirasi);
router.patch("/aspirasi/:id", verifyUser, updateAspirasi);
router.delete("/aspirasi/:id", verifyUser, deleteAspirasi);

export default router;

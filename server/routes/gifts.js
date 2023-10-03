import express from "express";
import path from "path";
import { fileURLToPath } from "url"; 
import giftsController from "../controllers/gifts.js";

const router = express.Router();

router.get("/", giftsController.fetchGifts); 

router.get('/:giftId', giftsController.fetchGiftById);

router.post("/", giftsController.createGift); 

router.delete("/:id", giftsController.deleteGift);

router.patch("/:id", giftsController.updateGift);

export default router; 
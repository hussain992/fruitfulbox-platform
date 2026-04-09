// broadcast.routes.ts
import { broadcastMessage } from "../controllers/broadcast.js";
import express from "express";

const router = express.Router();

router.post("/broadcast", broadcastMessage);

export default router;
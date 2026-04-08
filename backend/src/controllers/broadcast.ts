// broadcast.controller.ts
import { sendWhatsAppMessage } from "@/services/whatsapp.js";
import { Request, Response } from "express";

// Example: fetch from DB instead
const customers = [
  "917276243331",
  "919879952452"
];

export async function broadcastMessage(req: Request, res: Response) {
  const { message } = req.body;

  for (const number of customers) {
    await sendWhatsAppMessage(number, message);
  }

  res.json({ success: true, message: "Broadcast sent" });
}
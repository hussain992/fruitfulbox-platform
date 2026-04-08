import cron from "node-cron";
import { broadcastMessage } from "../controllers/broadcast.js";

export function startBroadcastJob() {
  cron.schedule("0 19 * * 2", async () => {
    console.log("Sending weekly Fruitful Box broadcast");

    await broadcastMessage({
      body: {
        message: `Hi 👋

Fresh fruits arriving tomorrow 🍓🍊🍇

Order now:
https://fruitfulbox.com`
      }
    } as any, {} as any);
  }, {
    timezone: "Asia/Kolkata"
  });
}
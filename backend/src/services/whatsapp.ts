// whatsapp.service.ts
import axios from "axios";

const TOKEN = process.env.WHATSAPP_TOKEN!;
const PHONE_ID = process.env.PHONE_NUMBER_ID!;

export async function sendWhatsAppMessage(to: string, message: string) {
  return axios.post(
    `https://graph.facebook.com/v18.0/${PHONE_ID}/messages`,
    {
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: message },
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );
}

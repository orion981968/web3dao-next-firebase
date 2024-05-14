import { NextApiRequest, NextApiResponse } from "next";

// pages/api/notifyDiscord.js
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { body } = req;
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

    try {
      await fetch(DISCORD_WEBHOOK_URL ?? "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `New visit: ${body.page} at ${body.timestamp} from ${body.userAgent}, IP: ${body.ip}`,
        }),
      });

      return res.status(200).json({ message: "Notification sent" });
    } catch (error) {
      console.error("Error sending notification to Discord", error);
      return res.status(500).json({ error: "Error sending notification" });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

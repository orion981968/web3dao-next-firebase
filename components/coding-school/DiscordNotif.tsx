export const sendDiscordNotification = async (message: string) => {
  const webhookUrl =
    "https://discord.com/api/webhooks/1220657640636682281/vonYC2tlDwyqfZvSwG7VuxCgy0LzmVAVFjD4mSHsoIOtKbmCyrjXZBpJX5w8wEzhS_Ay";

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    });
  } catch (error) {
    console.error("Error sending Discord notification:", error);
  }
};

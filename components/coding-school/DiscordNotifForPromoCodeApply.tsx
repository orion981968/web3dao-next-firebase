export const sendDiscordWebhook = async (
  promoCode: string,
  discount: number,
) => {
  const webhookUrl =
    "https://discord.com/api/webhooks/1221131034691633224/NYFlzTjrNEAnA_qaK23oSkuhg8K_sTbYfvJG-ugqu32F0wKX6aAwiOeStmiC2sd3VL7k";
  const message = {
    content: `Promo code applied: ${promoCode} with a discount of ${discount} Matic.`,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      console.error(
        "Failed to send webhook to Discord:",
        await response.text(),
      );
    }
  } catch (error) {
    console.error("Error sending webhook to Discord:", error);
  }
};

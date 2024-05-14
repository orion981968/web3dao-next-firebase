import React, { useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { app4 } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendDiscordWebhook } from "./DiscordNotifForPromoCodeApply";

interface PromoCodeValidationProps {
  promoCode: string;
  onValidPromoCode: (promoDiscount: number) => void;
}

const PromoCodeValidation: React.FC<PromoCodeValidationProps> = ({
  onValidPromoCode,
}) => {
  const [promoCode, setPromoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  const handlePromoCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPromoCode(event.target.value);
  };

  const applyPromoCode = async () => {
    if (!promoCode) {
      toast.error("Please enter a promo code.");
      return;
    }

    setLoading(true);

    console.log("Applying promo code:", promoCode);

    const dbRef = ref(getDatabase(app4));
    try {
      const snapshot = await get(child(dbRef, `promoCodes/${promoCode}`));
      if (snapshot.exists()) {
        const promoCodeData = snapshot.val();
        const discount = promoCodeData.discount; // Get discount from database
        onValidPromoCode(discount);
        toast.success(`Promo code applied. Discount: ${discount} Matic.`);
        // Send webhook to Discord
        sendDiscordWebhook(promoCode, discount);
        console.log("Promo code applied successfully:", promoCodeData);
        setDiscountApplied(true);
      } else {
        toast.error("Invalid promo code.");
        console.log("Invalid promo code:", promoCode);
      }
    } catch (error) {
      console.error("Error applying promo code:", error);
      toast.error("Failed to apply promo code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <div className="flex items-center">
        <input
          type="text"
          value={promoCode}
          onChange={handlePromoCodeChange}
          placeholder="Enter promo code"
          className="mr-2 rounded-lg border border-gray-300 px-4 py-2"
          disabled={loading || discountApplied}
        />
        <button
          onClick={applyPromoCode}
          className={`flex items-center justify-center rounded-lg px-4 py-2 text-white ${
            loading || discountApplied
              ? "bg-green-400"
              : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={loading || discountApplied}
          style={{ minWidth: "100px" }}
        >
          {loading ? (
            <div
              className="spinner-border inline-block h-5 w-5 animate-spin rounded-full border-2 border-t-transparent"
              role="status"
            ></div>
          ) : (
            "Apply"
          )}
        </button>
      </div>
      {discountApplied && (
        <div className="mt-2 text-sm text-green-600">
          Discount has been applied.
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default PromoCodeValidation;

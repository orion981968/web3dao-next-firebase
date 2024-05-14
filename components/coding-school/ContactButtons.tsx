import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faDiscord,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactButtons = ({
  handlePayment,
  cryptoPrice,
  originalPrice, // Add the originalPrice prop
}: {
  handlePayment: () => void;
  cryptoPrice: number | null;
  originalPrice: number | null; // Add the originalPrice prop
}) => {
  return (
    <div className="mb-10 flex flex-col items-center space-y-4 sm:space-y-5">
      <button
        className="flex items-center justify-center rounded bg-blue-400 px-6 py-2 text-white hover:bg-blue-700"
        onClick={handlePayment}
        disabled={!cryptoPrice}
      >
        <FontAwesomeIcon icon={faCreditCard} className="mr-2 h-6 w-6" />
        <p>
          Buy your course for{" "}
          {originalPrice && (
            <span style={{ textDecoration: "line-through" }}>
              {originalPrice} Matic
            </span>
          )}{" "}
          {cryptoPrice ? `${cryptoPrice} Matic` : "loading..."}
        </p>
      </button>

      <button
        className="flex items-center justify-center rounded bg-green-500 px-6 py-2 text-white hover:bg-green-700"
        onClick={() => {
          window.open(
            "https://wa.me/+27625658750?text=I%27m%20interested%20in%20the%20Web3%20Coding%20School%20course",
          );
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-6 w-6" />
        Send WhatsApp Message
      </button>

      <button
        className="flex items-center justify-center rounded bg-indigo-500 px-8 py-2 text-white hover:bg-indigo-700"
        onClick={() => {
          window.open("https://discord.gg/mGY9UfWJ");
        }}
      >
        <FontAwesomeIcon icon={faDiscord} className="mr-2 h-6 w-6" />
        Join Our Discord
      </button>

      <button
        className="flex items-center justify-center rounded bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
        onClick={() => {
          window.open("https://t.me/web3daocodingschool");
        }}
      >
        <FontAwesomeIcon icon={faTelegramPlane} className="mr-2 h-6 w-6" />
        Join Our Telegram
      </button>

      <button
        className="flex items-center justify-center rounded bg-red-500 px-6 py-2 text-white hover:bg-red-700"
        onClick={() => {
          window.location.href =
            "mailto:info@web3codingschool.com?subject=Interest in Web3 Coding School";
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-6 w-6" />
        Send Email
      </button>
    </div>
  );
};

export default ContactButtons;

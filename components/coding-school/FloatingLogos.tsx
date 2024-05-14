import React from "react";
import Image from "next/image";

const FloatingLogos = () => {
  const floatAnimation = {
    animation: "float 3s ease-in-out infinite",
    "@keyframes float": {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-20px)" },
      "100%": { transform: "translateY(0px)" },
    },
  };

  const float2Animation = {
    animation: "float2 3s ease-in-out infinite",
    "@keyframes float2": {
      "0%": { transform: "translateY(-10px)" },
      "50%": { transform: "translateY(10px)" },
      "100%": { transform: "translateY(-10px)" },
    },
  };

  return (
    <section className="flex items-center justify-center overflow-hidden py-4">
      <div className="flex flex-wrap justify-center gap-2">
        <div
          className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-lg"
          style={floatAnimation}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/easy-does-it-c440b.appspot.com/o/pngwing.com.png?alt=media&token=19cbc191-1fac-4c5b-bb21-4df5358844c0"
            alt="Next.js Logo"
            width={64}
            height={64}
          />
        </div>
        <div
          className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-lg"
          style={float2Animation}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/easy-does-it-c440b.appspot.com/o/react.png?alt=media&token=ff342e8e-480a-4d32-977f-ac15ccefd9e0"
            alt="React Logo"
            width={64}
            height={64}
          />
        </div>
        <div
          className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-lg"
          style={floatAnimation}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/easy-does-it-c440b.appspot.com/o/typescript.png?alt=media&token=159b457f-023a-4e0c-9908-8b8fe8103cd1"
            alt="TypeScript Logo"
            width={64}
            height={64}
          />
        </div>
        <div
          className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-lg"
          style={float2Animation}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/easy-does-it-c440b.appspot.com/o/vecteezy_ethereum-crypto-currency-3d-render_9667847.png?alt=media&token=a14b6e03-f6b1-4675-9ce3-c0d63bd36d95"
            alt="Ethereum Logo"
            width={64}
            height={64}
          />
        </div>
        <div
          className="h-16 w-16 overflow-hidden rounded-full bg-white shadow-lg"
          style={floatAnimation}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/easy-does-it-c440b.appspot.com/o/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png?alt=media&token=f9c0c9f9-68ea-48ce-bb4d-73bf36e5ebdc"
            alt="JavaScript Logo"
            width={64}
            height={64}
          />
        </div>
      </div>
    </section>
  );
};

export default FloatingLogos;

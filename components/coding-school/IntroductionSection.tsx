import React, { useState } from "react";

const IntroductionSection = () => {
  const [slideIn, setSlideIn] = useState(false);

  React.useEffect(() => {
    setSlideIn(true);
  }, []);

  return (
    <section
      className="text-m mx-4 my-4 transition-all duration-1000 ease-in-out sm:mx-auto"
      style={{
        transform: slideIn ? "translateX(0)" : "translateX(-100%)",
        opacity: slideIn ? 1 : 0,
        maxWidth: "750px",
      }}
    >
      <p>
        Welcome to the Web3 Coding School – a platform where coding meets the
        revolutionary blockchain technology. Here, you will not only learn to
        code but also to create, innovate, and change the world with
        decentralized applications.
      </p>
      <p className="mt-2">
        Our curriculum is designed to take you from the fundamentals of
        blockchain to the complexities of smart contract development, ensuring a
        thorough understanding of Web3 technologies.
      </p>
    </section>
  );
};

export default IntroductionSection;

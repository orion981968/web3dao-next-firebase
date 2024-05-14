/* eslint-disable */

"use client";
import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check to see if the window is off the top of the screen
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed  bottom-5 right-5 rounded-[100px] w-[60px] h-[60px] bg-rose-500 p-2 text-2xl text-white hover:bg-emerald-400"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTop;

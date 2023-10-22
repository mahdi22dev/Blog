"use client";
import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id='back-to-top'
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } bg-primary p-2 fixed bottom-14 right-10`}
    >
      Back to Top
    </button>
  );
}

export default BackToTopButton;

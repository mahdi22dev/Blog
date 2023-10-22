"use client";
import React, { useState, useEffect } from "react";
import { BsArrowBarUp } from "react-icons/bs";
import { motion } from "framer-motion";
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
    <motion.button
      id='back-to-top'
      onClick={scrollToTop}
      className='bg-primary p-3 fixed bottom-9 right-8 text-[30px] cursor-pointer rounded-[100%] hover:bg-opacity-80 text-white'
      style={{ display: isVisible ? "block" : "none" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <BsArrowBarUp />
    </motion.button>
  );
}

export default BackToTopButton;

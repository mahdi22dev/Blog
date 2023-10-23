"use client";
import React, { useState, useEffect } from "react";
import { BsArrowBarUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonVariants } from "@/variants/variants";
import { Tooltip } from "react-tooltip";
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
    <>
      <Tooltip id='back-to' />
      <AnimatePresence>
        <motion.button
          id='back-to-top'
          onClick={scrollToTop}
          className='bg-primary p-3 fixed bottom-9 right-8 text-[30px] cursor-pointer rounded-[100%] hover:bg-opacity-80 text-white hover:scale-110'
          style={{ display: isVisible ? "block" : "none" }}
          layout
          variants={ButtonVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          key={isVisible}
          data-tooltip-id='back-to'
          data-tooltip-content='back to top'
        >
          <BsArrowBarUp />
        </motion.button>
      </AnimatePresence>
    </>
  );
}

export default BackToTopButton;

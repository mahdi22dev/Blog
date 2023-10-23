"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='progress-bar z-50 bg-primary'
      style={{ scaleX }}
    ></motion.div>
  );
}

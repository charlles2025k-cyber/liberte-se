"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedGradientBackground = () => {
  const { scrollYProgress } = useScroll();

  const gradientColor1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["hsl(220, 81%, 5%)", "hsl(230, 60%, 10%)", "hsl(240, 50%, 8%)"]
  );

  const gradientColor2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["hsl(222, 84%, 7%)", "hsl(215, 70%, 12%)", "hsl(220, 81%, 5%)"]
  );

  return (
    <motion.div
      style={{
        background: `linear-gradient(180deg, ${gradientColor1.get()} 0%, ${gradientColor2.get()} 100%)`,
        transition: "background 0.3s ease-out",
      }}
      className="fixed inset-0 z-0"
      animate={{
        background: `linear-gradient(180deg, ${gradientColor1.get()} 0%, ${gradientColor2.get()} 100%)`,
      }}
    />
  );
};

export default AnimatedGradientBackground;

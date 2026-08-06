"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 220,
    damping: 28,
  });

  const y = useSpring(mouseY, {
    stiffness: 220,
    damping: 28,
  });

  return (
    <>
      <motion.div
        onMouseMove={(e) => {
          mouseX.set(e.clientX - 175);
          mouseY.set(e.clientY - 175);
        }}
        className="fixed inset-0 z-40 pointer-events-none"
      />

      <motion.div
        style={{
          x,
          y,
        }}
        className="
          fixed
          w-[350px]
          h-[350px]
          rounded-full
          pointer-events-none
          z-30
          blur-3xl
          bg-white/10
        "
      />
    </>
  );
}
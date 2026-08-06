"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
}

export default function MagneticButton({
  href,
  children,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 18,
  });

  function handleMove(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX =
      e.clientX - rect.left - rect.width / 2;

    const offsetY =
      e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.04 }}
      className="
        inline-flex
        items-center
        justify-center
        gap-3
        px-10
        py-4
        rounded-2xl
        bg-white
        text-black
        font-bold
        transition
        shadow-[0_0_35px_rgba(255,255,255,0.25)]
        hover:shadow-[0_0_55px_rgba(255,255,255,0.45)]
      "
    >
      {children}
    </motion.a>
  );
}
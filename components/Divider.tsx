"use client";

import { motion } from "framer-motion";

interface DividerProps {
  symbol?: string;
}

export default function Divider({
  symbol = "◇",
}: DividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.8 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="
        flex
        items-center
        justify-center
        gap-5
        py-10
        text-white
      "
    >
      <div className="h-px w-32 bg-white/20" />

      <motion.span
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-2xl"
      >
        {symbol}
      </motion.span>

      <div className="h-px w-32 bg-white/20" />
    </motion.div>
  );
}
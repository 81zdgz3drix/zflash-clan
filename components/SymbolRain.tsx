"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const symbols = ["◇", "◈", "◆"];

type Particle = {
  id: number;
  x: number;
  size: number;
  duration: number;
  symbol: string;
};

export default function SymbolRain() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 15,
      duration: Math.random() * 8 + 8,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            y: -100,
            x: `${particle.x}vw`,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-white"
          style={{
            fontSize: particle.size,
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
}
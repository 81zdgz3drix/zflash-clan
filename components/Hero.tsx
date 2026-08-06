"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen
        flex items-center justify-center
        overflow-hidden
        bg-black text-white
        px-4 sm:px-6
      "
    >

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          w-[300px] h-[300px]
          sm:w-[450px] sm:h-[450px]
          md:w-[600px] md:h-[600px]
          rounded-full
          bg-white
          blur-[160px]
        "
      />

      <div
        className="
          relative z-10
          text-center
          max-w-4xl
        "
      >

        {/* Logo */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.08,
          }}
          className="
            flex justify-center
            mb-8 sm:mb-10
          "
        >

          <div className="
            w-28
            sm:w-40
            md:w-48
          ">
            <Image
              src="/images/logo.png"
              alt="zFlash Logo"
              width={192}
              height={192}
              priority
              className="
                rounded-3xl
                shadow-[0_0_80px_rgba(255,255,255,0.18)]
              "
            />
          </div>

        </motion.div>


        {/* Title */}
        <motion.h1
          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          className="
            text-5xl
            sm:text-6xl
            md:text-8xl
            font-black
            tracking-tight
          "
        >
          zFlash
        </motion.h1>


        {/* Description */}
        <motion.p
          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.3,
            duration:0.8
          }}

          className="
            mt-5
            sm:mt-6
            text-gray-400
            text-base
            sm:text-xl
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          Рейд-клан, созданный чтобы уничтожать биомусор
          на просторах игры The Strongest Battlegrounds.
        </motion.p>


        {/* Button */}
        <motion.div
          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:0.6,
            duration:0.8
          }}

          className="
            mt-8
            sm:mt-10
            flex
            justify-center
          "
        >

          <MagneticButton href="#join">
            ◇ Вступить в клан
          </MagneticButton>

        </motion.div>


      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="join"
      className="
        relative
        overflow-hidden
        px-4
        sm:px-6
        py-24
        sm:py-32
        bg-black
        text-white
      "
    >

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-0
          w-[300px]
          h-[300px]
          sm:w-[500px]
          sm:h-[500px]
          bg-white
          blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          max-w-4xl
          mx-auto
          text-center
        "
      >

        <h2
          className="
            text-4xl
            sm:text-6xl
            font-black
            mb-6
          "
        >
          Готов стать частью zFlash?
        </h2>


        <p
          className="
            text-gray-400
            text-base
            sm:text-xl
            max-w-2xl
            mx-auto
            mb-6
          "
        >
          Присоединяйся к рейд-клану и развивайся
          вместе с нашей командой.
        </p>


        <p
          className="
            text-gray-600
            text-sm
            max-w-xl
            mx-auto
            mb-10
          "
        >
          Кнопка ниже ведёт на Discord профиль лидера.
          Напиши ему для проверки и получения доступа в клан.
        </p>


        <div
          className="
            flex
            justify-center
          "
        >

          <a
            href="https://discord.com/users/1312787469573296162"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-2xl
              bg-white
              text-black
              px-8
              py-4
              font-bold
              transition
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
            "
          >
            Discord профиль
          </a>

        </div>


        <div
          className="
            mt-16
            text-sm
            text-gray-600
          "
        >
          © {new Date().getFullYear()} zFlash. All rights reserved.
        </div>


      </motion.div>

    </footer>
  );
}
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        px-4
        sm:px-6
        py-24
        sm:py-32
        bg-black
        text-white
      "
    >

      <motion.div
        initial={{
          opacity:0,
          y:60
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:false,
          amount:0.3
        }}

        transition={{
          duration:0.8
        }}

        whileHover={{
          y:-8
        }}

        className="
          max-w-5xl
          mx-auto
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-6
          sm:p-10
          shadow-[0_0_80px_rgba(255,255,255,0.05)]
        "
      >

        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-8
            items-center
          "
        >

          {/* Symbol */}

          <motion.div
            animate={{
              rotate:[0,5,-5,0]
            }}

            transition={{
              duration:5,
              repeat:Infinity
            }}

            className="
              flex
              items-center
              justify-center
              w-24
              h-24
              sm:w-32
              sm:h-32
              rounded-3xl
              bg-white
              text-black
              text-5xl
              font-black
              shrink-0
            "
          >
            ◇
          </motion.div>



          {/* Text */}

          <div
            className="
              text-center
              md:text-left
            "
          >

            <h2
              className="
                text-3xl
                sm:text-5xl
                font-black
                mb-5
              "
            >
              О zFlash
            </h2>


            <p
              className="
                text-gray-400
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              zFlash — рейд-клан, созданный чтобы уничтожать
              биомусор на просторах игры{" "}
              
              <span className="text-white font-semibold">
                The Strongest Battlegrounds
              </span>
              .
              <br />
              <br />

              Мы только недавно были созданы,
              но быстро развиваемся и собираем
              активных игроков для мощных рейдов.
            </p>


          </div>


        </div>


      </motion.div>


    </section>
  );
}
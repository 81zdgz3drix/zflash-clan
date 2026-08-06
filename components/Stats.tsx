"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "81",
    title: "Участников",
    description: "Старый состав zFlash",
  },
  {
    number: "6",
    title: "Побед",
    description: "Выигранных рейдов",
  },
  {
    number: "∞",
    title: "Развитие",
    description: "Мы только начинаем",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="
        px-4
        sm:px-6
        py-24
        sm:py-32
        bg-black
        text-white
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
        "
      >

        <motion.h2
          initial={{
            opacity:0,
            y:40
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
            duration:0.7
          }}

          className="
            text-center
            text-3xl
            sm:text-5xl
            font-black
            mb-12
          "
        >
          Статистика
        </motion.h2>



        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {stats.map((item,index)=>(

            <motion.div

              key={item.title}

              initial={{
                opacity:0,
                y:50
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
                duration:0.6,
                delay:index * 0.15
              }}

              whileHover={{
                y:-10,
                scale:1.03
              }}

              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                text-center
                shadow-[0_0_50px_rgba(255,255,255,0.04)]
              "
            >

              <div
                className="
                  text-6xl
                  sm:text-7xl
                  font-black
                  mb-4
                "
              >
                {item.number}
              </div>


              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  mb-2
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  text-gray-400
                "
              >
                {item.description}
              </p>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "Кто может вступить в zFlash?",
    answer:
      "Абсолютно любой игрок. Даже если ты новичок — главное желание развиваться и участвовать в жизни клана.",
  },
  {
    question: "Какие требования для вступления?",
    answer:
      "Нужно быть активным, посещать рейды и уважать участников команды.",
  },
  {
    question: "Как проходят рейды?",
    answer:
      "Мы собираемся командой, выбираем цель и играем организованно. Главное — командная работа.",
  },
  {
    question: "Можно ли стать частью команды?",
    answer:
      "Да. Активные игроки могут получать больше возможностей внутри клана.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
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
          max-w-4xl
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
          FAQ
        </motion.h2>



        <div
          className="
            space-y-4
          "
        >

          {questions.map((item,index)=>(

            <motion.div

              key={item.question}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:false,
                amount:0.2
              }}

              transition={{
                delay:index * 0.1
              }}

              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                overflow-hidden
              "
            >

              <button

                onClick={() =>
                  setOpen(open === index ? null : index)
                }

                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4
                  p-5
                  sm:p-6
                  text-left
                "
              >

                <span
                  className="
                    font-semibold
                    text-base
                    sm:text-lg
                  "
                >
                  {item.question}
                </span>


                <span
                  className="
                    text-2xl
                    text-gray-400
                  "
                >
                  {open === index ? "−" : "+"}
                </span>


              </button>



              <AnimatePresence>

                {open === index && (

                  <motion.div

                    initial={{
                      height:0,
                      opacity:0
                    }}

                    animate={{
                      height:"auto",
                      opacity:1
                    }}

                    exit={{
                      height:0,
                      opacity:0
                    }}

                    transition={{
                      duration:0.3
                    }}

                    className="
                      overflow-hidden
                    "
                  >

                    <p
                      className="
                        px-5
                        sm:px-6
                        pb-6
                        text-gray-400
                        leading-relaxed
                      "
                    >
                      {item.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>


            </motion.div>

          ))}

        </div>


      </div>


    </section>
  );
}
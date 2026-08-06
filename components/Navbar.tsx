"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    name: "О клане",
    href: "#about",
  },
  {
    name: "Статы",
    href: "#stats",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Вступить",
    href: "#join",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-4
        sm:px-6
        py-5
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-black/50
          backdrop-blur-xl
          px-5
          py-3
        "
      >

        {/* Logo */}
        <a
          href="#"
          className="
            text-xl
            sm:text-2xl
            font-black
            tracking-tight
            text-white
          "
        >
          zFlash
        </a>


        {/* Desktop */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-gray-400
                hover:text-white
                transition
                text-sm
                font-medium
              "
            >
              {link.name}
            </a>
          ))}

        </div>


        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-white
            text-2xl
          "
        >
          {open ? "✕" : "☰"}
        </button>

      </div>



      {/* Mobile menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity:0,
              y:-20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            exit={{
              opacity:0,
              y:-20
            }}

            transition={{
              duration:0.25
            }}

            className="
              md:hidden
              max-w-6xl
              mx-auto
              mt-3
              rounded-2xl
              border
              border-white/10
              bg-black/80
              backdrop-blur-xl
              p-5
            "
          >

            <div
              className="
                flex
                flex-col
                gap-5
              "
            >

              {links.map((link)=>(

                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-gray-300
                    hover:text-white
                    transition
                  "
                >
                  {link.name}
                </a>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>


    </nav>
  );
}
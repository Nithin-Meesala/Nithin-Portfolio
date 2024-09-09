import { HERO_CONTENT } from "@/constants";
import React from "react";
import NithinProfile from "../assets/NithinProfile.jpeg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaAngleDoubleDown } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, 
    transition: { duration: 0.5, delay: delay } },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-12 lg:text-8xl cursor-pointer"
            >
              Nithin Meesala
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent cursor-pointer"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter cursor-pointer"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              // Layout for large and small screens
              className="flex w-full lg:justify-between justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                {/* Adjust button size on small screens */}
                <Button className="h-10 text-sm bg-red-800 hover:bg-red-600 sm:h-14 sm:text-xl">
                  View Resume
                </Button>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                // Show icon only on large screens
                className="hidden lg:block"
              >
                <FaAngleDoubleDown className="text-4xl relative bottom-0 animate-bounce" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              src={NithinProfile}
              alt="Profile Pic"
              className="rounded-xl mt-2 cursor-pointer h-[250px] w-[200px] sm:h-[350px] sm:w-[300px] lg:h-[450px] lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import about from "../assets/about.jpeg";
import { ABOUT_TEXT } from "@/constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className=" text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img 
             whileInView={{ opacity: 1, y: 0, x:0  }}
             initial={{ opacity: 0, y: -100, x:-500 }}
            transition={{duration:1}}
            src={about} alt="about image" className="rounded-xl"
            height={400} width={300} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
          whileInView={{ opacity: 1, y: 0, x:0  }}
          initial={{ opacity: 0, y: -100, x:500 }}
          transition={{duration:1}}
          className="flex justify-center lg:justify-start">
            <p 
             
            className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;

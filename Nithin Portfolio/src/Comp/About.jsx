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
      <div className="flex flex-wrap justify-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center">
          <motion.img
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, y: -100, x: -200 }}
            transition={{ duration: 1 }}
            src={about}
            alt="about image"
            className="rounded-xl h-[250px] w-[200px] sm:h-[300px] sm:w-[250px] lg:h-[400px] lg:w-[350px]" // Responsive height and width
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center lg:justify-start">
          <motion.div
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, y: -100, x: 200 }}
            transition={{ duration: 1 }}
            className="max-w-full"
          >
            <p className="my-2 py-6 text-center lg:text-left max-w-xl">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;

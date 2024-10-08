import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandTailwind} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {SiSocketdotio} from "react-icons/si";
import {FaNode} from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";
import {TbBrandJavascript} from "react-icons/tb";
import {FaPython} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa";
import { motion } from "framer-motion";

function Technologies() {

const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }


}
})

  return (
    <div className='border-b border-neutral-800 pb-24 '>
        
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Skills</motion.h2>
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-5xl lg:text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandJavascript className='text-5xl lg:text-7xl text-[#EFD81D]'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandTailwind className='text-5xl lg:text-7xl text-[#38BDF8]'/>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSocketdotio className='text-5xl lg:text-7xl text-white'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNode className='text-5xl lg:text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-5xl lg:text-7xl text-sky-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-5xl lg:text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-5xl lg:text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-5xl lg:text-7xl text-black-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
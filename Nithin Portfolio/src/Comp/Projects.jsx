import { PROJECTS } from '@/constants'
import React from 'react'
import { motion } from "framer-motion";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

function Projects() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center gap-8 '>
                    <motion.div 
                    whileInView={{x:0,opacity:1}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full lg:w-1/4'>
                    <a href={project.link}><img src={project.image} alt={project.title} width={350} height={350}  className='mb-6 rounded'/></a>
                </motion.div>
                <motion.div 
                whileInView={{x:0 , opacity:1}}
                initial={{x:100,opacity:0}}
                transition={{duration:1}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold flex gap-8 justify-between items-center' >
                      <motion.a
                      transition={{duration:1}}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.90 }}
                      href={project.link}>{project.title}</motion.a>
                    <Typography
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <a href={project.link}>
                    <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}>
                      <FaExternalLinkSquareAlt  className="hover:text-purple-500"/>
                    </motion.div>
                  </a>
                </Typography>
                <Popover
                  className="ml-2"
                  id="mouse-over-popover"
                  sx={{ pointerEvents: "none" }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography sx={{ p: 1 }}>View Project.</Typography>
                </Popover>
                    </h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((technology,index)=>(
                          <span key={index} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 '>{technology}</span>
                      ))}
                    </div>
                </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects;

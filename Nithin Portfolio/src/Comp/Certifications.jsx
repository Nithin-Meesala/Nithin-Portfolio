import { CERTIFICATIONS } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
function Certifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
      <div>
        {CERTIFICATIONS.map((certificate, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center gap-8 "
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full lg:w-1/4 flex lg:justify-end pr-8"
            >
              <a href={certificate.link}>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  width={125}
                  height={100}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold flex gap-5 items-center">
              <motion.a
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={certificate.link} >{certificate.title}</motion.a>

                <Typography
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <a href={certificate.link}>
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
                  <Typography sx={{ p: 1 }}>View Certificate.</Typography>
                </Popover>
              </h6>
              <p className="mb-4 text-neutral-400">{certificate.description}</p>
              <div className='flex flex-wrap gap-2'>
                      {certificate.technologies.map((technology,index)=>(
                          <span key={index} className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 '>{technology}</span>
                      ))}
                    </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;

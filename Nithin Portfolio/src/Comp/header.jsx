import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Button } from '@/components/ui/button';

function Header({ scrollToContact }) {
    return (
        <div className='mb-14 flex flex-wrap items-center justify-between py-5'>
            <div className='flex-shrink-0'>
                <h1 className='text-4xl  font-extrabold text-white'>Nithin.</h1>
            </div>
            <div className='m-4 flex flex-wrap items-center justify-center gap-2 md:gap-4 md:flex sm:flex sm:gap-1 text-lg md:text-2xl text-white'>
                <a href="https://www.linkedin.com/in/meesalanithin/" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Nithin-Meesala" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://x.com/MeesalaNithin24?t=ia47b4RM5AsYZkjQweCQrA&s=08" aria-label="X (Twitter)">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/meesala_nithin?igsh=MTJzd2N4eDFtb3pneQ==" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://drive.google.com/file/d/1X_jc3Yy8AHfZL4JtVKdEWRPjii1BEUhF/view?usp=sharing" aria-label="Download Resume">
                    <FaDownload />
                </a>
                <Button
                    className="hidden md:block h-8 md:h-10 text-sm md:text-base bg-red-800 hover:bg-red-600"
                    onClick={scrollToContact}
                >
                    Send a Message
                </Button>
            </div>
        </div>
    );
}

export default Header;

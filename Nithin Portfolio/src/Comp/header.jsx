import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


function Header() {
    
    

    return (
        <div className='mb-14 flex items-center justify-between py-5'>
            <div className='flex flex-shrink-0 items-center'>
                <h1 className='text-4xl font-extrabold text-white'>Nithin.</h1>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
               <a href="https://www.linkedin.com/in/meesalanithin/"> <FaLinkedin /></a>
                <a href="https://github.com/Nithin-Meesala"><FaGithub/></a>
               <a href="https://x.com/MeesalaNithin24?t=ia47b4RM5AsYZkjQweCQrA&s=08"><FaSquareXTwitter/></a> 
                <a href="https://www.instagram.com/meesala_nithin?igsh=MTJzd2N4eDFtb3pneQ=="><FaInstagram/></a>
            </div>
           
        </div>
    );
}

export default Header;

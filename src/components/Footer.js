import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { ghub,insta, twet, linkin } from "../assets";
import { Link } from "react-router-dom";

const FooterCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl  w-full justify-center align-middle text-center row'
  >
    
    <div className="m-auto flex align-middle items-center justify-center">
      
        <div className="icon fb">
        <Link to="https://www.instagram.com/devesh.modi.15/" ><img
          src={insta}
          alt='web-development'
          className='w-16 h-16 m-auto flex align-middle items-center justify-center p-2 mt-1'>
            
          </img>
          
          
          </Link>
          
        
        
            <i className="fa-brands fa-instagram-f">
            
            </i>
            <span>Facebook</span>
        </div>

        <div className="icon twt">
       <Link to="https://twitter.com/modidevesh15">
       <img
          src={twet}
          alt='web-development'
          className='w-16 h-16 m-auto flex align-middle items-center justify-center p-2 mt-1'
        ></img>
       </Link>
        
        
            <i className="fa-brands fa-twitter"></i>
            <span>Twitter</span>
        </div>

        <div className="icon lnk">
          <Link to="https://www.linkedin.com/in/devesh-modi-a6162128a/">
        <img
          src={linkin}
          alt='web-development'
          className='w-16 h-16 m-auto flex align-middle items-center justify-center p-2 mt-1'
        />
        </Link>
            <i className="fa-brands fa-linkedin-in"></i>
            <span>Linkedin</span>
        </div>

        <div className="icon git">
          <Link to="https://github.com/DeveshModi1">
        <img
          src={ghub}
          alt='web-development'
          className='w-16 h-16 m-auto flex align-middle items-center justify-center p-2 mt-1' 
        />
        </Link>
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
        </div>

        
        
    </div>
    
    

    
    
  </motion.div>
);

const Footer = () => {
  
  return (
    <div    className='bg-black-200 p-10 rounded-3xl  w-full justify-center  text-center '
    >
    <div className={`mt-0 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}
      >
        <motion.div variants={textVariant()}>
         <div className="text-center">
        
          <p className={styles.heroSubText}>Thanks For Visit</p>
          </div>
          <div className="m-6">
            <p className={styles.sectionfoot}>Follow Me:- </p> 
            
          </div>
          <FooterCard/>
          <div className="mt-6 text-x">
             <p className="text-center">© Devesh Modi</p>
          </div>
          <div className="mt-6 text-x">
             <p className="text-center">Made with ❤️ by Devesh Modi</p>
          </div>
        </motion.div>
      </div>
      </div>
      
      
    </div>

  );
};

export default SectionWrapper(Footer, "");

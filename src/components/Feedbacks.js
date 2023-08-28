import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>⚡</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          
        </div>

        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
         <div>
         <div className='flex float-right '>
            <p className={styles.sectionRED}>{"{"}</p>
             <p className={styles.sectionM}>M</p>
             <p className={styles.sectionE}>E</p>
             <p className={styles.sectionR}>R</p>
             <p className={styles.sectionN}>N</p>
             <p className={styles.sectionRED}>{" }"}</p>
             <p className={styles.sectionDev}> STACK </p>
          </div>
          <h2 className={styles.sectionSubText}>As A Full Stack Developer</h2>
          
         
          <h2 className={styles.sectionHeadText}>What I Do ?</h2>
          </div>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

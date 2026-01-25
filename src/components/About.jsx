import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
// import { services } from '../constants'; // Deprecated
import { SectionWrapper } from '../hoc';
import { useLanguage } from '../context/LanguageContext';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { personal } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { t } = useLanguage();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.ui.about.subText}</p>
        <h2 className={styles.sectionHeadText}>{t.ui.about.headText}</h2>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center justify-between">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] whitespace-pre-line"
        >
          {t.ui.about.description}
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className='relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] flex justify-center items-center'
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className='w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full p-[4px] green-pink-gradient shadow-card overflow-hidden flex justify-center items-center'
          >
            <img
              src={personal}
              alt="Personal"
              className='w-full h-full object-cover rounded-full'
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {t.services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;

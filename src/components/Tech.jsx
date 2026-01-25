// Tech.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
// import { technologies } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const Tech = () => {
  const { t } = useLanguage();
  const technologies = t.technologies;
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleTechs = () => {
    if (window.innerWidth <= 640) return technologies.slice(0, 4);
    if (window.innerWidth <= 1024) return technologies.slice(0, 6);
    return technologies;
  };

  const visibleTechs = isMobile ? getVisibleTechs() : technologies;

  return (
    <>
      <motion.div className="w-full text-center py-10">
        <p className={styles.sectionSubText}>{t.ui.tech.subText}</p>
        <h2 className={styles.sectionHeadText}>{t.ui.tech.headText}</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechs.map((tech) => (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="sm:w-36 w-28 h-28 sm:h-36 group"
            key={tech.name}
          >
            <div className="w-full h-full flex flex-col items-center justify-center bg-black-200/50 backdrop-blur-sm rounded-3xl p-4 border border-white/10 group-hover:border-[#64ffda] transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-1/2 h-1/2 object-contain relative z-10"
                loading="lazy"
                width={64}
                height={64}
              />
              <p className="text-secondary text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </p>
            </div>
          </motion.div>
        ))}

        {visibleTechs.length < technologies.length && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/all-technologies")}
            className="sm:w-36 w-28 h-28 sm:h-36 rounded-full border border-dashed border-[#915eff] flex items-center justify-center cursor-pointer hover:bg-[#915eff]/10 text-[#915eff] text-sm font-medium transition"
          >
            + More
          </motion.div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

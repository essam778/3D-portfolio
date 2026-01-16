import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const TypewriterText = ({ words, speed = 100, delay = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : (currentWord || "").slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, words, speed, delay]);

  return (
    <span className="text-white-100">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCanvas(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Essam Hisham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do <TypewriterText words={["IOT", "Robotics", "Arduino&ESP32", "Web Development"]} speed={100} delay={1500} />
          </p>
        </div>
      </div>

      {showCanvas && isLargeScreen && (
        <React.Suspense fallback={null}>
          <ComputersCanvas />
        </React.Suspense>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

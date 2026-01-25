import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// import { experiences } from "../data/portfolio"; // Deprecated
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience, theme }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: theme === 'dark' ? "#1d1836" : "#f3f3f3",
      color: theme === 'dark' ? "#fff" : "#1a1a1a"
    }}
    contentArrowStyle={{ borderRight: theme === 'dark' ? "7px solid #232631" : "7px solid #f3f3f3" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
  >
    <div>
      <h3 className="text-white-100 text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={index}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.ui.experience.subText}</p>
        <h2 className={styles.sectionHeadText}>{t.ui.experience.headText}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {t.experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} theme={theme} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

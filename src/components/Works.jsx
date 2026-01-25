import { useState, forwardRef } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
// import { projects } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = forwardRef(({
  name,
  description,
  tags,
  image,
  source_code_link,
  onClick,
}, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
          transitionSpeed: 1000,
          tiltEnable: window.innerWidth > 768,
        }}
        className="bg-tertiary p-5 rounded-2xl min-w-[360px] sm:w-[360px] h-full flex flex-col"
      >
        <div
          className="w-full h-[230px] relative cursor-pointer group"
          onClick={onClick}
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            width="360"
            height="230"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
              aria-label="View Source Code"
            >
              <img
                src={github}
                alt="GitHub Icon"
                loading="lazy"
                width="40"
                height="40"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-2xl">
            <button
              aria-label={`View details for ${name}`}
              className="text-white font-bold bg-[#64ffda] text-primary px-4 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform"
            >
              View Details
            </button>
          </div>
        </div>
        <div className="mt-5 flex-1">
          <h3 className="text-white-100 font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-4 text-[15px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[15px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-tertiary w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 shadow-2xl border border-white/10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white-100 hover:text-[#64ffda] transition-colors text-3xl"
        >
          &times;
        </button>

        <div className="flex flex-col gap-8">
          <div className="w-full h-[300px] sm:h-[400px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-white-100 font-bold text-[32px] sm:text-[40px] text-[#64ffda]">{project.name}</h2>

            <section>
              <h3 className="text-white-100 font-semibold text-[24px] mb-3">Overview</h3>
              <p className="text-secondary text-[17px] leading-[28px]">{project.details.overview}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-white-100 font-semibold text-[24px] mb-3">Technical Stack</h3>
                <ul className="flex flex-col gap-2">
                  {project.details.techStack.map((item, i) => (
                    <li key={i} className="text-secondary flex items-start gap-2">
                      <span className="text-[#64ffda] mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-white-100 font-semibold text-[24px] mb-4">Key Features</h3>
                <div className="flex flex-col gap-3">
                  {project.details.features.map((feature, i) => (
                    <div key={i} className="bg-black-200 p-3 rounded-xl border border-white/5">
                      <p className="text-secondary text-[14px]">{feature}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 pt-6 border-t border-white/10">
              <a
                href={project.source_code_link}
                target="_blank"
                aria-label={`View source code for ${project.name} on GitHub`}
                className="bg-white text-primary font-bold py-3 px-8 rounded-xl hover:bg-white/90 transition-all font-mono"
              >
                View Code
              </a>
              {project.live_website_link !== "#" && (
                <a
                  href={project.live_website_link}
                  target="_blank"
                  aria-label={`View live demo for ${project.name}`}
                  className="bg-[#64ffda] text-primary font-bold py-3 px-8 rounded-xl hover:opacity-90 transition-all font-mono"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", title: "All Projects" },
    { id: "robotics", title: "Robotics" },
    { id: "embedded", title: "Embedded Systems" },
    { id: "ai", title: "AI & ML" },
    { id: "web", title: "Web Development" },
  ];

  const filteredProjects = t.projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.ui.works.subText}</p>
        <h2 className={styles.sectionHeadText}>{t.ui.works.headText}</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t.ui.works.description}
        </motion.p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 sm:px-6 py-2 rounded-full border-2 transition-all font-medium text-sm sm:text-base ${activeFilter === category.id
                ? "bg-white text-primary border-white"
                : "bg-transparent text-secondary border-secondary/50 hover:border-white-100 hover:text-white-100"
                }`}
            >
              {t.ui.works.categories[category.id]}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="mt-10 flex flex-wrap gap-7"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");

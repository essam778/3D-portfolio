import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../context/LanguageContext";
import { lazy, Suspense } from "react";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef(null);
  const [form, setform] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const response = await fetch("https://formspree.io/f/xrezwevn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setloading(false);
        alert("Thank you. I will get back to you as soon as possible");
        setform({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setloading(false);
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      <div className="xl:flex-row flex-col flex gap-10 overflow-hidden">
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>{t.ui.contact.subText}</p>
          <h3 className={styles.sectionHeadText}>{t.ui.contact.headText}</h3>

          <form
            ref={formRef}
            onSubmit={handlesubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white-100 font-medium mb-4">{t.ui.contact.form.name}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handlechange}
                placeholder={t.ui.contact.form.namePlaceholder}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white-100 font-medium mb-4">{t.ui.contact.form.email}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handlechange}
                placeholder={t.ui.contact.form.emailPlaceholder}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handlechange}
                placeholder="Subject of your message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white-100 font-medium mb-4">{t.ui.contact.form.message}</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handlechange}
                placeholder={t.ui.contact.form.messagePlaceholder}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-opacity-80 transition-all font-mono"
            >
              {loading ? t.ui.contact.form.sending : t.ui.contact.form.send}
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Canvas Side */}
        <div className="flex-1 flex flex-col gap-10">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="bg-black-100 p-8 rounded-2xl h-fit"
          >
            <h3 className="text-white-100 font-bold text-[24px] mb-6">{t.ui.contact.infoTitle}</h3>
            <div className="flex flex-col gap-6">
              {[
                { title: t.ui.contact.infoItems.email, value: "essamhisham12@outlook.com", icon: "📧" },
                { title: t.ui.contact.infoItems.phone, value: "+20 1006655209", icon: "📞" },
                { title: t.ui.contact.infoItems.location, value: "Egypt", icon: "📍" },
                { title: t.ui.contact.infoItems.availability, value: t.ui.contact.infoItems.availabilityValue, icon: "🕒" }
              ].map((info) => (
                <div key={info.title} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-tertiary rounded-lg flex items-center justify-center text-xl group-hover:bg-[#64ffda] group-hover:scale-110 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-secondary text-[14px] uppercase tracking-wider">{info.title}</p>
                    <p className="text-white-100 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Message Card */}
          <motion.div
            variants={slideIn("right", "tween", 0.3, 1)}
            className="bg-black-100 p-8 rounded-2xl h-fit border-l-4 border-[#64ffda]"
          >
            <h3 className="text-white-100 font-bold text-[20px] mb-4 text-[#64ffda]">{t.ui.contact.quickNoteTitle}</h3>
            <p className="text-secondary leading-[26px] italic">
              "{t.ui.contact.quickNoteText}"
            </p>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.4, 1)}
            className="xl:flex-1 xl:h-auto md:h-[400px] h-[300px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>

      {/* Social Links Section */}
      <motion.div
        variants={slideIn("up", "tween", 0.3, 1)}
        className="bg-black-100 p-8 rounded-2xl"
      >
        <h3 className="text-white-100 font-bold text-[24px] mb-8">{t.ui.contact.connectTitle}</h3>
        <div className="flex flex-wrap gap-10 justify-center sm:justify-start">
          {[
            { name: "GitHub", url: "https://github.com/essam778", hover: "hover:bg-[#181717]", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/essam-hisham-728bb4395/", hover: "hover:bg-[#0077B5]", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
            { name: "Instagram", url: "https://www.instagram.com/essamhisham77/", hover: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100044822680777", hover: "hover:bg-[#1877F2]", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
              className={`flex items-center gap-3 text-secondary hover:text-white transition-all group p-4 bg-tertiary rounded-xl ${social.hover}`}
            >
              <div className="w-8 h-8 flex justify-center items-center">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={social.d} />
                </svg>
              </div>
              <span className="font-bold">{social.name}</span>
            </a>
          ))}

          <a
            href="mailto:essamhisham12@outlook.com"
            aria-label="Send me an email"
            className="flex items-center gap-3 text-secondary hover:text-white-100 transition-all group p-4 bg-tertiary rounded-xl hover:bg-[#EA4335]"
          >
            <div className="w-8 h-8 flex justify-center items-center">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <span className="font-bold">Email</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

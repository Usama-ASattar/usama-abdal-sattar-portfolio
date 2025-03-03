import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { social_medias } from "../constants";
import { cv } from "../assets";

const Hero = () => {
  return (
    <section id="about" className="relative w-full h-screen mx-auto">
      <div className="w-full h-screen flex flex-col sm:flex-row">
        {/* Left Section - Name & Description (Moves to bottom on small screens) */}
        <div className="w-full sm:w-1/2  h-1/2 sm:h-full flex flex-row justify-center items-center p-10 py-[150px] sm:py-[10px] ">
          <div className="flex flex-col items-center py-[20px] ml-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-[285px] h-[155px] violet-gradient" />
          </div>

          <div className="text-start px-3 xs:px-8">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Usama</span>
            </h1>

            <span className={`${styles.heroSubText} mt-2 text-white`}>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Software Enigneer",
                    "Front End Developer",
                    "Tech Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

            <div className="mt-[60px] sm:mt-[50px] flex flex-col md:flex-row gap-5 items-center">
              {/* Social Media Buttons */}
              <div className="flex flex-row gap-5">
                {social_medias.map((social_media, index) => (
                  <a
                    key={index}
                    href={social_media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center w-[140px] sm:w-[160px] gap-2 px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 justify-center"
                    style={{ backgroundColor: social_media.color }}
                  >
                    <img
                      src={social_media.logo}
                      alt={social_media.title}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="font-medium text-white group-hover:opacity-75 transition-opacity duration-300">
                      {social_media.title}
                    </span>
                  </a>
                ))}
              </div>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download="Usama_AS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center w-[140px] sm:w-[160px] bg-[#A9A9A9] gap-2 px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 justify-center"
              >
                <img src={cv} alt="resume" className="w-6 h-6 object-contain" />
                <span className="font-medium text-white group-hover:opacity-75 transition-opacity duration-300">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Computer Canvas (Moves to top on small screens) */}
        <div className="w-full sm:w-1/2 h-1/2 sm:h-full">
          <ComputersCanvas />
        </div>
      </div>

      <div className="absolute bottom-3 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
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

import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { demo, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const MAX_LENGTH = 165;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[340px] w-[340px]"
    >
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="hover:bg-slate-700 bg-[#24292e] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}

          {demo_link && (
            <div
              className={`absolute inset-0 flex justify-end m-3 card-img_hover ${
                source_code_link ? "mt-14" : ""
              }`}
            >
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className="hover:bg-[#D3D3D3] bg-[#DaDaDa] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={demo}
                  alt="demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>

          <p className="mt-2 text-secondary text-[14px] text-justify">
            {description.length > MAX_LENGTH && !expanded
              ? `${description.substring(0, MAX_LENGTH)}...`
              : description}
          </p>

          {description.length > MAX_LENGTH && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-400 hover:underline mt-1"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}> Projects</h2>
      </div>

      <p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-full leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

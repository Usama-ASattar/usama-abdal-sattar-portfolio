import { motion } from "framer-motion";

import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>TOOLS & TECHNOLOGIES I USE</p>
        <h2 className={styles.sectionHeadText}>TECH STACK</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 bg-[#D3D3D3] rounded-full flex justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl relative group"
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-contain group-hover:opacity-15 transition-opacity duration-300"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[12px] text-black font-bold text-center">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

import { styles } from "../styles";
import { social_medias } from "../constants";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full flex items-center py-5 relative bottom-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto text-[12px]">
        <span className="w-2/3 px-2 sm:px-24">
          Copyright © 2024 Usama Abdal Sattar | All rights reserved
        </span>
        <div className="flex flex-row gap-3 w-1/3 sm:justify-center justify-end">
          {social_medias.map((social_media, index) => (
            <a
              key={index}
              href={social_media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-2 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 justify-center"
              style={{ backgroundColor: social_media.color }}
            >
              <img
                src={social_media.logo}
                alt={social_media.title}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

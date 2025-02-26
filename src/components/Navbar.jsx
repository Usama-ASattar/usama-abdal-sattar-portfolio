import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles"; // Ensure this contains necessary styles
import { navLinks } from "../constants"; // Ensure this has your nav links defined
import { menu, close } from "../assets"; // Ensure icons are available

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActive = entry.target.id;
            setActive(newActive);
            window.history.replaceState(null, "", `#${newActive}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on unmount
    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("about"); // Reset active state on home link click
            window.scrollTo(0, 0);
            window.history.replaceState(null, "", `#about`); // Update URL
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Usama &nbsp;
            <span className="sm:block hidden">Abdal Sattar</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id
                  ? "text-white border-b-2 border-white"
                  : "text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer flex items-center`}
              onClick={() => {
                setActive(link.id); // Set active state on click
                document.getElementById(link.id).scrollIntoView({
                  behavior: "smooth", // Optional: for smooth scrolling effect
                });
                window.history.replaceState(null, "", `#${link.id}`); // Update URL
              }}
            >
              <img
                src={link.icon}
                alt={link.title}
                className="w-[15px] h-[15px] object-contain mr-2"
              />
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] flex items-center`}
                  onClick={() => {
                    setToggle(false); // Close the menu on link click
                    setActive(link.id); // Set active state
                    document.getElementById(link.id).scrollIntoView({
                      behavior: "smooth", // Smooth scroll to section
                    });
                    window.history.replaceState(null, "", `#${link.id}`); // Update URL
                  }}
                >
                  <img
                    src={link.icon}
                    alt={link.title}
                    className="w-[15px] h-[15px] object-contain mr-2"
                  />
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { DarkModeContext } from "../../context/darkMode";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <nav className="py-10 mb-12 flex md:gap-96 gap-0">
      <h1 className="text-xl font-semibold dark:text-amber-500">
        0901-255-9469
      </h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-white text-2xl"
            />
          ) : (
            <BsMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          )}
        </li>
        <li>
          <a
            className="bg-gradient-to-r  from-cyan-500 to-teal-600 px-4 pt-1 pb-2 text-white rounded-lg ms-8"
            href="./assets/resume.pdf" download="resume.pdf"
          >
            رزومه
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

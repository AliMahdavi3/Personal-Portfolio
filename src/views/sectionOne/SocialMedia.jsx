import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaTelegram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="text-3xl md:text-5xl flex justify-center gap-5 md:gap-10 text-slate-700 py-3">
      <a href="https://www.linkedin.com/in/ali-mahdavi-346159276/">
        <FaLinkedin className="hover:text-blue-800 text-blue-800 dark:text-blue-500 cursor-pointer" />
      </a>
      <a href="https://github.com/AliMahdavi3">
        <BsGithub className="hover:text-blue-600 text-black cursor-pointer" />
      </a>
      <a href="https://t.me/vladdracul1377">
        <FaTelegram className="hover:text-blue-700 text-blue-900 dark:text-blue-500 cursor-pointer" />
      </a>
      <a href="https://twitter.com/alimahdavi30000">
        <FaTwitter className="hover:text-blue-600 text-sky-600 cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialMedia;

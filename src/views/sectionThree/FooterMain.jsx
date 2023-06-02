import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaTelegram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Footer } from "flowbite-react";

const FooterMain = () => {
  return (
    <Footer container className="bg-sky-100 mt-5 md:mt-10">
      <div className="w-full">
      <h1 className="text-center dark:text-amber-400 text-3xl font-semibold">FrontEndByAli</h1>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Flowbite™" href="#" year={2022} />
          <div className="flex items-center">
            <a href="https://github.com/AliMahdavi3">
              <BsGithub className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/in/ali-mahdavi-346159276/">
              <FaLinkedin className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
            <a href="https://t.me/vladdracul1377">
              <FaTelegram className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
            <a href="https://twitter.com/alimahdavi30000">
              <FaTwitter className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterMain;

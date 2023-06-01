import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaTelegram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
            <a href="">
              <BsGithub className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
            <a href="">
              <FaEnvelope className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
            <a href="">
              <FaLinkedin className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
            <a href="">
              <FaTelegram className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
            <a href="">
              <FaTwitter className="mx-2 md:mx-5 text-2xl cursor-pointer text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterMain;

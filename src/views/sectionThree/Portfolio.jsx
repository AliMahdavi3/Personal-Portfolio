import React from "react";
import { BsGithub } from "react-icons/bs";
import { Button } from "flowbite-react";

const Portfolio = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl dark:text-white py-1 ">Portfolio</h3>
        <p className="text-md dark:text-white py-2 text-gray-900 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span>Lorem ipsum dolor sit.</span> Sequi animi illo enim minima
          tenetur dolorum.<span>Lorem ipsum dolor sit.</span>Lorem ipsum dolor
          sit amet.
        </p>
        <p className="text-md dark:text-white py-2 text-gray-900 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span>Lorem ipsum dolor sit.</span> Sequi animi illo enim minima
          tenetur dolorum.<span>Lorem ipsum dolor sit.</span>Lorem ipsum dolor
          sit amet.
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <img
            src="./assets/image/demo (1).png"
            className="hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl"
            alt=""
          />
          <Button className="w-full">
            <a className="text-xl md:text-2xl flex items-center" href="#">
              GitHub
              <BsGithub className="mx-5 cursor-pointer text-white" />
            </a>
          </Button>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src="./assets/image/demo (2).png"
            className="hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl"
            alt=""
          />
          <Button className="w-full">
            <a className="text-xl md:text-2xl flex items-center" href="#">
              GitHub
              <BsGithub className="mx-5 cursor-pointer text-white" />
            </a>
          </Button>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src="./assets/image/demo (3).png"
            className="hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl"
            alt=""
          />
          <Button className="w-full">
            <a className="text-xl md:text-2xl flex items-center" href="#">
              GitHub
              <BsGithub className="mx-5 cursor-pointer text-white" />
            </a>
          </Button>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src="./assets/image/demo (4).png"
            className="hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl"
            alt=""
          />
          <Button className="w-full">
            <a className="text-xl md:text-2xl flex items-center" href="#">
              GitHub
              <BsGithub className="mx-5 cursor-pointer text-white" />
            </a>
          </Button>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src="./assets/image/demo (5).png"
            className="hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl"
            alt=""
          />
          <Button className="w-full">
            <a className="text-xl md:text-2xl flex items-center" href="#">
              GitHub
              <BsGithub className="mx-5 cursor-pointer text-white" />
            </a>
          </Button>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src="./assets/image/demo (6).png"
            className="hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl"
            alt=""
          />
          <Button className="w-full">
            <a className="text-xl md:text-2xl flex items-center" href="#">
              GitHub
              <BsGithub className="mx-5 cursor-pointer text-white" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

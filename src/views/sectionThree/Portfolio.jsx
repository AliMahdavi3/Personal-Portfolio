import React from "react";
import { BsGithub } from "react-icons/bs";
import { Button } from "flowbite-react";

const Portfolio = () => {
  const portfolio = [
    {id: 1, src: "./assets/image/demo (1).png", href: "https://github.com/AliMahdavi3/Onlin-LMS"},
    {id: 2, src: "./assets/image/demo (2).png", href: "https://github.com/AliMahdavi3/buildCon"},
    {id: 3, src: "./assets/image/demo (3).png", href: "https://github.com/AliMahdavi3/AdminPanel"},
    {id: 4, src: "./assets/image/demo (4).png", href: "https://github.com/AliMahdavi3/CryptoBase"},
    {id: 5, src: "./assets/image/demo (5).png", href: "https://github.com/AliMahdavi3/WeatherApp"},
    {id: 6, src: "./assets/image/demo (6).png", href: "https://github.com/AliMahdavi3/CodeYad-website-clone"},
  ]
  return (
    <>
      <div>
        <h3 className="text-3xl font_three
         dark:text-white py-1 font-semibold text-gray-600">  پروژه های من</h3>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 py-10 lg:flex-row lg:flex-wrap">
      {
        portfolio.map((porto) => {
          return (
            <div key={porto.id} className="basis-1/3 flex-1">
              <img src={porto.src} className="hover:scale-90 cursor-pointer duration-300 
              object-cover rounded-xl w-full h-full shadow-2xl"/>
              <Button className="w-full">
                <a className="text-xl md:text-2xl flex items-center" href={porto.href}>
                  GitHub
                  <BsGithub className="mx-5 cursor-pointer text-white" />
                </a>
              </Button>
            </div>
          )
        })
      }
      </div>
    </>
  );
};

export default Portfolio;

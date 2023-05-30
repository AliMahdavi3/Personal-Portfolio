import React, { useState } from "react";
import { FaTwitter, FaDev, FaTelegram, FaWindowClose, FaHamburger, FaWhatsappSquare, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Button } from "flowbite-react"

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-end bg-slate-200 shadow-xl header h-20 w-full">
        <div className="flex items-center me-5">
          <div className="flex items-center justify-between">
              {
                show ? (
              <FaWindowClose onClick={()=>setShow(!show)} className="md:hidden absolute rounded-full right-10 text-red-700 text-3xl"/>
                ) : (

              <FaHamburger onClick={()=>setShow(!show)} className="md:hidden absolute right-10 text-purple-700 text-2xl"/>
                )
              }
              <Button className="mx-2" gradientDuoTone="purpleToPink">
                بلاگ
              </Button>
              <Button className="mx-2" gradientDuoTone="purpleToBlue">
                رزومه من
              </Button>
          </div>
          <div className="hidden md:flex">
            <FaTwitter className="mx-2 md:mx-5 cursor-pointer hover:text-violet-800 text-sky-500 text-2xl"/>
            <FaTelegram className="mx-2 md:mx-5 cursor-pointer hover:text-violet-800 text-sky-700 text-2xl"/>
            <FaWhatsappSquare className="mx-2 md:mx-5 cursor-pointer hover:text-violet-800 text-green-500 text-2xl"/>
            <FaEnvelope className="mx-2 md:mx-5 cursor-pointer hover:text-violet-800 text-red-700 text-2xl"/>
            <FaLinkedin className="mx-2 md:mx-5 cursor-pointer hover:text-violet-800 text-blue-800 text-2xl"/>
          </div>
        </div>
      </div>

      <div className="md:hidden z-0 flex justify-center 
         items-center">
        <div className={`h-60 w-full duration-500 absolute rounded-3xl bg-slate-200
         ${show ? "top-24" : "-top-56"}`}>
          <ul className="text-center mt-10">
            <li className={`text-sm flex mb-2 
            items-center justify-center w-full gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
              <FaDev className='text-2xl text-cyan-700 font-semibold'/>
              <span className="origin-right text-cyan-700 font-semibold duration-200 text-lg">Front End Developer</span> 
            </li>
            <li className={`text-sm flex mb-2 
            items-center justify-center w-full gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
              <FaDev className='text-2xl text-cyan-700 font-semibold'/>
              <span className="origin-right text-cyan-700 font-semibold duration-200 text-lg">Front End Developer</span> 
            </li>
            <li className={`text-sm flex mb-2 
            items-center justify-center w-full gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
              <FaDev className='text-2xl text-cyan-700 font-semibold'/>
              <span className="origin-right text-cyan-700 font-semibold duration-200 text-lg">Front End Developer</span> 
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

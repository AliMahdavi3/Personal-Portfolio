import React, { useState } from 'react';
import { BsMoonStarsFill, BsGithub } from "react-icons/bs";
import { FaTelegram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import 'animate.css';

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <main className={darkMode ? "dark" : ""}>
        <main className={`px-10 md:px-20 lg:px-40 bg-blue-100 dark:bg-slate-700`}>
            <section className='min-h-screen flex justify-center items-center flex-col'>
                {/* navbar */}
                <nav className='py-10 mb-12 flex gap-96'>
                    <h1 className='text-xl font-semibold dark:text-amber-500'>FrontEndByAli</h1>
                    <ul className='flex items-center'>
                        <li>
                            <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
                        </li>
                        <li>
                            <a className='bg-gradient-to-r  from-cyan-500 to-teal-600 px-4 pt-1 pb-2 text-white rounded-lg ms-8' href="#">رزومه</a>
                        </li>
                    </ul>
                </nav>

                {/* content */}
                <div className='text-center p-10'>
                    <h1 className='text-5xl py-2 text-teal-600
                    animate__animated animate__slideInDown font-medium md:text-6xl'>Ali Mahdavi</h1>
                    <h2 className='text-2xl md:text-3xl py-4'>FrontEnd Developer</h2>
                    <p className='text-base md:text-xl max-w-xl mx-auto py-5 leading-8 text-gray-800'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Praesentium aliquid ullam hic iste reiciendis id libero adipisci 
                    </p>
                </div>

                <div className='text-3xl md:text-5xl flex justify-center gap-5 md:gap-10 text-slate-700 py-3'>
                    <BsGithub className='hover:text-blue-600 cursor-pointer'/>
                    <FaLinkedin className='hover:text-blue-800 cursor-pointer'/>
                    <FaEnvelope className='hover:text-blue-800 cursor-pointer'/>
                    <FaTelegram className='hover:text-blue-700 cursor-pointer'/>
                    <FaTwitter className='hover:text-blue-600 cursor-pointer'/>
                </div>

                <div className='w-64 h-64 md:w-96 duration-300 md:h-96 my-14 rounded-full bg-gradient-to-b from-teal-500'>
                    <img src="./assets/image/logo.png" className='scale-125' alt="logo" />
                </div>
            </section>

            <section>
                <div>
                    <h3 className='text-3xl py-1'>خدماتی که پیشنهاد میکنم</h3>
                    <p className='text-md py-2 text-gray-900 leading-8'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. <span>Lorem ipsum dolor sit.</span> Sequi animi illo enim minima 
                    tenetur dolorum.<span>Lorem ipsum dolor sit.</span>Lorem ipsum dolor sit amet.
                    </p>
                    <p className='text-md py-2 text-gray-900 leading-8'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. <span>Lorem ipsum dolor sit.</span> Sequi animi illo enim minima 
                    tenetur dolorum.<span>Lorem ipsum dolor sit.</span>Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <div className='lg:flex gap-10'>
                    <div className='flex justify-center items-center flex-col text-center content-center shadow-lg p-10 rounded-xl my-10'>
                        <img src="./assets/image/design.png" className='h-36 w-h-36' alt="design-logo" />
                        <h3 className='text-lg pt-8 pb-2 font-semibold'>طراحی زیبا</h3>
                        <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        . Asperiores ipsum quibusdam, culpa quod ducimus aspernatur!
                        </p>
                        <h4 className='py-4 text-teal-800'>ابزار های طراحی</h4>
                        <p className='py-1 text-slate-700'>photoshop</p>
                        <p className='py-1 text-slate-700'>figma</p>
                    </div>
                    <div className='flex justify-center items-center flex-col text-center content-center shadow-lg p-10 rounded-xl my-10'>
                        <img src="./assets/image/consulting.png" className='h-36 w-h-36' alt="design-logo" />
                        <h3 className='text-lg pt-8 pb-2 font-semibold'>طراحی زیبا</h3>
                        <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        . Asperiores ipsum quibusdam, culpa quod ducimus aspernatur!
                        </p>
                        <h4 className='py-4 text-teal-800'>ابزار های طراحی</h4>
                        <p className='py-1 text-slate-700'>photoshop</p>
                        <p className='py-1 text-slate-700'>figma</p>
                    </div>
                    <div className='flex justify-center items-center flex-col text-center content-center shadow-lg p-10 rounded-xl my-10'>
                        <img src="./assets/image/code.png" className='h-36 w-h-36' alt="design-logo" />
                        <h3 className='text-lg pt-8 pb-2 font-semibold'>طراحی زیبا</h3>
                        <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        . Asperiores ipsum quibusdam, culpa quod ducimus aspernatur!
                        </p>
                        <h4 className='py-4 text-teal-800'>ابزار های طراحی</h4>
                        <p className='py-1 text-slate-700'>photoshop</p>
                        <p className='py-1 text-slate-700'>figma</p>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h3 className='text-3xl py-1 '>Portfolio</h3>
                    <p className='text-md py-2 text-gray-900 leading-8'>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. <span>Lorem ipsum dolor sit.</span> Sequi animi illo enim minima 
                        tenetur dolorum.<span>Lorem ipsum dolor sit.</span>Lorem ipsum dolor sit amet.
                    </p>
                    <p className='text-md py-2 text-gray-900 leading-8'>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. <span>Lorem ipsum dolor sit.</span> Sequi animi illo enim minima 
                        tenetur dolorum.<span>Lorem ipsum dolor sit.</span>Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                    <div className='basis-1/3 flex-1'>
                        <img src="./assets/image/demo (1).png" className='hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl' alt="" />
                    </div>
                    <div className='basis-1/3 flex-1'>
                        <img src="./assets/image/demo (2).png" className='hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl' alt="" />
                    </div>
                    <div className='basis-1/3 flex-1'>
                        <img src="./assets/image/demo (3).png" className='hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl' alt="" />
                    </div>
                    <div className='basis-1/3 flex-1'>
                        <img src="./assets/image/demo (4).png" className='hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl' alt="" />
                    </div>
                    <div className='basis-1/3 flex-1'>
                        <img src="./assets/image/demo (5).png" className='hover:scale-90 cursor-pointer duration-300 object-cover rounded-xl w-full h-full shadow-2xl' alt="" />
                    </div>
                </div>
            </section>
        </main>
        </main>
    )
}

export default Navbar
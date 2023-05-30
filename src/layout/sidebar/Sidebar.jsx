import React, { useState } from 'react'
import { FaArrowCircleRight, FaDev } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <main className='hidden md:flex top-0 fixed'>
      <div className={`${open ? "w-72" : "w-20"} p-5 pt-8 duration-300 h-screen bg-sky-600 relative`}>
        <FaArrowCircleRight 
        className={`absolute cursor-pointer rounded-full -left-3 top-9 w-7 h-7 
        text-blue-900 bg-slate-200 border-2 border-amber-700 text-xs ${!open && "rotate-180"}`}
        onClick={()=>setOpen(!open)}
        />
        <div className='flex gap-x-4 items-center'>
          <FaDev className={`cursor-pointer text-4xl text-amber-600 duration-500 ${open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-right font-medium text-xl duration-300 ${!open && "scale-0"}`}>FrontEnd Developer</h1>
        </div>
        <div className='flex justify-center mt-5'>
          <img src="./assets/image/pro.jpg" className="rounded-full w-28 border-4 border-rose-800" alt="" />
        </div>
        <ul className='pt-5'>
          <li className={`text-sm flex mb-2 
          items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
            <FaDev className='text-2xl text-white font-semibold'/>
            <span className={`${!open && "hidden"} origin-right text-white duration-200 text-lg`}>Front End Developer</span> 
          </li>
          <li className={`text-sm flex mb-2 
          items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
            <FaDev className='text-2xl text-white font-semibold'/>
            <span className={`${!open && "hidden"} origin-right text-white duration-200 text-xl`}>dashboard</span> 
          </li>
          <li className={`text-sm flex mb-2 
          items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
            <FaDev className='text-2xl text-white font-semibold'/>
            <span className={`${!open && "hidden"} origin-right text-white duration-200 text-xl`}>dashboard</span> 
          </li>
          <li className={`text-sm flex mb-2 
          items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
            <FaDev className='text-2xl text-white font-semibold'/>
            <span className={`${!open && "hidden"} origin-right text-white duration-200 text-xl`}>dashboard</span> 
          </li>
          <li className={`text-sm flex mb-2 
          items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
            <FaDev className='text-2xl text-white font-semibold'/>
            <span className={`${!open && "hidden"} origin-right text-white duration-200 text-xl`}>dashboard</span> 
          </li>
          <br />
          <li className={`text-sm flex mb-2 
          items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}> 
            <FaDev className='text-2xl text-white font-semibold'/>
            <span className={`${!open && "hidden"} origin-right text-white duration-200 text-xl`}>dashboard</span> 
          </li>
          <hr />
        </ul>
      </div>
    </main>
  )
}

export default Sidebar
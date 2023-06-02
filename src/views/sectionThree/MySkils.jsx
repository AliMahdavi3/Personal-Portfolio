import React from "react";

const MySkils = () => {
  const skils = [
    {id: 1, src: "./assets/image/logo/h.png"},
    {id: 2, src: "./assets/image/logo/cs.png"},
    {id: 3, src: "./assets/image/logo/js.png"},
    {id: 4, src: "./assets/image/logo/re.png"},
    {id: 5, src: "./assets/image/logo/ta.png"},
    {id: 6, src: "./assets/image/logo/bo.svg"},
    {id: 7, src: "./assets/image/logo/f.png"},
    {id: 8, src: "./assets/image/logo/mo.png"},
    {id: 9, src: "./assets/image/logo/nod.png"},
  ]
  return (
    <div>
      <h1 className="font-semibold text-3xl font_three text-gray-700 dark:text-white">تکنولوژی هایی که در پروژه ها استفاده میشه</h1>
      <div className="gap-5 grid grid-cols-4 my-10 md:my-20">
      {
        skils.map((skil) => {
          return (
            <div key={skil.id} className="bg-sky-100 shadow-lg rounded-3xl hover:scale-105 duration-300 py-5 px-10 grid col-span-4 md:col-span-2 lg:col-span-1 place-content-center" >
              <img src={skil.src}/>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default MySkils;

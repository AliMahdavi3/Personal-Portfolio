import React from "react";

const Skils = () => {
  return (
    <div className="lg:flex gap-10 font_two">
      <div className="flex w-full dark:bg-slate-400 justify-center items-center flex-col text-center content-center shadow-xl hover:scale-105 duration-200 bg-sky-100 p-10 rounded-xl my-10">
        <img
          src="./assets/image/design.png"
          className="h-36 w-h-36"
          alt="design-logo"
        />
        <h3 className="text-lg pt-8 pb-2 text-blue-700 md:text-2xl font-semibold">طراحی زیبا</h3>
        <p className="py-2 text-gray-800 font-semibold text-base md:text-xl">
          طراحی های زیبا با رابط کاربری فوق العاده و مطابق با به روز ترین
          تکنولوژی های دنیا
        </p>
      </div>
      <div className="flex w-full dark:bg-slate-400 justify-center items-center flex-col text-center content-center shadow-xl hover:scale-105 duration-200 bg-sky-100 p-10 rounded-xl my-10">
        <img
          src="./assets/image/consulting.png"
          className="h-36 w-h-36"
          alt="design-logo"
        />
        <h3 className="text-lg pt-8 pb-2 text-amber-600 md:text-2xl font-semibold">پشتیبانی</h3>
        <p className="py-2 text-gray-800 font-semibold text-base md:text-xl">
          در صورت وقوع هرگونه مشکل یا داشتن سوالات مرتبت پشتیبانی به صورت کامل انجام میشه
        </p>

      </div>
      <div className="flex w-full dark:bg-slate-400 justify-center items-center flex-col text-center content-center shadow-xl hover:scale-105 duration-200 bg-sky-100 p-10 rounded-xl my-10">
        <img
          src="./assets/image/code.png"
          className="h-36 w-h-36"
          alt="design-logo"
        />
        <h3 className="text-lg pt-8 pb-2 text-teal-600 md:text-2xl font-semibold">کد نویسی تمیز</h3>
        <p className="py-2 text-gray-800 font-semibold text-base md:text-xl">
          تمیز بودن و قابل فهم بودن کد های نوشته شده با رعایت اصول Clean Code
        </p>
      </div>
    </div>
  );
};

export default Skils;

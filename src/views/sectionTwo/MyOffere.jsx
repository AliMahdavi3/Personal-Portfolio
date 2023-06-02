import React from "react";

const MyOffere = () => {
  return (
    <div className="dark:bg-slate-400 font_two py-10 px-10 rounded-xl">
      <h3 className="text-3xl font-semibold text-gray-600 py-1">خدمات من</h3>
      <p className="text-md md:text-xl font-semibold py-2 text-gray-600 leading-8">
        انجام پروژه های فرانت اند و همچنین طراحی های
        <span className="font-semibold text-rose-500 text-xl md:text-3xl">
          UI/UX
        </span>
        با استفاده از کتاب خانه ها و فریم ورک ها قدرتمندی همچون
        <span className="font-semibold text-blue-700 text-xl md:text-3xl">
          REACT
        </span>
        و
        <span className="font-semibold text-sky-600 text-xl md:text-3xl">
          TailwindCss
        </span>
        . دارای طراحی واکنش گرا یا ریسپانسیو و قابل اجرا بر روی تمامی دستگاه ها
      </p>
      <p className="text-md md:text-xl py-2 font-semibold text-gray-600 leading-8">
        خصوصیات و تکنولوژی هایی که در پروژه ها به کار برده میشه :
      </p>
    </div>
  );
};

export default MyOffere;

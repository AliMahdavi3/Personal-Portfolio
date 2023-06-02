import React from "react";

const AboutContent = () => {
  return (
    <div className="text-center p-10">
      <h1
        className="text-5xl py-2 text-teal-600
            animate__animated animate__slideInDown dark:text-pink-700 font-medium md:text-6xl"
      >
        Ali Mahdavi
      </h1>
      <h2 className="text-2xl md:text-3xl dark:text-white py-4">
        طراح و توسعه دهنده فرانت اند
      </h2>
      <p className="text-base md:text-xl dark:text-white max-w-xl mx-auto py-5 leading-8 text-gray-800">
        <span className="text-sky-700 text-xl md:text-3xl font-semibold">طراحی زیبا </span>
        <span className="text-green-700 text-xl md:text-3xl font-semibold">قیمت مناسب </span>
        <span className="text-amber-500 text-xl md:text-3xl font-semibold">کدنویسی تمیز </span>
        <p className="mt-3 text-xl md:text-2xl font-semibold">
          سلام, من علی هستم یک طراح و توسعه دهنده با دو سال سابقه تو حوزه فرانت
          اند
        </p>
      </p>
    </div>
  );
};

export default AboutContent;

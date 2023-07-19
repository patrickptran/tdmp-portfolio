import React from "react";
import ProfileImg from "../public/img/cartoonize_IMG_9018 (1).jpg";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10 ">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-red-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImage"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-3xl font-bold text-white">Patrick Phuong TRAN</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-red-300">
          Software Engineering Student
        </h3>
        <p className="text-base tracking-wide text-center md:text-left ">
          I love exploring and creating 🚀 I'm a lifelong learner and I love the
          Vietnamese food so much 🍜.
        </p>
      </div>
    </div>
  );
};
export default Banner;

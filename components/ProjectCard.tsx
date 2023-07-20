import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  link: string;
  img: string;
}

const ProjectCard = ({ title, img, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-auto border-[1px] border-red-600 overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[20%] transition-transform duration-[1s]"
          src={img}
          alt="tetris"
          width={350}
          height={350}
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-red-600 text-white text-center font-semibold duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;

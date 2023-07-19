import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import Image from "next/image";
import tetris from "../public/img/projects/tetrisReact.png";
import disney from "../public/img/projects/disney-plus-clone-4b3a7.web.app_home.png";
import travel from "../public/img/projects/localhost_3000_.png";
import jamming from "../public/img/projects/chimerical-tapioca-9e5c75.netlify.app_.png";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <a href="https://mellow-trifle-e0fc29.netlify.app/" target="_blank">
        <div className="w-80 h-80 border-[1px] border-red-600 overflow-hidden relative rounded-lg group ">
          <Image
            className="object-cover translate-y-0 group-hover:-translate-y-[10%] transition-transform duration-[1s]"
            src={tetris}
            alt="tetris"
          />
          <p className="absolute hidden group-hover:inline-block bottom-0 w-full h-8 bg-red-600 text-white text-center align-middle font-semibold  duration-1000 ">
            Tetris Clone
          </p>
        </div>
      </a>
    </div>
  );
};

export default Projects;

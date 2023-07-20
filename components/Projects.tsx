import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";

import tetris from "../public/img/projects/tetrisReact.png";
import disney from "../public/img/projects/disney-plus-clone-4b3a7.web.app_home.png";
import travel from "../public/img/projects/localhost_3000_.png";
import jamming from "../public/img/projects/chimerical-tapioca-9e5c75.netlify.app_.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={tetris.src}
          title="Tetris Game"
          link="https://github.com/MangTran/tdmp-tetris"
        />
        <ProjectCard
          img={travel.src}
          title="Travel Map"
          link="https://github.com/MangTran/travel-map-tdmp"
        />
        <ProjectCard
          img={disney.src}
          title="Disney+ Clone"
          link="https://github.com/MangTran/disney-clone-tdmp"
        />
        <ProjectCard
          img={jamming.src}
          title="Playlist Application"
          link="https://github.com/MangTran/Jamming"
        />
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { SiInformatica } from "react-icons/si";
import Title from "./Title";
const Aboutme = () => {
  return (
    <div className="wrapper ">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Greetings! I'm Patrick Phuong TRAN, a passionate software engineer in
          my final year of college. Proficient in JavaScript, Python, my journey
          into software development has been exhilarating. Throughout college,
          I've honed front-end and back-end skills, focusing on dynamic and
          user-friendly React web applications. With hands-on experience in
          diverse projects, including REST API integration and responsive
          design, I'm committed to continuous growth and impactful contributions
          to projects and teams.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;

import React from "react";
import Title from "./Title";
import { GiGiftOfKnowledge } from "react-icons/gi";
import SkillsInput from "./SkillsInput";

const Skill = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiGiftOfKnowledge />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />

        <SkillsInput title="Python3" link="#" />

        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        <SkillsInput title="Redux Toolkit" link="#" />
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
        <SkillsInput title="Netlify" link="https://www.netlify.com/" />
        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />

        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
      </div>
    </div>
  );
};

export default Skill;

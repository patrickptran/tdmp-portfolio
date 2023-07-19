import React from "react";

type Props = {
  title: string;
  link: string;
};

const SkillsInput = ({ link, title }: Props) => {
  return (
    <a href={link} target="#">
      <p className="border border-red-600 px-6 py-2 text-xl tracking-wide bg-transparent text-white hover:text-red-600 hover:border-white hover: bg-black duration-500  rounded-xl">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;

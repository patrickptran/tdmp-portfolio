import React, { ReactNode } from "react";
import { SiReactivex } from "react-icons/si";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
}

const ExperienceCard = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-red-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg tracking-wide text-grey-400">{subTitle}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

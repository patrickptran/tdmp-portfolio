import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper ">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 justify-center ">
        <h2 className="text-2xl font-bold">Thanks for visiting!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am open to internships, part-time and full-time junior positions in
          software engineer fields. Let's build something amazing together!
        </p>
        <p>Do I have your attention?</p>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;to=tdmp1208@gmail.com&body=Hello! {Write something here} Thanks!"
          target="_blank"
        >
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via blue-700 to-indigo-950 text-xl  text-center font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-500">
            Hit me up :)
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/MangTran/" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/tran-dinh-minh-phuong-28297821b/"
        />
      </div>
    </div>
  );
};

export default Contact;

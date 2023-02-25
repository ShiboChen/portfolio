import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Skill = ({ title, level }) => {
  return (
    <div className="text-xl basis-1/2">
      <p className="relative px-8">
        {title}
        <FaCheckCircle className="absolute top-1 left-0" />
      </p>
      <p className="px-8 text-sm text-grey">{level}</p>
    </div>
  );
};

export default Skill;

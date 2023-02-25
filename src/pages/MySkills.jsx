import React from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skill";

const Skills = () => {
  const skillSet = [
    { title: "HTML", level: "Advanced" },
    { title: "CSS", level: "Advanced" },
    { title: "Javascript", level: "Advanced" },
    { title: "React", level: "Advanced" },
    { title: "Tailwind", level: "Intermediate" },
    { title: "Bootstrap", level: "Intermediate" },
    { title: "Material UI", level: "Intermediate" },
    { title: "Git", level: "Intermediate" },
  ];

  const skillSet2 = [
    { title: "Node.js", level: "Intermediate" },
    { title: "Express.js", level: "Intermediate" },
    { title: "MongoDB", level: "Intermediate" },
    { title: "MySQL", level: "Beginner" },
    { title: "Python", level: "Intermediate" },
    { title: "Postman", level: "Intermediate" },
    { title: "Heroku", level: "beginner" },
    { title: "JWT", level: "beginner" },
  ]

  return (
    <section id="skills" className="middle">
      {/*  HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="text-center text-[2rem] font-bold mb-5">
          <h2>My <span className="text-red-400">Skills</span></h2>
        </div>
      </motion.div>

      {/* BODY */}
      <div className="flex sm:flex-row sm:justify-between sm:gap-16 gap-10 flex-col">
        {/* Front-End */}
        <div className="basis-1/2 px-10 border border-solid border-grey rounded-md">
          <h3 className="text-center font-bold my-4">Frond-End Development</h3>
          <div className="flex justify-between flex-wrap my-3 sm:px-4">
            {skillSet.map((item, idx) => {
              return <Skill key={idx} {...item} />;
            })}
          </div>
        </div>

        {/* Back-End */}
        <div className="basis-1/2 px-10 border border-solid border-grey rounded-md">
          <h3 className="text-center font-bold my-4">Back-End Development</h3>
          <div className="flex justify-between flex-wrap my-3 sm:px-4">
            {skillSet2.map((item, idx) => {
              return <Skill key={idx} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

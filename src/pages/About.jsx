import React from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaLaptopCode, FaPager } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="middle">
      {/*  HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="text-center text-[2rem] font-bold mb-5">
          <h2>
            <span className="text-pink-400">About</span> Me
          </h2>
        </div>
      </motion.div>

      {/* BODY */}
      <div className="flex sm:flex-row sm:justify-between sm:items-center gap-10 flex-col">
        {/* IMAGE */}
        <div className="sm:px-10 basis-2/5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/447px-Empire_State_Building_from_the_Top_of_the_Rock.jpg?20160430220804"
            alt="Empire State Building"
            className="w-full h-full rounded-[10px]"
          />
        </div>

        {/* MAIN TEXT */}
        <div className="text-[1rem] basis-3/5">
          <div className="flex text-center sm:gap-10 gap-6 my-3">
            <div className="border border-solid border-grey rounded-md p-4 w-[125px]">
              <div className="flex justify-center text-blue text-[2rem] font-bold">
                <FaLaptopCode />
              </div>
              <div className="my-3 text-[1rem] font-bold">Experience</div>
              <div className="text-sm text-grey">1+ Years</div>
            </div>
            <div className="border border-solid border-grey rounded-md p-4 w-[125px]">
              <div className="flex justify-center text-blue text-[2rem] font-bold">
                <FaPager />
              </div>
              <div className="my-3 text-[1rem] font-bold">Completed</div>
              <div className="text-sm text-grey">10+ Projects</div>
            </div>
            <div className="border border-solid border-grey rounded-md p-4 w-[125px]">
              <div className="flex justify-center text-blue text-[2rem] font-bold">
                <FaCalendar />
              </div>
              <div className="my-3 text-[1rem] font-bold">Support</div>
              <div className="text-sm text-grey">Online 24/7</div>
            </div>
          </div>
          <h3 className="text-[1.5rem] font-bold">Software Developer</h3>
          <p className="my-4">
            Hello Everyone! I'm Shibo Chen based in New York City. I have a
            passion for creating innovative and user-friendly applications. I
            have a strong background in computer science and I am eager to apply
            my knowledge to create meaningful solutions.
          </p>

          <ul className="p-2">
            <li>- Extremely eager to learn new skills and challenge myself</li>
            <li>
              - Solid knowledge of multiple programming languages, such as
              JavaScript/ES6, Python, C++, HTML/HTML 5, CSS/CSS3
            </li>
            <li>
              - Experience with modern development frameworks such as React,
              jQuery, Express
            </li>
            <li>
              - Ability to develop both front-end and back-end components of an
              application
            </li>
            <li>- Excellent problem-solving skills and attention to detail</li>
          </ul>

          <button className="py-2 px-4 bg-blue shadow-md text-white rounded-md mt-3">
            <a
              href="https://drive.google.com/file/d/1lSgGhYc57ra3IOaiEhgQwh5u1X4oWAn-/view?usp=sharing"
              target="_blank"
              download
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

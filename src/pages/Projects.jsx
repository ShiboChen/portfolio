import React from "react";
import { motion } from "framer-motion";
import Project_1 from "../assets/Project_1.JPG";
import Project_2 from "../assets/Project_2.JPG";
import Project_3 from "../assets/Project_3.JPG";
import Project_4 from "../assets/Project_4.PNG";
import Project_5 from "../assets/Project_5.PNG";
import Project_6 from "../assets/Project_6.PNG";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, imgSrc, text, linkSrc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-15 flex flex-col justify-center items-center text-center p-16 text-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        
        <p className="text-2xl"><a href={linkSrc} target="_blank">{title}</a></p>
        <p className="mt-7">{text}</p>
      </div>
      <img src={imgSrc} alt={title} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="middle">
      {/* HEADINGS */}
      <motion.div
        className="sm:w-3/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-4xl">
            <span className="text-yellow-300">PRO</span>JECTS
          </p>
        </div>
        <p className="my-3">
          The below projects are my recent works. If you're interested in them,
          Please click them and view them in live mode.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <Project
            title="Project_One"
            imgSrc={Project_1}
            text={"Pro Tech Electronics"}
            linkSrc={"https://proelectronicsapp.herokuapp.com/"}
          />
          <Project
            title="Project_Two"
            imgSrc={Project_2}
            text={"Expense Tracker App"}
            linkSrc={"https://express-tracker-app.herokuapp.com/"}
          />
          <Project
            title="Project_Three"
            imgSrc={Project_3}
            text={"Image Processing App"}
            linkSrc={"#"}
          />
          <Project
            title="Project_Four"
            imgSrc={Project_4}
            text={"Fruit Slice Game"}
            linkSrc={"https://peaceful-caverns-67754.herokuapp.com/index.html"}
          />
          <Project
            title="Project_Five"
            imgSrc={Project_5}
            text={"Wikipedia Search"}
            linkSrc={"https://codepen.io/shibochen/full/zpWMGa"}
          />
          <Project
            title="Project_Six"
            imgSrc={Project_6}
            text={"RGB Game"}
            linkSrc={"https://codepen.io/shibochen/project/editor/XqNQVr"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

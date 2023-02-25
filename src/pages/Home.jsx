import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.JPG";
import { FaLinkedin, FaGithub, FaFacebook, FaCodepen } from "react-icons/fa";

const Home = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="middle flex sm:flex-row sm:justify-between sm:items-center gap-16 flex-col-reverse"
    >
      {/* MAIN TEXT */}
      <div className="basis-2/5 text-center sm:text-start">
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
          <p className="text-[2rem] font-bold">Hello, I'm </p>
          <h1 className="text-[3rem] font-bold">Shibo Chen</h1>
          <h2 className="text-[1rem] mb-4">Software Developer</h2>
          <p className="opacity-80 text-[1rem]">
            I'm a Software Developer based in New York, and I'm very
            passionate and dedicated to my work.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-center sm:justify-start mt-4 gap-4">
            <a
              href="https://drive.google.com/file/d/1lSgGhYc57ra3IOaiEhgQwh5u1X4oWAn-/view?usp=sharing"
              target="_blank"
              className="py-2 px-4  rounded-md shadow-md bg-blue text-white"
              download
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="py-2 px-4 rounded-md shadow-md bg-blue text-white"
              onClick={() => setSelectedPage("contact")}
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-center sm:justify-start my-6 text-2xl text-blue">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://www.facebook.com/shibo.chen.16"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className="hover:opacity-50 transition duration-500 mx-5"
              href="https://github.com/shibochen"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://www.linkedin.com/in/shibo-chen-506b53131/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:opacity-50 transition duration-500 ml-5"
              href="https://codepen.io/shibochen/"
              target="_blank"
              rel="noreferrer"
            >
              <FaCodepen />
            </a>
          </div>
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <div className="basis-3/5 flex justify-center mt-16">
        <img
          src={avatar}
          alt="avatar"
          className="w-full h-full max-w-[400px] md:max-w-[600px] object-cover"
          style={{borderRadius: "50%"}}
        />
      </div>
    </section>
  );
};

export default Home;

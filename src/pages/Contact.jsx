import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="middle">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-full text-center"
      >
        <div>
          <p className="font-semibold text-4xl">
            <span className="text-yellow-400">CONTACT ME</span> TO GET STARTED
          </p>
        </div>
      </motion.div>

      {/* Info & FORM */}
      <div className="sm:flex sm:justify-between mt-10">
        {/* Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-2/5 flex justify-center"
        >
          <div className="flex sm:flex-col sm:justify-evenly sm:items-center gap-6 flex-row flex-wrap justify-center">
            <div className="text-center border border-solid border-grey rounded-md sm:p-5 p-2 min-w-[222px]">
              <div className="flex justify-center text-blue text-[2rem] font-bold">
                <FaMapMarkerAlt />
              </div>
              <div className="my-3 text-[1rem] font-bold">Location</div>
              <div className="text-sm text-grey">Flushing, New York </div>
            </div>
            <div className="text-center border border-solid border-grey rounded-md sm:p-5 p-2 min-w-[222px]">
              <div className="flex justify-center text-blue text-[2rem] font-bold">
                <FaEnvelope />
              </div>
              <div className="my-3 text-[1rem] font-bold">Email Address</div>
              <div className="text-sm text-grey">shibochenny@gmail.com</div>
            </div>
            <div className="text-center border border-solid border-grey rounded-md sm:p-5 p-2 min-w-[222px]">
              <div className="flex justify-center text-blue text-[2rem] font-bold">
                <FaPhone />
              </div>
              <div className="my-3 text-[1rem] font-bold">Cell Phone</div>
              <div className="text-sm text-grey">(1)347-257-2778</div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-3/5 mt-10 sm:mt-0 border border-solid border-grey rounded-md px-8"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/ffdb43d0116878779bc16db84bcb2bc7"
            method="POST"
            className="pt-2"
          >
            <label htmlFor="name" className="text-[1rem]">
              Your Full Name
            </label>
            <input
              className="w-full p-2 border border-solid border-grey rounded-md my-2"
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name..."
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red-400 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <label htmlFor="email" className="text-[1rem]">
              Your Email
            </label>
            <input
              className="w-full p-2 border border-solid border-grey rounded-md my-2"
              type="text"
              id="email"
              name="email"
              placeholder="Your Email..."
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <label htmlFor="message" className="text-[1rem]">
              Your Message
            </label>
            <textarea
              className="w-full p-2 border border-solid border-grey rounded-md my-2"
              name="message"
              id="message"
              cols="320"
              rows="5"
              placeholder="Writing Message Here..."
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              className="p-2 rounded-md cursor-pointer my-3 bg-blue text-white"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [successFeedbackMessage, setSuccessFeedbackMessage] = useState("");
  const [errorFeedbackMessage, setErrorFeedbackMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_t4d9naa",
        "template_7wc1d3o",
        {
          from_name: form.name,
          to_name: "Favor",
          from_email: form.email,
          to_email: "ffasunwon@gmail.com",
          message: form.message,
        },
        "T-DFiYYtiD0ky6v4s"
      )
      .then(
        () => {
          setLoading(false);
          setSuccessFeedbackMessage(
            "Thanks for reaching out. I will get back to you ASAP"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setSuccessFeedbackMessage("");
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setErrorFeedbackMessage(
            "Sorry doesnt look like the email was sent properly"
          );
          setTimeout(() => {
            setErrorFeedbackMessage("");
          }, 2000);
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Reach out!</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium 
              focus:outline-none focus:border-[#804dee] focus:ring-1 focus:ring-[#804dee]`}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium 
              focus:outline-none focus:border-[#804dee] focus:ring-1 focus:ring-[#804dee]`}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              required
              rows="7"
              style={{ resize: "none" }}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what would you like to discuss?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outlined-none border-none font-medium 
              focus:outline-none focus:border-[#804dee] focus:ring-1 focus:ring-[#804dee]`}
            />
          </label>
          {successFeedbackMessage ? (
            <label className="green-text-gradient">
              {successFeedbackMessage}
            </label>
          ) : errorFeedbackMessage ? (
            <label className="orange-text-gradient">
              {errorFeedbackMessage}
            </label>
          ) : null}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-full md:w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

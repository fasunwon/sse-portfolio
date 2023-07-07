import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#EE3E38]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-red-600`}>
            Hey all, I am <span className="text-[#EE3E38]"> Favor</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I am on the path of mastering <br className="sm:block hidden" />
            code from Front-end to Back-end
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="relative">
        <div className="absolute -top-20 w-full flex justify-center items-center z-10">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

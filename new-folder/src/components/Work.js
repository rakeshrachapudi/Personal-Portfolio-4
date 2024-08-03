import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";

const Work = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Following projects showcases my skills and experience through
                real-world examples of my work. It reflects my ability to solve
                complex problems.
              </p>
              <button className="btn btn-sm" onClick={handleToggleShowMore}>
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="https://rakeshrachapudi.onrender.com/" target="blank">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transitoin-all duration-300"></div>
              </a>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  <a
                    href="https://rakeshrachapudi.onrender.com/"
                    target="blank"
                  >
                    My Personal Portfolio
                  </a>
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <div className="flex-1 flex flex-col gap-y-10">
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <a
                href="https://rakeshrachapudi-hoo-bank.onrender.com/"
                target="blank"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transitoin-all duration-300"></div>
              </a>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  <a
                    href="https://rakeshrachapudi-hoo-bank.onrender.com/"
                    target="blank"
                  >
                    Modern Banking Application
                  </a>
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <a
                href="https://rakeshrachapudi-restaurant.onrender.com/"
                target="blank"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transitoin-all duration-300"></div>
              </a>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  <a
                    href="https://rakeshrachapudi-restaurant.onrender.com/"
                    target="blank"
                  >
                    Rotter Restaurant
                  </a>
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </motion.div>
          </div>
        </div>
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-x-10 mt-10"
            >
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <a
                    href="https://rachapudirakesh.onrender.com/"
                    target="blank"
                  >
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  </a>
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={Img4}
                    alt=""
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">
                      <a
                        href="https://rachapudirakesh.onrender.com/"
                        target="blank"
                      >
                        My Personal 3D Portfolio
                      </a>
                    </span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">Project Title</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col gap-y-10"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <a
                    href="https://rakeshrachapudi-gpt-3.onrender.com/"
                    target="blank"
                  >
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  </a>
                  <img
                    className="group-hover:scale-125 transition-all duration-500"
                    src={Img5}
                    alt=""
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">
                      <a
                        href="https://rakeshrachapudi-gpt-3.onrender.com/"
                        target="blank"
                      >
                        What Is GPT-3
                      </a>
                    </span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">Project Title</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;

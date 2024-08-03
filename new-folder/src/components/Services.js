import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Designer",
    description:
      "Services that provides the best quality and at the request of the client, with professional work and customer support.",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      "Services that provides the best quality and at the request of the client, with professional work and customer support.",
    link: "Learn more",
  },
  {
    name: "Digital Animator",
    description:
      "Services that provides the best quality and at the request of the client, with professional work and customer support.",
    link: "Learn more",
  },
  {
    name: "Content Creator",
    description:
      "Services that provides the best quality and at the request of the client, with professional work and customer support.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Offer</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a skilled frontend developer with experience in TypeScript and
              JavaScript.
            </h3>
            <a href="https://rakeshrachapudi.onrender.com/" target="blank">
              <button className="btn btn-sm">My work</button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

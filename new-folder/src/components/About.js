import React, { useState, useEffect } from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    // Your WhatsApp phone number
    const phoneNumber = "+918978454609"; // Replace with your WhatsApp number

    // Construct WhatsApp URL
    const url = `https://wa.me/${phoneNumber}`;

    setWhatsappUrl(url);
  }, []);

  const handleContactMeClick = () => {
    // Open WhatsApp URL in a new tab/window
    if (whatsappUrl) {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              I am a Frontend Developer. Passionate about designing beautiful
              web interfaces.
            </h3>
            <p className="mb-6">
              I'm a quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-1 mt-4 leading-none">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-1 mt-4 leading-none">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-1 mt-4 leading-none">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Internships <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a href="">
                <button className="btn btn-lg" onClick={handleContactMeClick}>
                  Contact me
                </button>
              </a>
              <a
                href="https://rakeshrachapudi.onrender.com/"
                target="blank"
                className="text-gradient btn-link"
              >
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

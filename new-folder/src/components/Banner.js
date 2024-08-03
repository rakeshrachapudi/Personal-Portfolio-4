import React, { useState, useEffect } from "react";
import Image from "../assets/avatar.png";

import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import "../components/Banner.css";

const Banner = () => {
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
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="user-s cantainer mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              RAKESH <span>RACHAPUDI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I'm a</span>
              <TypeAnimation
                sequence={["Frontend Developer", 2000, "UI/UX Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a skilled frontend developer with experience in TypeScript and
              JavaScript, and expertise in
              <br className="lg:hidden" /> frameworks like React, Node.js, and
              Three.js. Let's work together to bring your ideas to life!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg" onClick={handleContactMeClick}>
                Contact me
              </button>
              <a
                href="https://rakeshrachapudi.onrender.com/"
                target="blank"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/rakesh-rachapudi-4572b22b4/"
                target="blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/rakeshrachapudi/" target="blank">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/i_.am_.vicky/" target="blank">
                <FaInstagram />
              </a>
              <a href="https://x.com/RakeshRachpudi" target="blank">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]"
          >
            <img src={Image} alt=""></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React, { useState } from "react";

import { motion } from "framer-motion";

import emailjs from "emailjs-com";

import { fadeIn } from "../variants";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [newMessage, setNewMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_seobqxq",
        "template_07ceip1",
        templateParams,
        "mw-uMxCuF_KirqpgB"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSent(true);
        setIsSending(false);
        setNewMessage(false);
        // Optionally clear the form after successful submission
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSent(false);
          setNewMessage(true);
          setTimeout(() => {
            setNewMessage(false);
          }, 4000);
        }, 7000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSent(false);
        setIsSending(false);
      });
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all hover:border-accent"
              type="text"
              placeholder="RAKESH RACHAPUDI"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all hover:border-accent"
              type="text"
              placeholder="rakeshrachapudi04@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full focus:border-accent transition-all resize-none mb-12 hover:border-accent"
              placeholder="Wanna say something!..😉"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {sent && (
              <div className="text-red-500 mb-4">
                🥵Whoa Whoa Whoa!🤯 Your message has sparked a fire!🔥 But just
                in case, I'll douse it with water!💦
              </div>
            )}
            {newMessage && (
              <div className="text-green-500 mb-4">
                Kidding!😛 Your message has been sent successfully 😌
              </div>
            )}
            <button type="submit" className="btn btn-lg">
              {isSending ? "Sending..." : "Send"}
            </button>
            <div className="flex justify-center w-full mt-6 space-x-4">
              <a
                href="https://www.linkedin.com/in/rakesh-rachapudi-4572b22b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="text-white hover:text-blue-700 transition-all"
                />
              </a>
              <a
                href="https://github.com/rakeshrachapudi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={30}
                  className="text-white hover:text-gray-700 transition-all"
                />
              </a>
              <a
                href="https://x.com/RakeshRachpudi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={30}
                  className="text-white hover:text-blue-400 transition-all"
                />
              </a>
              <a
                href="https://www.instagram.com/i_.am_.vicky/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={30}
                  className="text-white hover:text-pink-600 transition-all"
                />
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

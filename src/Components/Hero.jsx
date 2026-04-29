import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Hero = ({ scrollToId }) => {
  return (
    <motion.section
      id="hero"
      className="bg-black min-h-[72vh] flex items-center"
      aria-label="Hero"
      initial={{ opacity: 0.9, y: 50 }} // start hidden and slightly down
      whileInView={{ opacity: 1, y: 0 }} // fade + move up when visible
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} // smooth timing
      viewport={{ once: true }} // animate only once
    >
      <div className="mx-auto py-32 px-6 sm:px-10 md:px-20 lg:px-32 grid md:grid-cols-2 items-center">
        <div className="mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-xl md:text-2xl font-normal">Hi, I’m</span>{" "}
            <br />
            <span className="text-[#32cd32]">Muhammad Ali</span>
            <br />
            SQA Engineer
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl">
            With more than 2 years of experience in software quality assurance, I
            specialize in ensuring the functionality, performance, and usability
            of web applications and websites. My expertise includes manual
            testing, API testing using Postman, performance testing with JMeter,
            and automation using Playwright. Delivering reliable, high-quality,
            and user-friendly software through detailed analysis and rigorous
            validation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#32cd32] text-white
                font-semibold hover:bg-transparent border-[#32cd32] border-2 "
            >
              Contact Me
            </button>

            <div className="flex items-center gap-4 ml-2">
              <a
                href="mailto:muhammadali85233@gmail.com"
                className="text-white hover:text-gray-400 transition"
              >
                <FaEnvelope size={28} />
              </a>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#1EBE5D] transition"
              >
                <FaWhatsapp size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-ali-74283b199"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#004182] transition"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-64 h-84 md:w-80 md:h-[28rem] rounded-xl rounded-xl border-2 border-[#32cd32] md:border-0 ">
            <img
              src="/Profile.png"
              alt="Profile"
              className="object-cover w-full h-full"
              onError={(e) =>
                (e.currentTarget.src =
                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='%23111111'/><text x='50%' y='50%' fill='%23ffffff' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24'>Profile Image</text></svg>")
              }
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

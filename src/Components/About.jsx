// src/components/About.jsx
import React from "react";

const About = ({ scrollToId }) => {
  return (
    <section id="about" className="bg-[#2b2d33]">
      <div
        className="mx-auto py-16 px-6 sm:px-10 md:px-20 lg:px-32
        grid md:grid-cols-3 gap-10 md:gap-24 items-center"
      >
        {/* Left Column */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl font-bold">About Me</h2>
          <h4 className="text-xl md:text-3xl font-medium leading-tight mt-6 mb-4">
            Why You <span className="text-[#32cd32]">Hire Me </span> for your
            <span className="text-[#32cd32]"> Next Project?</span>
          </h4>
          <p className="mt-2 text-gray-400">
            I’m Muhammad Ali, a dedicated Software Quality Assurance Engineer
            with strong expertise in ensuring the functionality, performance,
            and reliability of web applications. I specialize in manual testing,
            API testing (Postman), performance testing (JMeter), automation
            testing (Playwright), and creating detailed test cases to ensure every
            feature works as intended. My testing experience covers functional,
            regression, UI/UX, and compatibility testing across multiple
            browsers and devices. I’m passionate about improving software
            quality through careful analysis, clear documentation, and effective
            collaboration with development teams. My goal is to deliver
            bug-free, user-friendly, and high-performing applications that meet
            real-world user expectations.
          </p>

          {/* Button visible only on desktop */}
          <div className="mt-6 justify-center md:justify-start gap-3 hidden md:flex">
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToId("project");
              }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#32cd32]
                text-white font-semibold hover:bg-transparent border-[#32cd32] border-2"
            >
              View Work
            </button>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="grid grid-cols-1 md:grid-cols-1 shadow-lg gap-6">
          <div
            className="p-6 rounded-lg bg-black/20 shadow-lg border border-[#32cd32]
            transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="font-semibold text-lg">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Manual Testing",
                "Postman",
                "JMeter",
                "Automation Testing",
                "Playwright",
                ".NET Core",
                "C#",
                "SQL Server",
                "REST APIs",
                "HTML & CSS",
              ].map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1 rounded-full border border-gray-500 hover-bg-[#32cd32]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Button visible only on mobile (below skills) */}
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToId("project");
              }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#32cd32]
                text-white font-semibold hover:bg-transparent border-[#32cd32] border-2"
            >
              View Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

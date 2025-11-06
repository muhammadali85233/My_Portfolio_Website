import React from "react";

const services = [
  {
    title: "Manual Testing",
    desc: "Perform end-to-end manual testing to verify application functionality, usability, and stability. Identify and document defects through detailed test case execution.",
    bullets: [
      "Functional Testing",
      "Regression Testing",
      "UI/UX Testing",
      "Cross-Browser Testing",
    ],
  },
  {
    title: "API Testing",
    desc: "Test and validate APIs using Postman to ensure correct response data, performance, security, and seamless integration between frontend and backend systems.",
    bullets: [
      "CRUD Operation Testing",
      "Authentication",
      "Response Validation",
      "Integration Testing",
    ],
  },
  {
    title: "Automation Testing",
    desc: "Develop and execute automated test scripts to reduce manual effort and increase test coverage. Measure application speed, stability, and scalability under load using JMeter.",
    bullets: [
      "Cypress Scripts",
      "Performance Testing by JMeter",
      "Regression Automation",
      "Continuous Testing Integration",
    ],
  },
];

const Service = ({ scrollToId }) => {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto py-16 px-6 sm:px-10 md:px-20 lg:px-32">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center">Services</h2>
        <p className="text-center mt-2 text-gray-400 max-w-2xl mx-auto">
          I offer a wide range of software testing services to ensure quality,
          reliability, and performance across web applications and APIs.
        </p>

        {/* Service Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl border text-[#32cd32] border-[#32cd32] bg-[#2b2d33]/30 "
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-[#32cd32]">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToId("contact")}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#32cd32] text-white
                font-semibold hover:bg-transparent border-[#32cd32] border-2 "
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;

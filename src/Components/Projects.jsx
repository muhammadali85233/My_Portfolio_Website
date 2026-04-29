import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Arttribe",
    shortDesc:
      "An AI-powered image, video, voice, & music generation platform where users can create visuals from text prompts, upload reference images, and customize outputs using various models and configurations.",
    type: "_Web Application Testing",
    responsibility:
      "Performed functional, UI/UX, usability, responsiveness and performance testing. Validated workflows across all studios and ensured overall application stability.",
    link: "/arttribe",
  },
  {
    id: 2,
    title: "PastPaperAI ",
    shortDesc:
      "A web-based platform that automates the generation of custom exam papers, manages assessments, and provides tools for teachers and students to simplify the learning and testing process.",
    type: "_Web Application Testing",
    responsibility:
      "Performed manual functional, API, and regression testing across modules to ensure stability and accuracy.",
    link: "/pastpaperai",
  },
  {
    id: 3,
    title: "LMS Application",
    shortDesc:
      "A web-based Learning Management System designed to manage students, questions & assessments, allowing admins to assign, track, and evaluate student performance through an integrated and user-friendly interface.",
    type: "_Web Application Testing",
    responsibility:
      "Performed manual functional & regression on multiple modules to ensure data accuracy and smooth workflow.",
    link: "/lms",
  },
  {
    id: 4,
    title: "Collect Agent",
    shortDesc:
      "An API-based integration with a medical billing system designed to manage patient records, notifications, and payment workflows efficiently.",
    type: "_API Testing",
    responsibility:
      "Performed API testing in Postman for multiple modules & conducted performance testing using JMeter to analyze system stability under heavy data loads.",
    link: "/collectagent",
  },

  {
    id: 5,
    title: "Fortitude RE",
    shortDesc:
      "A corporate website for a reinsurance company, tested to ensure smooth functionality, accurate design alignment, and cross-browser compatibility.",
    type: "_Website Testing",
    responsibility:
      "Performed manual functional, UI/UX, and compatibility testing across multiple browsers and devices. Validated design accuracy with Figma and reported bugs via Trello.",
    link: "/fortitude",
  },

  {
    id: 6,
    title: "Simplicity Homes",
    shortDesc:
      "A real estate website showcasing property listings, home-buying services, and company details with a clean layout and easy navigation for users.",
    type: "_Website Testing",
    responsibility:
      "Performed manual, functional, and UI/UX testing to ensure all pages inquiry forms worked smoothly. Verified link redirections, responsive layouts, and compatability across browsers and devices. ",
    link: "/simplicity",
  },
  {
    id: 7,
    title: "Matt Buys Indiana Houses",
    shortDesc:
      "A real estate website enabling homeowners to easily connect and sell their properties with a responsive, user-friendly design",
    type: "_Website Testing",
    responsibility:
      "Performed manual, functional, and UI/UX testing across all pages, ensuring responsive design, proper link behavior, and compatibility on multiple browsers and devices.",
    link: "/matthouses",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="project"
      className="bg-[#2b2d33] text-white mx-auto py-16 px-6 sm:px-10 md:px-16 lg:px-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold ">My Projects</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          A showcase of my key projects, highlighting my work in manual,
          automation, functional, and API testing to ensure quality and
          reliability.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-black/30 border border-[#32cd32] rounded-xl shadow-lg hover:shadow-[#32cd32]/30 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-[#32cd32] ">
                {p.title}
              </h3>
              <p className="text-sm  italic">{p.type}</p>
              <p className="text-gray-400 text-sm">{p.shortDesc}</p>

              <div className="mt-3">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Responsibilities:</strong>{" "}
                  {p.responsibility}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex justify-between items-center">
              <button
                onClick={() => navigate(p.link)}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#32cd32] text-white
                font-semibold hover:bg-transparent border-[#32cd32] border-2 "
              >
                View Detail <FiExternalLink />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

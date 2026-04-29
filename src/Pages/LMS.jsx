import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../Components/Contact";
import BackButton from "../Components/BackButton";

const LMS = () => {
  return (
    <div className="bg-black text-white min-h-screen py-4 px-6 md:px-16">
      <BackButton />
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        LMS Application – Web Application
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The <strong>LMS Application</strong> (Learning Management System) is a
        web-based platform designed to manage students, assessments, and
        questions efficiently. The system allows institutes to register
        students, create and assign assessments, and monitor progress. I
        contributed as an <strong>SQA Engineer</strong>, performing extensive
        manual and API testing to ensure all modules function smoothly and data
        flows correctly between frontend and backend components. The project is
        currently under development.
      </motion.p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-14">
        <a
          href="https://docs.google.com/spreadsheets/d/1owCb0Mqi2vMSozol118b2dx1CebTGdLamZ-JjCvrk0E/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#32cd32] text-gray-100  font-semibold gap-2 px-4 py-2 rounded-3xl shadow-md border-2 border-[#32cd32] hover:bg-black hover:text-[#32cd32] transition"
        >
          View Test Cases
          <FiExternalLink />
        </a>

        <button
          disabled
          className="inline-flex items-center text-gray-400 bg-gray-700 font-semibold gap-2 px-4 py-2 rounded-3xl shadow-md border border-gray-700 cursor-not-allowed"
        >
          Live Website (Under Development)
        </button>
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mx-auto space-y-8 text-gray-300 leading-relaxed">
        {/* Modules Tested */}
        <section>
          <h2 className="text-2xl font-bold text-[#32cd32] mb-3">
            Project Modules Tested
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Student Module:</strong> Verified registration form
              fields, validation messages, and backend API data storage for
              student details. Tested student profile view and edit
              functionality to ensure accuracy of personal information.
            </li>

            <li>
              <strong>Question Module:</strong> Tested CRUD operations such as
              add, edit, delete, search, and filter. Validated API responses,
              pagination, and data accuracy for question management.
            </li>

            <li>
              <strong>Assessment Module:</strong> Tested creation of assessments
              with different question sets and difficulty levels. Verified start
              and end time validation, API request handling, and data linking
              between questions and assessments.
            </li>

            <li>
              <strong>Assign Assessment:</strong> Tested assigning assessments
              to individual students and groups. Verified backend logic,
              time-based restrictions, and correct API responses during
              assignment.
            </li>

            <li>
              <strong>Candidate Module:</strong> Ensured smooth registration and
              retrieval of student records, tested assessment history
              visibility, and verified API response accuracy.
            </li>

            <li>
              <strong>Enrollment Module:</strong> Validated enrollment listing,
              search, and pagination functionalities. Checked that the enrolled
              students are displayed correctly from the backend API.
            </li>
          </ul>
        </section>

        {/* Testing Techniques */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">
            Testing Techniques Used
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Functional Testing:</strong> Verified features based on
              defined module requirements.
            </li>
            <li>
              <strong>API Testing:</strong> Used Postman to validate backend
              endpoints, request methods (GET, POST, PUT, DELETE), and response
              behavior for data integrity.
            </li>
            <li>
              <strong>Regression Testing:</strong> Re-tested impacted modules
              after bug fixes and feature updates.
            </li>
            <li>
              <strong>Validation Testing:</strong> Checked form input validation
              and proper error messages.
            </li>
            <li>
              <strong>Usability Testing:</strong> Ensured the interface was
              intuitive and easy to navigate.
            </li>
            <li>
              <strong>Security Testing:</strong> Verified restricted access for
              unauthorized users and secure API communication.
            </li>
            <li>
              <strong>Compatibility Testing:</strong> Confirmed responsiveness
              across browsers and screen sizes.
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">
            Skills & Tools Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Manual Testing",
              "Postman",
              "Functional & Regression Testing",
              "API Testing",
              "Test Case Design",
              "Bug Reporting",
              "Validation & Usability Testing",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-lg text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">
            Key Achievements
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Created 100+ detailed test cases covering all major LMS modules.
            </li>
            <li>
              Identified multiple backend API and frontend validation bugs,
              leading to improved stability.
            </li>
            <li>
              Validated student assessment flow from creation to completion with
              real test data.
            </li>
            <li>
              Helped ensure smooth integration between Question and Assessment
              modules.
            </li>
            <li>
              Collaborated with developers to confirm bug fixes and maintain QA
              standards during development.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">Summary</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            As an <strong>SQA Engineer</strong>, I worked on the{" "}
            <strong>LMS Application</strong> project to test and validate
            end-to-end functionalities. I performed{" "}
            <strong>functional, regression, and API testing</strong> using
            Postman across multiple modules such as Student, Question,
            Assessment, and Assign Assessment. My testing ensured accurate data
            flow, proper validation, and smooth user experience across the
            platform. Although the application is still under development, my
            continuous QA efforts have strengthened the foundation for a stable
            and reliable LMS.
          </p>
        </section>
      </div>

      <div className="relative left-0 right-0 w-screen bg-gray-900 ml-[-1.5rem] md:ml-[-4rem] px-0">
        <Contact bgColor="bg-[#2b2d33]" />
      </div>
      {/* Footer */}

      <div className="text-center mt-16">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} | Muhammad Ali | Software Quality
          Assurance Engineer
        </p>
      </div>
    </div>
  );
};

export default LMS;

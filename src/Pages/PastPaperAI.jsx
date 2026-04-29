import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../Components/Contact";
import BackButton from "../Components/BackButton";

const PastPaperAI = () => {
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
        PastPaperAI – Web Application
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <strong>PastPaperAI</strong> is an intelligent web-based platform that
        allows students and institutes to generate customized exam-style past
        papers using AI. The application automates paper creation based on
        selected subjects, categories, and difficulty levels — providing users
        with a seamless and efficient study experience. I contributed to this
        project by performing end-to-end testing of all modules to ensure
        reliability, usability, and functionality across the platform.
      </motion.p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-14">
        <a
          href="https://docs.google.com/spreadsheets/d/13U_b4Vyf9l5aL5TMRyZtQsFYTKh5jhxWlabbGOurpBI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#32cd32] text-gray-100  font-semibold gap-2 px-4 py-2 rounded-3xl shadow-md border-2 border-[#32cd32] hover:bg-black hover:text-[#32cd32] transition"
        >
          View Test Cases
          <FiExternalLink />
        </a>

        <a
          href="https://pastpaperai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-100 bg-[#32cd32] font-semibold gap-2 px-4 py-2 rounded-3xl shadow-md border border-[#32cd32] hover:bg-black hover:text-[#32cd32] transition"
        >
          Visit Live Website
          <FiExternalLink />
        </a>
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mx-auto space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-[#32cd32] mb-3">
            Project Modules Tested
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Signup/Login:</strong> This module manages user
              registration and authentication. I tested input field validations,
              password strength, terms & conditions acceptance, and error
              messages. Also verified API authentication flow using tokens,
              ensuring secure login and access control.
            </li>

            <li>
              <strong>Subscription Module:</strong> This feature handles user
              plans and payment validation. I tested new subscription creation,
              plan upgrade, and expiry handling. Using Postman, I validated
              backend APIs to confirm correct payment status, expiry dates, and
              error handling for invalid or expired subscriptions.
            </li>

            <li>
              <strong>Overview Section:</strong> Displays user or admin
              dashboard summaries such as total papers, active subscriptions,
              and quick links. I tested responsive layout design, verified data
              accuracy, and validated that navigation links redirect correctly.
              Also performed UI testing to ensure a smooth user experience.
            </li>
            <li>
              <strong>Question Module:</strong> This module allows admin users
              to create, edit, and manage a question bank for different
              subjects. I tested all CRUD operations including add, edit,
              delete, search, filters, and pagination. Also verified backend API
              calls for data storage, validation messages, and API response
              codes to ensure smooth question management.
            </li>

            <li>
              <strong>Category Module:</strong> This module organizes questions
              into categories for easier access and management. I tested
              category creation, update, deletion, and validation to prevent
              duplicate entries. Verified frontend and backend API communication
              to ensure category data updates correctly in the database.
            </li>

            <li>
              <strong>Generate Paper:</strong> The main feature where users
              generate AI-based past papers based on selected criteria. I tested
              question selection logic, AI generation accuracy, and subscription
              limits. Also validated API requests and responses to ensure
              correct paper generation and data saving.
            </li>

            <li>
              <strong>Paper History:</strong> This module stores previously
              generated papers for download or re-access. I tested download
              functionality, search, pagination, and API response accuracy. Also
              checked access control to make sure users only see their own
              papers.
            </li>

            <li>
              <strong>Account Module:</strong> Allows users to manage personal
              information, change passwords, and delete their account. I tested
              form validations, password update flow, and account deletion using
              both UI and API testing to ensure secure data handling and proper
              backend updates.
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
              <strong>Functional Testing:</strong> Verified each feature
              according to requirements.
            </li>
            <li>
              <strong> API Testing :</strong> Used Postman to test backend
              endpoints, request methods (GET, POST, PUT, DELETE), and response
              validation.
            </li>

            <li>
              <strong>UI/UX Testing:</strong> Checked layout responsiveness and
              ease of use.
            </li>
            <li>
              <strong>Validation Testing:</strong> Ensured input fields and
              error messages function properly.
            </li>
            <li>
              <strong>Regression Testing:</strong> Re-tested modules after new
              updates or bug fixes.
            </li>
            <li>
              <strong>Security Testing:</strong> Validated access restrictions
              (e.g., paper history requires login).
            </li>
            <li>
              <strong>Usability Testing:</strong> Ensured smooth navigation and
              positive user experience.
            </li>
            <li>
              <strong>Compatibility Testing:</strong> Verified responsiveness
              across different devices and browsers.
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
              "UI/UX Validation",
              "API Testing",
              "Bug Reporting",
              "Test Case Design",
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
              Created 150+ comprehensive test cases covering all system modules.
            </li>
            <li>
              Found and reported multiple frontend and backend issues improving
              app stability.
            </li>
            <li>
              Improved user experience by ensuring responsive design and
              bug-free functionality.
            </li>
            <li>
              Enhanced data integrity by validating database updates during CRUD
              operations.
            </li>
            <li>
              Collaborated with developers to verify bug fixes and improve
              release quality.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">Summary</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I contributed to the <strong>PastPaperAI</strong> project as a QA
            Engineer, ensuring that all platform modules worked accurately and
            smoothly across different environments. I performed{" "}
            <strong>functional, UI, API, and regression testing</strong> on core
            modules such as Question Management, Category, Subscription, and
            Paper Generation. I also tested several backend
            <strong> API endpoints</strong> using Postman to validate
            request-response behavior, data integrity, and error handling. My
            testing work improved the overall reliability, stability, and user
            experience for both students and administrators.
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

export default PastPaperAI;

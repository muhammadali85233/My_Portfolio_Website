import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../Components/Contact";
import BackButton from "../Components/BackButton";

const CollectAgent = () => {
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
        Collect Agent – API Testing Project
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <strong>Collect Agent</strong> is an API-based project integrated with a
        medical billing system, designed to handle patient data uploads,
        notifications, and payment processing for medical practices. My role in
        this project was focused on <strong>API validation</strong> and{" "}
        <strong>performance testing</strong>, ensuring that each endpoint
        functioned accurately, securely, and efficiently under various load
        conditions using tools like Postman and JMeter.
      </motion.p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-14">
        <a
          href="https://docs.google.com/spreadsheets/d/1DGpnNNAXjuwVh_TUc60ntFE9qTpr8xMRoVAW86N1RYM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#32cd32] text-gray-100 font-semibold gap-2 px-4 py-2 rounded-3xl shadow-md border-2 border-[#32cd32] hover:bg-black hover:text-[#32cd32] transition"
        >
          View Test Cases
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
              <strong>Authentication Module:</strong> Tested API endpoints for
              secure login using Client ID and Client Secret. Verified both
              valid and invalid credential handling, token generation, and
              response time.
            </li>

            <li>
              <strong>Patient Data Upload:</strong> Validated API functionality
              for uploading patient JSON files with various conditions including
              valid, missing, and invalid fields. Ensured correct parsing,
              validation, and record generation in the connected billing system.
            </li>

            <li>
              <strong>Notification Module:</strong> Tested workflow-based
              notifications (Email, SMS, and Paper) triggered from patient data
              uploads. Verified correct delivery, error handling for missing
              fields, and appropriate message generation.
            </li>

            <li>
              <strong>Document Attachment:</strong> Verified that multiple
              document IDs can be attached in patient JSON files. Tested system
              response for invalid, duplicate, and case-sensitive document IDs.
            </li>

            <li>
              <strong>Payment & Refund:</strong> Tested payment gateway API for
              successful and failed transactions, invalid credit card data, and
              refund operations. Ensured correct HTTP response codes and
              validation messages.
            </li>

            <li>
              <strong>Template Download:</strong> Verified APIs for downloading
              bill templates using valid and invalid Client IDs and Template
              IDs, ensuring proper access control and file validation.
            </li>

            <li>
              <strong>Error Logs & Workflow Tracking:</strong> Tested endpoints
              returning job logs and workflow details. Verified error messages,
              job tracking, and data isolation between clients.
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
              <strong>API Testing:</strong> Validated request/response,
              authentication, and error handling using Postman.
            </li>
            <li>
              <strong>Functional Testing:</strong> Ensured APIs performed as per
              system requirements.
            </li>
            <li>
              <strong>Performance Testing:</strong> Used JMeter to test system
              behavior when multiple patient records (1–5000) were uploaded.
              Identified performance bottlenecks — system crashed near 500
              records.
            </li>
            <li>
              <strong>Validation Testing:</strong> Checked mandatory fields,
              file format restrictions, and data validation.
            </li>
            <li>
              <strong>Error Handling Testing:</strong> Verified proper response
              codes and messages for invalid input and authentication failures.
            </li>
            <li>
              <strong>Security Testing:</strong> Tested authorization and token
              restrictions for data isolation among clients.
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
              "Postman",
              "JMeter",
              "API Testing",
              "Performance Testing",
              "Functional Testing",
              "Error Handling",
              "Token Authentication",
              "Bug Reporting",
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
            <li>Created 100+ API test cases covering multiple modules.</li>
            <li>
              Detected performance limitations during bulk upload and reported
              bottlenecks to the development team.
            </li>
            <li>
              Improved API reliability through detailed testing of edge cases
              and error responses.
            </li>
            <li>
              Ensured secure client authentication by validating token-based
              access and isolation.
            </li>
            <li>
              Collaborated with developers to retest and verify fixes post
              deployment.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">Summary</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I contributed to the <strong>Collect Agent</strong> project as a{" "}
            <strong>QA Engineer</strong> responsible for ensuring accurate,
            secure, and high-performance API functionality. I performed{" "}
            <strong>functional and performance testing</strong> of key modules
            such as Authentication, Patient Upload, and Payment. Using{" "}
            <strong>Postman</strong>, I validated API responses, tokens, and
            error messages, while with <strong>JMeter</strong> I identified
            system performance issues when handling large data uploads. My
            testing helped enhance API robustness and stability for real-world
            medical billing operations.
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

export default CollectAgent;

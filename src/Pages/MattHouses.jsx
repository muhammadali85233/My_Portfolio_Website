import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../Components/Contact";
import BackButton from "../Components/BackButton";

const MattHouses = () => {
  return (
    <div className="bg-black text-white min-h-screen py-4 px-6 md:px-16">
      {/* Sticky Back Button */}
      <BackButton />

      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Matt Buys Indiana Houses – Website
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <strong>Matt Buys Indiana Houses</strong> is a real estate platform
        built to help Indiana homeowners sell their properties quickly, easily,
        and for cash. As an <strong>SQA Engineer</strong>, I conducted
        comprehensive manual, functional, and UI/UX testing to ensure the
        website operated flawlessly—from property submission forms to team
        introduction pages. I verified performance, responsiveness, and
        navigation across all major browsers and devices, documenting and
        tracking all findings in <strong>Trello</strong> for resolution and
        quality assurance.
      </motion.p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-14">
        <a
          href="https://www.mattbuysindianahouses.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#32cd32] text-gray-100 font-semibold gap-2 px-4 py-2 rounded-3xl shadow-md border-2 border-[#32cd32] hover:bg-black hover:text-[#32cd32] transition"
        >
          Visit Website
          <FiExternalLink />
        </a>
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mx-auto space-y-8 text-gray-300 leading-relaxed">
        {/* Sections Tested */}
        <section>
          <h2 className="text-2xl font-bold text-[#32cd32] mb-3">
            Pages & Features Tested
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Homepage:</strong> Verified hero banner content, “Get a
              Cash Offer” call-to-action functionality, testimonials, and quick
              navigation flow across major sections.
            </li>
            <li>
              <strong>About Us:</strong> Reviewed company introduction, team
              member profiles, and verified text formatting, internal links, and
              responsive layout.
            </li>
            <li>
              <strong>How It Works:</strong> Tested the step-by-step property
              selling process, icon alignment, smooth scrolling, and section
              visibility across devices.
            </li>
            <li>
              <strong>Sell Your House Form:</strong> Performed end-to-end
              validation of form inputs, error handling, success message flow,
              and backend integration response.
            </li>
            <li>
              <strong>Reviews & Testimonials:</strong> Ensured accurate display
              of client feedback, carousel slider functionality, and proper
              rendering on mobile and desktop.
            </li>
            <li>
              <strong>FAQs Page:</strong> Checked expand/collapse interactions,
              question-answer accuracy, and maintained layout integrity on all
              screen sizes.
            </li>
            <li>
              <strong>Referral & Community Pages:</strong> Tested navigation
              links, content updates, and user flow consistency throughout all
              referral and appreciation-related pages.
            </li>
            <li>
              <strong>Blog & News Posts:</strong> Verified individual blog page
              navigation, featured image loading, and content formatting
              consistency.
            </li>
            <li>
              <strong>TV & Media Section:</strong> Checked embedded videos,
              image galleries, and verified that all media links play and load
              correctly across browsers.
            </li>
            <li>
              <strong>Contact Page:</strong> Tested contact form field
              validation, Google Map integration, address accuracy, and proper
              redirection after submission.
            </li>
            <li>
              <strong>Responsive & Cross-Browser Testing:</strong> Validated
              full responsiveness across desktop, tablet, and mobile; confirmed
              visual consistency on Chrome, Firefox, Edge, and Safari.
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
              <strong>Manual Functional Testing:</strong> Conducted detailed
              verification of page functionalities, form submissions, navigation
              buttons, and interactive elements across the entire website.
            </li>
            <li>
              <strong>UI/UX Validation:</strong> Ensured visual consistency,
              alignment, typography, and spacing across pages while maintaining
              a user-friendly experience.
            </li>
            <li>
              <strong>Link & Navigation Testing:</strong> Validated all internal
              and external links, menu items, and redirects to confirm seamless
              user journeys.
            </li>
            <li>
              <strong>Cross-Browser & Responsive Testing:</strong> Tested on
              Chrome, Firefox, Edge, and Safari to ensure pixel-perfect
              responsiveness on desktop, tablet, and mobile devices.
            </li>
            <li>
              <strong>Regression Testing:</strong> Re-executed test cases
              post-fixes to verify that previous issues were successfully
              resolved without impacting other functionalities.
            </li>
            <li>
              <strong>Usability & Content Validation:</strong> Reviewed content
              readability, form clarity, and intuitive navigation to enhance the
              overall user experience.
            </li>
          </ul>
        </section>

        {/* Skills & Tools */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">
            Skills & Tools Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Manual Testing",
              "UI/UX Validation",
              "Cross-Browser Testing",
              "Device Compatibility",
              "Functional Testing",
              "Bug Tracking (Trello)",
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
              Identified 200+ layout, navigation and spacing issues on mobile
              and Desktop views.
            </li>
            <li>
              Verified and reported broken or misdirected internal navigation
              links.
            </li>
            <li>
              Ensured responsive design consistency across different screen
              sizes.
            </li>
            <li>
              Improved user experience by confirming all call-to-action elements
              work smoothly.
            </li>
            <li>
              Collaborated effectively with the dev team using Trello for issue
              tracking and resolution.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">Summary</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            As an <strong>SQA Engineer</strong>, I contributed to the{" "}
            <strong>Matt Buys Indiana Houses</strong> project by conducting
            detailed manual, functional, and UI/UX testing across all website
            pages and features. My focus was on ensuring smooth user flows,
            accurate form submissions, reliable link navigation, and consistent
            layouts across devices and browsers. All defects and enhancement
            suggestions were tracked and validated through Trello, resulting in
            a stable, responsive, and user-friendly real estate platform that
            delivers a seamless experience for property sellers and buyers.
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

export default MattHouses;

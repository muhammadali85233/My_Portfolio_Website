import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../Components/Contact";
import BackButton from "../Components/BackButton";

const FortitudeReWebsite = () => {
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
        Fortitude Re – Website
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The website of Fortitude Re is a corporate re-insurance firm site
        presenting services, leadership, investor relations and contact
        information. I contributed as an <strong>SQA Engineer</strong>,
        performing manual, UI/UX, functional, link-redirection multi-browser and
        device compatibility testing to ensure a polished and consistent user
        experience across platforms.
      </motion.p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-14">
        <a
          href="https://fortitude-re.com/"
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
        {/* Modules Tested */}
        <section>
          <h2 className="text-2xl font-bold text-[#32cd32] mb-3">
            Project Modules & Sections Tested
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Homepage & Navigation:</strong> Checked layout, hero
              section, messaging accuracy and navigation links to internal
              sections. Verified that major menu items (What We Do, About,
              Investor Relations, Contact) load correctly.
            </li>
            <li>
              <strong>About / Who We Are Section:</strong> Validated content
              accuracy, image-text alignment, leader profiles appearing
              correctly and that “Learn More” links route to correct pages.
            </li>
            <li>
              <strong>Investor Relations / News & Insights:</strong> Verified
              that press-release listings load properly, PDF download links
              work, and financial figures display accurately.
            </li>
            <li>
              <strong>Contact & Form Section:</strong> Ensured contact form
              fields validate correctly, submission works or shows appropriate
              message, and links to policy/terms load.
            </li>
            <li>
              <strong>Responsive & Multi-Device Compatibility:</strong> Tested
              site on desktop (Chrome, Firefox, Edge), tablet and mobile (iOS,
              Android). Checked layout breaks, menu toggling, and image scaling.
            </li>
            <li>
              <strong>Link Redirections & Internal Routing:</strong> Verified
              all major navigational links, “Read More” buttons, PDF download
              links and external links (e.g., to investor portals) redirect
              correctly and open as expected.
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
              <strong>Manual Functional Testing:</strong> Verified workflows,
              navigation, link behavior, form submission and error states.
            </li>
            <li>
              <strong>UI/UX Validation:</strong> Compared site against
              Figma/design mocks for correct layout, typography, and spacing.
            </li>
            <li>
              <strong>Link & Redirection Testing:</strong> Checked for broken
              links, correct target pages, and open behavior (same tab/new tab).
            </li>
            <li>
              <strong>Compatibility Testing:</strong> Tested across devices
              (desktop/tablet/mobile) and browsers (Chrome, Firefox, Safari,
              Edge).
            </li>
            <li>
              <strong>Usability Testing:</strong> Ensured menu usability, mobile
              navigation, readable text, and accessible interactions.
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
              "Figma Review",
              "Cross-Browser Testing",
              "Device Compatibility",
              "Link Redirection Testing",
              "Bug Tracking (Trello)",
            ].map((skill, idx) => (
              <span
                key={idx}
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
              Identified and logged multiple UI inconsistencies against the
              design specs in Trello.
            </li>
            <li>
              Detected broken links in major navigation menus and external
              document downloads.
            </li>
            <li>
              Ensured full mobile and tablet compatibility, eliminating layout
              issues on smaller screens.
            </li>
            <li>
              Validated cross-browser behavior to deliver a consistent user
              experience across widely used browsers.
            </li>
            <li>
              Collaborated with dev/design teams using Trello to track and
              verify fixes without formal test-cases.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">Summary</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I contributed to the Fortitude Re corporate website as an{" "}
            <strong>SQA Engineer</strong>. My work focused on manual functional
            testing, UI/UX validation against Figma designs, link redirection
            checking, and compatibility across multiple browsers and
            mobile/desktop devices. Although no formal test-case suite was
            developed, all found issues were tracked and managed through Trello
            boards. My efforts helped ensure a high-quality, consistent and
            accessible website experience for all users.
          </p>
        </section>
      </div>
      <div className="relative left-0 right-0 w-screen bg-gray-900 ml-[-1.5rem] md:ml-[-4rem] px-0">
        <Contact bgColor="bg-[#2b2d33]" />
      </div>
      {/* Contact Button */}

      <div className="text-center mt-16">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} | Muhammad Ali | Software Quality
          Assurance Engineer
        </p>
      </div>
    </div>
  );
};

export default FortitudeReWebsite;

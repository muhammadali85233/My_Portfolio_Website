import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../Components/Contact";
import BackButton from "../Components/BackButton";

const Simplicity = () => {
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
        Simplicity Homes – Website
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        The <strong>Simplicity Homes Website</strong> is a modern, fully
        responsive real estate and homebuilding platform developed by{" "}
        <strong>Simplicity by Hayden Homes</strong>. The site highlights
        residential and workforce housing plans, community initiatives, and the
        brand family story behind Hayden Homes, Simplicity, and First Story.
        <br />
        As an <strong>SQA Engineer</strong>, I was responsible for conducting{" "}
        <strong>end-to-end manual, functional, and UI/UX testing</strong> to
        ensure design consistency, accurate navigation links, and responsiveness
        across all browsers and devices. I also verified page content accuracy,
        tested interactive components, and validated forms and contact
        workflows. My testing ensured a smooth, professional, and user-friendly
        experience that aligns with the brand’s mission of building affordable,
        quality housing.
      </motion.p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mb-14">
        <a
          href="https://simplicity-staging.graphiclanguage.net/"
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
        {/* Modules Tested */}
        <section>
          <h2 className="text-2xl font-bold text-[#32cd32] mb-3">
            Project Modules Tested
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Homepage:</strong> Verified hero section, navigation
              menus, call-to-action buttons, featured home plans, and footer
              links. Ensured banners, animations, and quick-links display
              correctly across devices.
            </li>
            <li>
              <strong>Where We Build:</strong> Tested location search filters,
              interactive maps, state and community pages, and verified correct
              navigation between regional home listings.
            </li>
            <li>
              <strong>Home Plans:</strong> Checked filtering by size, price, and
              type of home. Validated layout of plan details, images,
              specifications, and downloadable PDFs. Ensured all plan pages load
              correctly with accurate data.
            </li>
            <li>
              <strong>Building Process:</strong> Reviewed multi-step information
              pages explaining each phase of home construction. Verified
              internal linking, visual consistency, and timeline sections across
              desktop and mobile views.
            </li>
            <li>
              <strong>Why Simplicity:</strong> Tested brand story, customer
              testimonials, sustainability and affordability sections, ensuring
              images, text, and videos load properly and align with the
              company’s mission.
            </li>
            <li>
              <strong>Investors Section:</strong> Validated access to reports,
              media resources, and company background. Checked document
              downloads, links, and secure redirections.
            </li>
            <li>
              <strong>Contact Us Page:</strong> Verified all form fields, email
              validation, required field behavior, and successful submission
              through EmailJS integration. Confirmed acknowledgement message and
              email receipt accuracy.
            </li>
            <li>
              <strong>Global Navigation & Responsiveness:</strong> Ensured all
              dropdown menus, headers, and footers work seamlessly across
              browsers (Chrome, Edge, Firefox, Safari) and devices (desktop,
              tablet, mobile).
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
              <strong>Manual Functional Testing:</strong> Performed end-to-end
              testing of all website modules, verifying page navigation,
              dropdowns, forms, and user interactions.
            </li>
            <li>
              <strong>UI/UX Validation:</strong> Checked visual consistency,
              layout alignment, color scheme, and content spacing across all
              pages to match the design standards.
            </li>
            <li>
              <strong>Cross-Browser & Device Compatibility Testing:</strong>{" "}
              Ensured seamless performance and consistent layout across major
              browsers (Chrome, Firefox, Edge, Safari) and multiple devices
              (desktop, tablet, mobile).
            </li>
            <li>
              <strong>Link & Redirect Testing:</strong> Verified all internal
              page links, navigation menus, and external resources redirect
              correctly without broken paths.
            </li>
            <li>
              <strong>Usability Testing:</strong> Evaluated overall user
              experience, ensuring intuitive navigation, quick page response,
              and accessibility for all types of users.
            </li>
            <li>
              <strong>Form Validation Testing:</strong> Tested “Contact Us” form
              for required field validations, email format checks, and correct
              EmailJS submission handling.
            </li>
            <li>
              <strong>Regression Testing:</strong> Re-validated core
              functionalities after fixes and content updates to ensure no new
              issues were introduced.
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
              "Responsive Design Testing",
              "Link Redirection Testing",
              "Bug Tracking (Trello)",
              "Functional Testing",
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
              Identified and documented multiple UI/UX inconsistencies,
              improving visual alignment and overall user experience across the
              website.
            </li>
            <li>
              Reported and helped resolve broken navigation links and sub-menu
              redirection issues under sections like “Where We Build,” “Home
              Plans,” and “Why Simplicity.”
            </li>
            <li>
              Verified all subpages for design accuracy, image loading, and
              content alignment, ensuring a consistent and professional layout.
            </li>
            <li>
              Contributed to improving cross-browser and device compatibility by
              testing and validating responsive layouts on multiple platforms.
            </li>
            <li>
              Collaborated with developers and designers through Trello to track
              bugs, validate fixes, and ensure UI improvements were successfully
              deployed.
            </li>
            <li>
              Helped enhance form functionality by validating successful message
              delivery through EmailJS integration on the “Contact Us” page.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">Summary</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            As an <strong>SQA Engineer</strong>, I thoroughly tested the{" "}
            <strong>Simplicity Homes</strong> website — a real estate and
            homebuilding platform with multiple sections including “Where We
            Build,” “Home Plans,” “Building Process,” “Why Simplicity,”
            “Investors,” and “Contact Us.” My role involved conducting
            end-to-end manual, functional, and UI/UX testing to ensure every
            page, menu, and subpage functioned smoothly and maintained design
            accuracy. All identified issues were documented and tracked in{" "}
            <strong>Trello</strong>, helping the development team enhance
            usability, performance, and responsiveness across different devices
            and browsers.
          </p>
        </section>
      </div>
      <div className="relative left-0 right-0 w-screen bg-gray-900 ml-[-1.5rem] md:ml-[-4rem] px-0">
        <Contact bgColor="bg-[#2b2d33]" />
      </div>
      {/* Contact Button */}

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

export default Simplicity;

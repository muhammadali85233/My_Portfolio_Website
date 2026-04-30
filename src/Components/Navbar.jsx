import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ scrollToId, navLinks }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectItems = [
    { name: "Arttribe", link: "/arttribe" },
    { name: "PastPaperAI", link: "/pastpaperai" },
    { name: "LMS Application", link: "/lms" },
    { name: "Collect Agent", link: "/collectagent" },
    { name: "Fortitude Re", link: "/fortitude" },
    { name: "Simplicity", link: "/simplicity" },
    { name: "Matt Buys Indiana Houses", link: "/matthouses" },
  ];

  return (
    <header
      className={`backdrop-blur-md bg-[#2b2d33]/80 text-white fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? "shadow-[0_4px_15px_-2px_#32cd32]" : ""
      }`}
    >
      <div className="mx-auto py-4 px-6 sm:px-10 md:px-20 lg:px-32 flex items-center justify-between">
        {/* ✅ Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToId("hero")}
        >
          <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center mr-3">
            <span className="font-bold text-lg text-[#32cd32]">MA</span>
          </div>
          <div>
            <div className="text-lg font-bold">Muhammad Ali</div>
            <div className="text-xs text-gray-300">
              Software Quality Assurance Engineer
            </div>
          </div>
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center relative">
          {navLinks.map((l) =>
            l.label === "Projects" ? (
              <div key={l.id} className="relative flex items-center gap-1">
                {/* Project click scrolls */}
                <span
                  onClick={() => scrollToId(l.id)}
                  className="cursor-pointer text-white text-sm hover:text-[#32cd32] transition"
                >
                  {l.label}
                </span>

                {/* Dropdown toggle */}
                <button
                  onClick={() => setProjectOpen(!projectOpen)}
                  className="text-white hover:text-[#32cd32] transition"
                >
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      projectOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                {projectOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 bg-[#1e1f24] shadow-lg rounded-lg w-48 border border-[#2b2d33] z-50"
                    onMouseLeave={() => setProjectOpen(false)}
                  >
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#32cd32] hover:text-black transition"
                        onClick={() => setProjectOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <span
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="cursor-pointer text-white text-sm hover:text-[#32cd32] transition"
              >
                {l.label}
              </span>
            )
          )}

          {/* ✅ Download CV button */}
          <a
            href="/MuhammadAliCV.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-[#32cd32] text-white
                font-semibold hover:bg-transparent border-[#32cd32] border-2 "
          >
            <FaDownload />
            Download CV
          </a>
        </nav>

        {/* ✅ Download CV (mobile only) */}
        <a
          href="/MuhammadAli_CV.pdf"
          download
          className="md:hidden bg-[#32cd32] text-black text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[#28a428] transition flex items-center gap-2"
        >
          <FaDownload size={12} />
          CV
        </a>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-white"
            onClick={() => setNavOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-[#1e1f24] py-4 px-6 flex flex-col gap-4 text-sm">
          {navLinks.map((l) =>
            l.label === "Project" ? (
              <div key={l.id}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setProjectOpen(!projectOpen)}
                >
                  <span className="block font-semibold text-[#32cd32]">
                    {l.label}
                  </span>
                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      projectOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {projectOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="hover:text-[#32cd32]"
                        onClick={() => {
                          setProjectOpen(false);
                          setNavOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <span
                key={l.id}
                onClick={() => {
                  scrollToId(l.id);
                  setNavOpen(false);
                }}
                className="cursor-pointer hover:text-[#32cd32]"
              >
                {l.label}
              </span>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

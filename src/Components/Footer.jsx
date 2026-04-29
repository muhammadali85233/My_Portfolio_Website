import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = ({ scrollToId }) => {
  return (
    <footer className="bg-black">
      <div className="mx-auto py-8 px-6 sm:px-10 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Muhammad Ali. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={() => scrollToId("hero")}
            className="text-gray-400 hover:text-white flex items-center"
          >
            Back to top <FaArrowUp className="inline ml-2" />
          </a>
          <div className="text-sm text-gray-400">
            Built with React + Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

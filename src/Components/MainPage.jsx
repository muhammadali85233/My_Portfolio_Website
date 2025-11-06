import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainPage() {
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      setTimeout(() => {
        const portfolioSection = document.getElementById("project");
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
        // Reset the state so it won't trigger again on reload
        navigate(location.pathname, { replace: true, state: {} });
      }, 50);
    }
  }, [location.state, location.pathname, navigate]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white antialiased ">
      {/* NAVBAR (grey background) */}
      <div>
        <Navbar scrollToId={scrollToId} navLinks={navLinks} />
      </div>

      {/* HERO (black) */}
      <div>
        <Hero scrollToId={scrollToId} />
      </div>

      {/* ABOUT (grey) */}
      <About scrollToId={scrollToId} />

      {/* SERVICES (black) */}
      <Service scrollToId={scrollToId} />

      {/* Projects (grey) */}
      <Projects />

      {/* TESTIMONIALS (black) */}
      {/* <Testimonials /> */}

      {/* CONTACT (grey) */}
      <Contact bgColor="bg-black" />

      {/* FOOTER (black) */}
      <Footer />
    </div>
  );
}

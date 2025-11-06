import React, { useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = ({ bgColor }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6iey9pj", // ✅ Your EmailJS Service ID
        "template_fzocrcs", // ✅ Your EmailJS Template ID
        form.current,
        "517yK_MRIe5rf6YLq" // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.log("Email send error:", error.text);
          alert("Failed to send message. Please try again!");
        }
      );
  };

  return (
    <section id="contact" className={`${bgColor}`}>
      <div className="mx-auto py-16 px-6 sm:px-10 md:px-20 lg:px-32 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-center md:text-left">
            Get in touch
          </h2>
          <p className="mt-2 text-gray-400 text-center md:text-left">
            I’m open for freelance projects or full-time opportunities.
          </p>

          <div className="mt-6 flex flex-col gap-4 text-gray-300">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-sm text-gray-400">
                  <a
                    href="https://www.google.com/maps?q=Islamabad,+Pakistan"
                    className="block text-inherit no-underline hover:text-[#32cd32]"
                  >
                    Islamabad, Pakistan
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-lg" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-400">
                  <a
                    href="mailto:muhammadali85233@gmail.com"
                    className="block text-inherit no-underline hover:text-[#32cd32]"
                  >
                    muhammadali85233@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 ">
              <FaPhone className="mt-1" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-sm text-gray-400 hover:text-[#32cd32]">
                  +92 311 5832550
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaWhatsapp className="mt-1" />
              <div>
                <div className="font-semibold">Whatsapp</div>
                <div className="text-sm text-gray-400">
                  <a
                    href="https://wa.me/923115832550"
                    className="block text-inherit no-underline hover:text-[#32cd32]"
                  >
                    +92 311 5832550
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaLinkedin className="mt-1" />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-400">
                  <a
                    href="https://www.linkedin.com/in/muhammad-ali-74283b199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-inherit no-underline hover:text-[#32cd32]"
                  >
                    https://www.linkedin.com/in/muhammad-ali-74283b199
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-black/20 p-6 rounded-lg border border-gray-800"
          >
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                name="title"
                required
                placeholder="Subject"
                className="p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                rows="5"
                className="p-3 rounded-md bg-transparent border border-gray-700 focus:outline-none"
              />
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-[#32cd32] text-white font-semibold hover:bg-transparent border-[#32cd32] border-2"
                >
                  Send Message
                </button>
                {sent && (
                  <div className="text-sm text-green-300">Message sent!</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

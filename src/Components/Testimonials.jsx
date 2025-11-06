import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Client One",
    role: "Product Manager",
    image: "/project4.jpg",
    quote: "Great to work with — delivered on time and exceeded expectations.",
  },
  {
    id: 2,
    name: "Client Two",
    role: "Founder",
    image: "/project4.jpg",
    quote: "Professional, communicative and highly skilled.",
  },
];

const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    aria-label="Previous slide"
    className={`${className} z-20 p-2`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <FaChevronLeft className="text-[#32cd32] text-2xl transition-transform duration-300 hover:scale-110" />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    aria-label="Next slide"
    className={`${className} z-20 p-2`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <FaChevronRight className="text-[#32cd32] text-2xl transition-transform duration-300 hover:scale-110" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // one slide visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    centerMode: true, // center the active slide
    centerPadding: "0px", // no side padding, prevents partial slide show
    variableWidth: false, // force slides to use full container width
  };

  return (
    <section id="testimonials" className="bg-black">
      <div className="mx-auto py-16 px-6 sm:px-10 md:px-20 lg:px-32 text-center max-w-5xl">
        <h2 className="text-3xl font-bold text-white">Testimonials</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          What people say about working with me.
        </p>

        {/* SLIDER */}
        <div className="mt-10 relative group overflow-visible">
          <Slider {...settings}>
            {testimonials.map((t) => (
              // make each slick-slide a flex container and center its inner content
              <div key={t.id} className="px-4 md:px-12 flex justify-center">
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-6 text-center">
                    “{t.quote}”
                  </p>

                  {/* Name + Image Section */}
                  <div className="flex flex-col items-center justify-center mt-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#32cd32]"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-white">{t.name}</div>
                        <div className="text-gray-400 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

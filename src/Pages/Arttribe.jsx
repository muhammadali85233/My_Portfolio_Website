import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Contact from "../Components/Contact";
import BackButton from "../Components/BackButton";

const Arttribe = () => {
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
                Arttribe – Web Application Testing Project
            </motion.h1>

            {/* Intro */}
            <motion.p
                className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <strong>Arttribe</strong> is an AI-powered web application that allows
                users to generate images from text prompts, upload images, and customize
                outputs using different models, styles, and configurations. My role in
                this project focused on comprehensive testing of application workflows,
                ensuring smooth user experience, accurate functionality, and reliable
                performance across different features.
            </motion.p>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mb-14">
                <a
                    href="https://arttribe.techtribedev.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#32cd32] text-gray-100 font-semibold gap-2 px-4 py-2 rounded-3xl shadow-md border-2 border-[#32cd32] hover:bg-black hover:text-[#32cd32] transition"
                >
                    View Live Project
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
                            <strong>Studios Coverage:</strong> Tested end-to-end workflows across all
                            studios including Image Studio, Video Studio, Music Studio, and Voice
                            Studio, ensuring seamless functionality and user experience.
                        </li>

                        <li>
                            <strong>Image Studio:</strong> Validated tools such as Text-to-Image,
                            Product Photography, Creative Upscale, Realtime Generation, Headshot,
                            Image Editor, Custom Model, Background Remover, Try-On, and Recompose.
                        </li>

                        <li>
                            <strong>Video Studio:</strong> Tested features including Text-to-Video,
                            Image-to-Video, Video-to-Video, and Video Editor workflows.
                        </li>

                        <li>
                            <strong>Music & Voice Studios:</strong> Verified Text-to-Music,
                            Text-to-Song, Text-to-Voice, Voice Changer, Voice Cloning, Sound Effects,
                            and Noise Cancellation functionalities.
                        </li>

                        <li>
                            <strong>Model & Settings Validation:</strong> Tested multiple AI models
                            (Nano Banana, Seedance, Seedream, Flux Pro, Qwen, Kling, Sora, Gemini,
                            Veo, etc.), along with aspect ratios, styles, and configuration
                            settings.
                        </li>

                        <li>
                            <strong>Prompt & Input Handling:</strong> Ensured proper validation of
                            prompts, handling of invalid/empty inputs, and correct generation
                            triggers across all tools.
                        </li>

                        <li>
                            <strong>Upload & History Features:</strong> Validated image upload from
                            device, selection from history, AI-generated inputs, and history
                            tracking across workflows.
                        </li>

                        <li>
                            <strong>Subscription & Billing:</strong> Tested subscription plans,
                            billing flows, and access control for premium features.
                        </li>

                        <li>
                            <strong>Generation Workflow:</strong> Verified asynchronous processing,
                            loader behavior, and successful rendering of generated outputs across
                            all studios.
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
                            <strong>Functional Testing:</strong> Verified application features
                            against requirements.
                        </li>
                        <li>
                            <strong>UI/UX Testing:</strong> Ensured user interface consistency
                            and smooth interactions.
                        </li>
                        <li>
                            <strong>Usability Testing:</strong> Evaluated ease of use and user
                            experience across workflows.
                        </li>
                        <li>
                            <strong>Performance Testing:</strong> Observed system behavior
                            during image generation and heavy usage scenarios.
                        </li>
                        <li>
                            <strong>Responsiveness Testing:</strong> Validated application
                            behavior across different screen sizes.
                        </li>
                        <li>
                            <strong>Regression Testing:</strong> Ensured existing features
                            remained stable after updates and fixes.
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
                            "Functional Testing",
                            "UI/UX Testing",
                            "Usability Testing",
                            "Performance Testing",
                            "Responsive Testing",
                            "Regression Testing",
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
                        <li>Created detailed test cases covering core application flows.</li>
                        <li>
                            Identified UI and functional issues in image generation workflows.
                        </li>
                        <li>
                            Improved application stability through regression and usability
                            testing.
                        </li>
                        <li>
                            Ensured smooth handling of asynchronous image generation process.
                        </li>
                        <li>
                            Collaborated with developers to verify fixes and enhancements.
                        </li>
                    </ul>
                </section>

                {/* Summary */}
                <section>
                    <h2 className="text-2xl font-bold mb-3 text-[#32cd32]">Summary</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        I worked on the <strong>Arttribe</strong> project as a{" "}
                        <strong>QA Engineer</strong>, focusing on functional, UI/UX,
                        usability, and performance testing. I validated complete workflows
                        of image generation, upload features, and configuration settings,
                        ensuring a stable and user-friendly experience. My testing efforts
                        helped improve overall application reliability and performance in
                        handling real-time image generation.
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

export default Arttribe;
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import meetingGif from "../assets/meeting.gif"; // Adjust the path as needed

const Header = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

  return (
    <header className="px-6 pt-[100px] pb-[50px]   bg-[#f6f9ff] flex flex-col md:flex-row items-center overflow-hidden" id="home">
      
      {/* Left Half: Text Content */}
      <motion.div
        ref={leftRef}
        initial={{ x: -100, opacity: 0 }}
        animate={isLeftInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ willChange: "transform" }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold px-3 mt-50 text-blue-400">
            WE <span className="text-blue-900">HELP</span> YOU TO{" "}
            <span className="text-blue-900">GROW</span> YOUR{" "}
            <span className="text-blue-900">BUSINESS</span>
          </h1>
        </div>

        <div className="mt-4 flex items-stretch px-4">
          <div className="bg-blue-800 w-4 mr-4"></div>
          <h2 className="text-lg text-blue-800 font-semibold">
            A results-driven digital agency that builds modern websites, custom software,
            and engaging brand experiences. We help startups and businesses transform ideas
            into stunning online solutions.
          </h2>
        </div>

        <div className="flex gap-4 mt-6 px-4">
          <button className="py-2 px-3 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all">
            Explore Services
          </button>
          <button className="py-2 px-3 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all">
            Contact Us
          </button>
        </div>
      </motion.div>

      {/* Right Half: GIF Image */}
      <motion.div
        ref={rightRef}
        initial={{ x: 100, opacity: 0 }}
        animate={isRightInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ willChange: "transform" }}
        className="w-full md:w-1/2 flex items-center justify-center h-full"
      >
        <img
          src={meetingGif}
          alt="Team Meeting"
          className="max-w-full h-full z-10 object-contain"
        />
      </motion.div>
    </header>
  );
};

export default Header;

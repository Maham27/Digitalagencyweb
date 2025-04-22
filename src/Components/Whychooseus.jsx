import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Whychooseus = () => {
  const headingRef = useRef(null);
  const statsRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { value: "30k", labelTop: "Project", labelBottom: "completed" },
    { value: "10k", labelTop: "Happy", labelBottom: "customers" },
    { value: "12", labelTop: "Years", labelBottom: "experiences" },
    { value: "90", labelTop: "Awards", labelBottom: "achievement" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-16" id="about">
      
      {/* Section Heading */}
      <div ref={headingRef}>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={headingInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl text-blue-400 sm:text-5xl font-extrabold text-center mb-4"
        >
          Why Choose Us
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={headingInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="text-blue-900 font-medium text-center mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          At PixelCraze, we’re not just a digital agency—we’re your creative and
          technical partners. With a passion for clean code, stunning visuals, and
          results-driven strategy, we help businesses elevate their online presence
          through cutting-edge web and mobile solutions.
        </motion.p>
      </div>

      {/* Stats Bubbles */}
      <div ref={statsRef} className="flex flex-col md:flex-row justify-center items-center gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            className={`border-4 border-blue-400 rounded-full 
              flex flex-col items-center justify-center 
              text-gray-800 shadow relative
              bg-gradient-to-b from-white to-blue-100 
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl
              w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60
              ${index !== 0 ? "sm:ml-0 md:-ml-16 lg:-ml-20" : ""}
            `}
            style={{
              zIndex: 10 - index,
            }}
          >
            <h2 className="text-2xl text-blue-800 sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {stat.value}
            </h2>
            <p className="text-sm text-blue-800 sm:text-base md:text-lg font-semibold">
              {stat.labelTop}
            </p>
            <p className="text-xs text-blue-800 sm:text-sm">
              {stat.labelBottom}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;



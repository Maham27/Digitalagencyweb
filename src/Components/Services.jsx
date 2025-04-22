import { FaCode, FaMobileAlt, FaBullhorn, FaPaintBrush, FaSearch, FaServer } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <div className="bg-blue-800 py-12 px-3 sm:px-6 lg:px-16" id="services">
      <motion.h2
        ref={headingRef}
        className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
        initial={{ x: -100, opacity: 0 }}
        animate={headingInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Services
      </motion.h2>

      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-white to-blue-100 shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col items-center transition-transform"
            variants={cardVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            custom={index}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4f46e5] mb-5 transition-transform duration-300 hover:scale-110">
              <service.icon className="text-xl text-white" />
            </div>
            <h3 className="text-xl text-blue-800 font-bold mb-3 text-center">{service.title}</h3>
            <p className="text-center text-blue-800 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Crafting high-performing, responsive websites tailored to your business goals.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description: "Creating seamless, feature-rich apps for iOS and Android platforms.",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    description: "Boosting your online presence through strategic campaigns and analytics.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "Designing user-centered interfaces that are beautiful, intuitive, and engaging.",
  },
  {
    icon: FaSearch,
    title: "SEO Services",
    description: "Optimizing your site to rank higher in search results and drive more traffic.",
  },
  {
    icon: FaServer,
    title: "Custom Software Development",
    description: "Building secure, scalable software solutions tailored to your business needs.",
  },
];

export default Services;

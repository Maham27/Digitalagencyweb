import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactForm = () => {
  const ParaRef = useRef(null);
  const FormRef = useRef(null);
  const ParaInView = useInView(ParaRef, { once: true, margin: "-100px" });
  const FormInView = useInView(FormRef, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (e.g., API request)
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 py-6 mt-10" id="contact">
      <div className="max-w-2xl w-full">
        <div ref={ParaRef}>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={ParaInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-bold text-[#1e3a8a] mb-6 text-center"
          >
            Let’s Build Something Great Together!
          </motion.h2>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={ParaInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-center text-[#1e3a8a] mb-8"
          >
            Ready to bring your vision to life? Fill out the form below to request a quote or share your project idea — our team will connect with you shortly.
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" ref={FormRef}>
          {/* Input Fields with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={FormInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              className="flex-1 px-4 py-3 rounded-md bg-[#e0f2ff] text-[#1e3a8a] placeholder-[#1e3a8a] outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              className="flex-1 px-4 py-3 rounded-md bg-[#e0f2ff] text-[#1e3a8a] placeholder-[#1e3a8a] outline-none"
            />
          </motion.div>

          {/* Additional Input Fields */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={FormInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }} // Add delay for a staggered effect
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="flex-1 px-4 py-3 rounded-md bg-[#e0f2ff] text-[#1e3a8a] placeholder-[#1e3a8a] outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="flex-1 px-4 py-3 rounded-md bg-[#e0f2ff] text-[#1e3a8a] placeholder-[#1e3a8a] outline-none"
            />
          </motion.div>

          {/* Company Field */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={FormInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Company / Organization"
              aria-label="Company / Organization"
              className="w-full px-4 py-3 rounded-md bg-[#cce7ff] text-[#1e3a8a] placeholder-[#1e3a8a] outline-none"
            />
          </motion.div>

          {/* Dropdown for Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={FormInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <select
              className="w-full px-4 py-3 rounded-md bg-[#cce7ff] text-[#1e3a8a] outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Service Required
              </option>
              <option>Website Design & Development</option>
              <option>Mobile App Development</option>
              <option>Digital Marketing</option>
              <option>UI/UX Design</option>
              <option>SEO Services</option>
              <option>Custom Software Development</option>
              <option>Other</option>
            </select>
          </motion.div>

          {/* Project Requirements Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={FormInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <textarea
              rows="4"
              placeholder="Tell us about your project or specific requirements"
              aria-label="Project Requirements"
              className="w-full px-4 py-3 rounded-md bg-[#b3d9ff] text-[#1e3a8a] placeholder-[#1e3a8a] outline-none resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={FormInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  whileFocus={{ scale: 1.03 }}
  type="submit"
  className="w-40 px-6 py-3 bg-gradient-to-r from-[#1e40af] to-[#1d4ed8] text-white font-medium rounded-full shadow-lg"
>
  Submit
</motion.button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

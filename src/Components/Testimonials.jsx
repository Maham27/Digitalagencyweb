import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/scrollbar';

const testimonials = [
  {
    id: 1,
    name: 'Emma Reynolds',
    title: 'Marketing Director, BloomWell',
    quote:
      'We approached PixelCraze for a complete website redesign and SEO strategy. The team was super responsive and understood our vision perfectly. Our bounce rate dropped by 35% and conversions are up—great work!',
  },
  {
    id: 2,
    name: 'Michael Carter',
    title: 'Founder, Carter Tech Solutions',
    quote:
      'PixelCraze helped us build a custom CRM tailored to our internal processes. It’s streamlined our work and saved us hours every week. Their backend team is solid and always meets deadlines.',
  },
  {
    id: 3,
    name: 'Lisa Green',
    title: 'Operations Manager, HealthNest',
    quote:
      'The mobile app they built for our wellness platform is not only beautiful but extremely user-friendly. We’ve received fantastic feedback from our clients. I’d recommend them in a heartbeat.',
  },
  {
    id: 4,
    name: 'David Nguyen',
    title: 'CEO, ShiftSpace Digital',
    quote:
      'We’ve worked with PixelCraze on several digital campaigns, and they always deliver results. From landing page design to running paid ads, their strategies helped us grow our online reach by over 60%.',
  },
];

const Testimonials = () => {
  const headRef = useRef(null);
  const testimonialsInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        {/* Heading with Animation */}
        <motion.div
          ref={headRef}
          initial={{ x: -100, opacity: 0 }}
          animate={testimonialsInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3 className="text-3xl font-bold text-blue-900 text-left mb-8 mx-10">
            What Our Clients Say About Us
          </h3>
        </motion.div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          scrollbar={{ draggable: true }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center items-center">
              {/* Testimonial Slide with Animation */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={testimonialsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col justify-between bg-gradient-to-b from-white to-blue-100 p-6 rounded-lg shadow-lg w-full min-h-[274px] mb-5"
              >
                <div>
                  <p className="text-blue-900 italic mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="author flex mt-4">
                  <div className="meta">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {testimonial.name}
                    </h3>
                    <span className="text-sm text-blue-400">{testimonial.title}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;


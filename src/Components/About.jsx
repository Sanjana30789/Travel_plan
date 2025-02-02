import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/about.webp';
import './About.css'; // Import the CSS

function AboutUs() {
  // Gradient background animation
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffffff, #e0e0e0, #808080, #000000)',
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 8s ease infinite',
    padding: '20px',
    overflow: 'hidden',
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="content-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="text-content">
          <motion.h1 className="heading">
            About Us
          </motion.h1>
          <motion.p className="paragraph">
            Welcome to TBO, your global partner in simplifying travel solutions for businesses worldwide. Since our establishment in 2006, TBO has evolved from a single-product air ticketing company into a leading global travel distribution platform. Our proprietary technology seamlessly connects travel buyers and suppliers, ensuring streamlined transactions across the diverse landscape of global travel.
          </motion.p>
          <motion.p className="paragraph">
            At TBO, we offer a comprehensive range of travel solutions including air travel, hotels, rail, holiday packages, car rentals, transfers, sightseeing, cruise, and cargo. Leveraging data analytics, artificial intelligence, and machine learning, our proprietary platform enhances visibility and sales of relevant travel products based on specific search parameters.
            Driven by a technology-first approach, TBO continues to pioneer innovations in the travel industry. Our modular architecture supports the integration of new travel products and enables expansion into new geographies. Trusted by a vast network of travel ecosystems globally, TBO's travel APIs facilitate seamless connectivity and enhance efficiency across the travel sector. Join TBO and experience travel made easy and simple through innovative technology and unparalleled service.
          </motion.p>
        </div>
        <div className="image-content">
          <motion.img
            className="image"
            src={photo}
            alt="About Us"
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutUs;

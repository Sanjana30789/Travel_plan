import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/about.webp';

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

  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1400px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    borderRadius: '16px',
    padding: '50px',
  };

  const textStyle = {
    flex: 1,
    paddingRight: '40px',
  };

  const headingStyle = {
    fontSize: '42px',
    marginBottom: '20px',
    fontFamily: "'Roboto', sans-serif",
    background: 'linear-gradient(90deg, #ffffff, #000000)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent', // Gradient text
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for visibility
    color: '#000', // Fallback solid color
  };

  const paragraphStyle = {
    fontSize: '20px',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '20px',
    fontFamily: "'Arial', sans-serif",
  };

  const imageStyle = {
    flex: 1,
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        style={contentStyle}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div style={textStyle}>
          <motion.h1
            style={headingStyle}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.p
            style={paragraphStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Welcome to our website! We are a passionate team dedicated to providing
            the best services to our customers. Our mission is to make travel
            easier, more enjoyable, and more affordable. We strive to offer an
            exceptional experience, whether you're planning your next vacation or
            looking for the best flight deals.
          </motion.p>
          <motion.p
            style={paragraphStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            With years of experience in the travel industry, we are committed to
            helping our users plan their trips with confidence. Our platform offers
            a wide range of tools and resources to make your travel planning process
            seamless and stress-free. Join us in making your next trip unforgettable!
          </motion.p>
        </div>
        <div style={imageStyle}>
          <motion.img
            style={imgStyle}
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

// Gradient animation keyframes
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(styles);

export default AboutUs;

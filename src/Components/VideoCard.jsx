import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations

const VideoCard = ({ destination, videoSrc, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  // Define animation variants for framer-motion
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" },
  };

  const styles = {
    card: {
      background: "linear-gradient(135deg, #f3f4f6, #f9fafb)", // Soft gradient background
      borderRadius: "25px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      padding: "1rem",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden", // Hide any overflow, like video edges on hover
      backgroundImage: "url('https://www.example.com/your-background-image.jpg')", // Optional background image
      backgroundSize: "cover", // Ensure background covers the entire area
      backgroundPosition: "center", // Position the background in the center
      transition: "all 0.3s ease", // Smooth transition on hover
    },
    video: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "10px",
      transition: "transform 0.3s ease", // Smooth transition for scaling
    },
    button: {
      backgroundColor: "#ff5733",
      color: "#fff",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "1rem",
    },
    heading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333", // Dark text color for better contrast
    },
  };

  return (
    <motion.div
      style={styles.card}
      variants={cardVariants} // Attach animation variants to the card
      initial="initial"
      animate="animate"
      whileHover="hover" // Add hover effect animation
    >
      <h3 style={styles.heading}>{destination}</h3>
      <motion.video
        style={styles.video}
        autoPlay
        loop
        muted
        whileHover={{ scale: 1.1 }} // Scale the video on hover
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <motion.button
        style={styles.button}
        whileHover={{ scale: 1.1, backgroundColor: "#e14b2f" }} // Scale and change color on hover
        onClick={handleClick}
      >
        Click Here
      </motion.button>
    </motion.div>
  );
};

export default VideoCard;

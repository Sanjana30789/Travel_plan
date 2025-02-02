import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from './About'
import Footer from './Footer'

// Import the local image(s)
import parisImage from "../assets/paris.jpg";
import delhiImage from "../assets/newdelhi.webp";
import mumbaiImage from "../assets/mumbai.jpg";
import newyorkImage from "../assets/new-york.avif";

// Import your background video
import backgroundVideo from "../assets/Explore with us.mp4";  // Adjust the path based on your project structure

const Homepage = () => {
  const navigate = useNavigate();
  
  // State to track window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener for window resizing
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    container: {
      position: "relative",
      height: "100vh",  // Full viewport height
      display: "flex",
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
      color: "#fff",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      overflow: "hidden",
    },
    video: {
      position: "absolute",
      top: "50%",  // Move video to the center vertically
      left: "50%", // Move video to the center horizontally
      transform: "translate(-50%, -50%)", // Ensure the video is perfectly centered
      width: "100%",  // Ensure the video takes the full width of the screen
      height: "100%", // Ensure the video takes the full height of the screen
      objectFit: "cover",  // Ensure it scales proportionally
      zIndex: -1, // Keeps the video behind the content
    },
    heading: {
      fontSize: windowWidth < 480 ? "2rem" : "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
    },
    locationList: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    locationButton: {
      fontSize: windowWidth < 480 ? "1rem" : "1.2rem", // Adjust button size for small screens
      backgroundColor: "black",
      color: "#fff",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
    button: {
      fontSize: windowWidth < 480 ? "1.2rem" : "1.5rem", // Adjust button size for small screens
      padding: "0.8rem 2rem",
      backgroundColor: "black",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
    },
    destinations: {
      padding: "2rem",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: "15px",
      width: windowWidth < 480 ? "100%" : "90%", // Full width for mobile
      margin: "2rem auto",
    },
    destinationHeading: {
      fontSize: windowWidth < 480 ? "1.8rem" : "2.5rem", // Adjust heading size for small screens
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    destinationGrid: {
      display: "grid",
      gridTemplateColumns: windowWidth < 768 ? "1fr 1fr" : "repeat(auto-fit, minmax(200px, 1fr))", // Adjust grid layout for smaller screens
      gap: "1.5rem",
    },
    destinationCard: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
    },
    destinationImage: {
      width: "100%",
      height: windowWidth < 480 ? "150px" : "200px", // Adjust image height for smaller screens
      objectFit: "cover",
      borderRadius: "15px",
    },
    readMore: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      padding: "0.5rem 1rem",
      backgroundColor: "#ff5733",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  const handleLocationClick = (location) => {
    navigate(`/location/${location.toLowerCase()}`);
  };

  return (
    <div>
      {/* Fullscreen Hero Section with Background Video */}
      <div style={styles.container}>
        <video style={styles.video} autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Top Destinations Section */}
      <div style={styles.destinations}>
        <h2 style={styles.destinationHeading}>Top Destinations</h2>
        <div style={styles.destinationGrid}>
          {[{ name: "Paris", img: parisImage }, { name: "Delhi", img: delhiImage }, { name: "New-York", img: newyorkImage }, { name: "Mumbai", img: mumbaiImage }].map((destination) => (
            <div key={destination.name} style={styles.destinationCard}>
              <img
                src={destination.img}
                alt={destination.name}
                style={styles.destinationImage}
              />
              <button style={styles.readMore}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* About us section */}
      <div>
        <AboutUs />
      </div>
      
      <Footer />
    </div>
  );
};

export default Homepage;

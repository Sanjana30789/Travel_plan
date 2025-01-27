import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from './About'

// Import the local image(s)
import parisImage from "../assets/paris.jpg";
import delhiImage from "../assets/newdelhi.webp";
import mumbaiImage from "../assets/mumbai.jpg";
import newyorkImage from "../assets/new-york.avif";

// Import your background video
import backgroundVideo from "../assets/Explore with us.mp4";  // Adjust the path based on your project structure

const Homepage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      overflow: "hidden",
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,  // Ensure the video stays behind the content
    },
    heading: {
      fontSize: "3rem",
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
      fontSize: "1.2rem",
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
      fontSize: "1.5rem",
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
      width: "90%",
      margin: "2rem auto",
    },
    destinationHeading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    destinationGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
      height: "200px",
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
        {/* <h1 style={styles.heading}>Explore Places With Us</h1> */}
        {/* <div style={styles.locationList}>
          {["London", "Paris", "Mumbai", "Delhi"].map((location) => (
            <button
              key={location}
              style={styles.locationButton}
              onClick={() => handleLocationClick(location)}
            >
              {location}
            </button>
          ))}
        </div> */}
        {/* <button style={styles.button}>Start Exploring</button> */}
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
        <AboutUs/>
      </div>
    </div>
  );
};

export default Homepage;

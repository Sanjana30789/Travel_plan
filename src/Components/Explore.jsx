import React from "react";
import VideoCard from "./VideoCard";

// Sample videos for each destination
import parisVideo from "../assets/paris.mp4";
import delhiVideo from "../assets/delhi.mp4";
import mumbaiVideo from "../assets/Explore the Mumbai...mp4";
import Footer from './Footer';

const Explore = () => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap", // Allow wrapping to next line
      justifyContent: "space-between", // Distribute items evenly
      gap: "2.5rem", // Reduced gap to make space minimal between items
      padding: "29px",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "5000px", // Increased width of the container
      margin: "0 auto",   // Center the container horizontally
    },
    heading: {
      fontSize: "2.5rem",
      textAlign: "center",
      marginBottom: "2rem",
      fontFamily: "cursive",
      color: "black",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    pageContainer: {
      width: "100%",
      marginTop: "5px",
      // background: "linear-gradient(65deg, #0000FF, #FFFFFF)", // Gradient background
      animation: "backgroundAnimation 10s infinite alternate",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "90px 20px",
    },
    contentContainer: {
      width: "100%",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem", // Space between video cards (not for individual divs, but for the entire row)
    },
    footerContainer: {
      marginTop: "40px",
      marginBottom: "0px", // Adjust this for space between content and footer
    },
    videoCard: {
      flex: "0 0 32%", // Each card takes up 32% of the width (3 items per row)
      minWidth: "250px", // Ensure a minimum size for each card
      maxWidth: "350px", // Ensure a maximum size for each card
    },
  };

  return (
    <div style={styles.pageContainer}>
      <style>
        {`
          @keyframes backgroundAnimation {
            0% { background: linear-gradient(45deg, #FFFFFF, #0000FF); }
          }
        `}
      </style>
      <h2 style={styles.heading}>Explore Destinations</h2>

      <div style={styles.contentContainer}>
        {/* First Row */}
        <div style={styles.container}>
          <VideoCard style={styles.videoCard} destination="Paris" videoSrc={parisVideo} path="/photosphere" />
          <VideoCard style={styles.videoCard} destination="Delhi" videoSrc={delhiVideo} path="/photosphere" />
          <VideoCard style={styles.videoCard} destination="Mumbai" videoSrc={mumbaiVideo} path="/photosphere" />
        </div>

        {/* Second Row */}
        <div style={styles.container}>
          <VideoCard style={styles.videoCard} destination="Paris" videoSrc={parisVideo} path="/photosphere" />
          <VideoCard style={styles.videoCard} destination="Delhi" videoSrc={delhiVideo} path="/photosphere" />
          <VideoCard style={styles.videoCard} destination="Mumbai" videoSrc={mumbaiVideo} path="/photosphere" />
        </div>
      </div>

      <div style={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default Explore;

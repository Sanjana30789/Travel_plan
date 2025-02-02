import React from "react";
import VideoCard from "./VideoCard";

// Sample videos for each destination
import parisVideo from "../assets/paris.mp4";
import delhiVideo from "../assets/delhi.mp4";
import mumbaiVideo from "../assets/Explore the Mumbai...mp4";
import Footer from './Footer'

const Explore = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "2rem",
      padding: "20px",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "1200px", // Key change: Set a maximum width
      margin: "0 auto",   // Center the container horizontally
    },
    heading: {
      fontSize: "2.5rem",
      textAlign: "center",
      marginBottom: "2rem",
      fontFamily: "cursive",
      color: "#fff",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    },
    pageContainer: {
      marginTop: "5px",
      
      background: "linear-gradient(65deg, #0000FF,#FFFFFF)", // Gradient background
      animation: "backgroundAnimation 10s infinite alternate",
      minHeight: "100vh",
      display: "flex", // Use flexbox for vertical centering
      flexDirection: "column", // Align items vertically
      alignItems: "center", // Center horizontally
      padding: "100px 0",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <style>
        {`
          @keyframes backgroundAnimation {
            0% { background: linear-gradient(45deg, #FFFFFF, #0000FF); }
            // 100% { background: linear-gradient(45deg, #a18cd1, #fbc2eb); }
          }
        `}
      </style>
      <h2 style={styles.heading}>Explore Destinations</h2>
      <div style={styles.container}> {/* White container */}
        <VideoCard destination="Paris" videoSrc={parisVideo} path="/photosphere" />
        <VideoCard destination="Delhi" videoSrc={delhiVideo} path="/photosphere" />
        <VideoCard destination="Mumbai" videoSrc={mumbaiVideo} path="/photosphere" />
        <VideoCard destination="France" videoSrc={delhiVideo} path="/photosphere" />
        <VideoCard destination="Bangalore" videoSrc={mumbaiVideo} path="/photosphere" />
        <VideoCard destination="London" videoSrc={parisVideo} path="/photosphere" />
      </div>
      <Footer/>
    </div>
  );
};

export default Explore;
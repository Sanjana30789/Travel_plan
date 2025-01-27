import React from "react";
import VideoCard from "./VideoCard";  // Import the VideoCard component

// Sample videos for each destination
import parisVideo from "../assets/paris.mp4"; // Adjust the paths as needed
import delhiVideo from "../assets/delhi.mp4";
import mumbaiVideo from "../assets/Explore the Mumbai...mp4";

const Explore = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-around",
      gap: "2rem",
      flexWrap: "wrap",
      margin: "2rem 0",
      marginTop: "40px",
    

      
    },
    heading: {
      
      fontSize: "2rem",
      textAlign: "center",
      marginBottom: "2rem",
    },
  };

  return (
    <div style={{marginTop: "100px" ,}} >
     <h2 style={{ ...styles.heading, marginTop: "30px",fontFamily :"cursive" }}>Explore Destinations</h2>

      <div style={styles.container}>
        <VideoCard
          destination="Paris"
          videoSrc={parisVideo}
          path="/photosphere"
        />
        <VideoCard
          destination="Delhi"
          videoSrc={delhiVideo}
          path="/photosphere"
        />
        <VideoCard
          destination="Mumbai"
          videoSrc={mumbaiVideo}
          path="/photosphere"
        />
        <VideoCard
          destination="France"
          videoSrc={delhiVideo}
          path="/photosphere"
        />
        <VideoCard
          destination="Bangalore"
          videoSrc={mumbaiVideo}
          path="/photosphere"
        />
        <VideoCard
          destination="London"
          videoSrc={parisVideo}
          path="/photosphere"
        />
      </div>
    </div>
  );
};

export default Explore;

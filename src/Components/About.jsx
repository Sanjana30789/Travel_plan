import React from 'react';

// Styling using styled-components
const AboutUsPage = {
  background: 'linear-gradient(to right, lightblue, darkblue)',
  padding: '20px',
  minHeight: '100vh',
  marginTop : '70px',
};

const AboutUsContainer = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '30px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const AboutUsTitle = {
  fontSize: '2.5rem',
  color: '#333',
  textAlign: 'center',
  marginBottom: '20px',
};

const AboutUsDescription = {
  fontSize: '1.2rem',
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const AboutUsHeading = {
  fontSize: '1.8rem',
  color: '#007BFF',
  marginTop: '20px',
};

const AboutUsList = {
  listStyleType: 'none',
  padding: '0',
};

const ListItem = {
  fontSize: '1.2rem',
  color: '#555',
  marginBottom: '10px',
};

function AboutUs() {
  return (
    <div style={AboutUsPage}>
      <div style={AboutUsContainer}>
        <h1 style={AboutUsTitle}>About Us</h1>
        <p style={AboutUsDescription}>
          Welcome to our Travel Agency! We are a team of passionate travel experts who are dedicated to helping you explore the world.
        </p>
        <p style={AboutUsDescription}>
          As part of the TBO Hackathon, we are working on a smart and seamless itinerary planning solution, where we offer personalized travel plans that cater to your preferences, budget, and time constraints.
        </p>
        <h2 style={AboutUsHeading}>Our Mission</h2>
        <p style={AboutUsDescription}>
          Our mission is to make travel planning effortless for every traveler, ensuring that your journey is filled with exciting destinations, memorable experiences, and stress-free logistics. Whether you're looking for a peaceful getaway or an adventurous trip, we have got you covered.
        </p>
        <h2 style={AboutUsHeading}>Why Choose Us?</h2>
        <ul style={AboutUsList}>
          <li style={ListItem}>Personalized itineraries tailored to your preferences</li>
          <li style={ListItem}>Seamless planning, from flights to accommodations</li>
          <li style={ListItem}>Expert travel advice and tips</li>
          <li style={ListItem}>Affordable options for every budget</li>
          <li style={ListItem}>Part of the TBO Hackathon – Bringing innovation to travel planning</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;

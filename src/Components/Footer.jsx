import React from 'react';

import { useEffect } from "react";

const Footer = () => {
  // Use effect hook to load the chatbot script
  useEffect(() => {
    if (!document.getElementById("docsbot-script")) {
      const script = document.createElement("script");
      script.id = "docsbot-script";
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widget.docsbot.ai/chat.js";

      script.onload = () => {
        if (window.DocsBotAI && typeof window.DocsBotAI.mount === "function") {
          window.DocsBotAI.mount({
            id: "BEN1YpwH0ODr8pzVSYi7/CerF6wu4yNBqz8bSSDqw",
          });
        } else {
          console.error("DocsBotAI is not properly initialized.");
        }
      };

      script.onerror = () => {
        console.error("Failed to load the DocsBot script.");
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.sections}>
        {/* Logo and About Section */}
        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Travel-Planner</h3>
          <p style={footerStyles.text}>
            Revolutionizing comfort and productivity with innovative designs.
          </p>
        </div>

        {/* Quick Links */}
        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Quick Links</h3>
          <ul style={footerStyles.list}>
            <li style={footerStyles.listItem}>
              <a href="#explore" style={footerStyles.link}>Explore</a>
            </li>
            <li style={footerStyles.listItem}>
              <a href="#about" style={footerStyles.link}>About Us</a>
            </li>
            <li style={footerStyles.listItem}>
              <a href="#itinerary" style={footerStyles.link}>Itinerary</a>
            </li>
            <li style={footerStyles.listItem}>
              <a href="#localguide" style={footerStyles.link}>Local Guide</a>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Connect with Us</h3>
          <div style={footerStyles.socialIcons}>
            <a href="https://facebook.com" style={footerStyles.icon}>&#xf09a;</a>
            <a href="https://twitter.com" style={footerStyles.icon}>&#xf099;</a>
            <a href="https://instagram.com" style={footerStyles.icon}>&#xf16d;</a>
          </div>
          <p style={footerStyles.contact}>
            Email: <a href="mailto:contact@smart-chair.com" style={footerStyles.link}>contact@smart-chair.com</a>
          </p>
          <p style={footerStyles.contact}>
            Phone: <a href="tel:+123456789" style={footerStyles.link}>+1 234 567 89</a>
          </p>
        </div>
      </div>
      <div style={footerStyles.bottom}>
        &copy; {new Date().getFullYear()} Smart-Chair. All Rights Reserved.
      </div>
    </footer>
  );
};



// Footer Styles
const footerStyles = {
  container: {
    backgroundColor: '#3B3C36',
    color: 'white',
    // top: '0', 
    left: '0', 
    width: '100vw',
    display: 'flex',
    flexDirection: 'column', // Stack sections vertically
    justifyContent: 'center',
    alignItems: 'center', // Ensure it stretches fully across
    padding: '20px 0',
    margin:'0px 0px 0px 0px', // Add padding for spacing
  },
  sections: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%', // Ensure full width
    maxWidth: '1500px', // Max width to constrain large screens
    margin: '0 auto', // Center it horizontally within the footer
    padding: '0 20px', // Padding to ensure spacing from the edges
    boxSizing: 'border-box', // Ensure padding doesn't affect width
  },
  section: {
    flex: '1',
    margin: '0 0px',
  },
  heading: {
    fontSize: '19px',
    fontWeight: '1000',
    marginBottom: '10px',
  },
  text: {
    fontSize: '19px',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '5px 0',
  },
  link: {
    color: '#00ADEF',
    textDecoration: 'none',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '24px',
  },
  icon: {
    color: '#00ADEF',
    textDecoration: 'none',
    fontFamily: 'FontAwesome',
    cursor: 'pointer',
  },
  contact: {
    fontSize: '14px',
    margin: '5px 0',
  },
  bottom: {
    borderTop: '1px solid #555',
    padding: '10px',
    fontSize: '14px',
    width: '100%', // Ensure full width for bottom section
    textAlign: 'center', // Center the text in the bottom section
  },
};

export default Footer;

import React, { useEffect } from "react";

const Footer = () => {
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
            style: {
              width: "500px",
              height: "600px",
              bottom: "20px",
              right: "20px",
            },
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
        {/* Travel Planner Info */}
        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Travel Planner</h3>
          <p style={footerStyles.text}>
            VoyageHack Vista, powered by <strong>TBO</strong>, is your personalized trip companion,  
            helping you explore destinations, book flights, and create seamless itineraries.
          </p>
        </div>

        {/* Quick Links */}
        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>Quick Links</h3>
          <ul style={footerStyles.list}>
            <li><a href="/" style={footerStyles.link}>Home</a> - Discover your next adventure</li>
            <li><a href="/explore" style={footerStyles.link}>Explore</a> - Find top destinations</li>
            <li><a href="/itinerary" style={footerStyles.link}>Itinerary</a> - Plan your perfect trip</li>
            <li><a href="/flightsearch" style={footerStyles.link}>Flight Booking</a> - Book flights easily</li>
            <li><a href="/panaroma" style={footerStyles.link}>Example</a> - Sample trip plans</li>
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
            Email: <a href="mailto:support@travelplanner.com" style={footerStyles.link}>support@travelplanner.com</a>
          </p>
          <p style={footerStyles.contact}>
            Phone: <a href="tel:+123456789" style={footerStyles.link}>+1 234 567 89</a>
          </p>
        </div>
      </div>
      <div style={footerStyles.bottom}>
        &copy; {new Date().getFullYear()} Travel Planner. All Rights Reserved.
      </div>
    </footer>
  );
};

// Footer Styles
const footerStyles = {
  container: {
    backgroundColor: "#2C3E50",
    color: "white",
    left: "0",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0",
  },
  sections: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px",
    flexWrap: "wrap",  // Allow wrapping on smaller screens
  },
  section: {
    flex: "1",
    margin: "0 20px",
    minWidth: "250px",  // Ensure sections don't get too small
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
    borderBottom: "2px solid #00ADEF",
    paddingBottom: "5px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: "#00ADEF",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "500",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    fontSize: "24px",
  },
  icon: {
    color: "#00ADEF",
    textDecoration: "none",
    fontFamily: "FontAwesome",
    cursor: "pointer",
  },
  contact: {
    fontSize: "16px",
    margin: "10px 0",
  },
  bottom: {
    borderTop: "1px solid #555",
    padding: "15px",
    fontSize: "16px",
    width: "100%",
    textAlign: "center",
  },
  // Mobile-responsive styles
  '@media (max-width: 768px)': {
    container: {
      padding: "20px 0",
    },
    sections: {
      flexDirection: "column",
      alignItems: "center",
    },
    section: {
      marginBottom: "20px",
      flex: "none",
      width: "100%",
    },
    heading: {
      fontSize: "20px",
    },
    text: {
      fontSize: "16px",
    },
    list: {
      fontSize: "16px",
    },
    link: {
      fontSize: "16px",
    },
    socialIcons: {
      fontSize: "20px",
      gap: "10px",
    },
    bottom: {
      fontSize: "14px",
    },
  },

  '@media (max-width: 480px)': {
    container: {
      padding: "15px 0",
    },
    heading: {
      fontSize: "18px",
    },
    text: {
      fontSize: "14px",
    },
    list: {
      fontSize: "14px",
    },
    link: {
      fontSize: "14px",
    },
    socialIcons: {
      fontSize: "18px",
      gap: "8px",
    },
    bottom: {
      fontSize: "12px",
    },
  },
};

export default Footer;

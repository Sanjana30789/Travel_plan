import React, { useState } from "react";
import { LoadScript, GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyAgu4rFP8QUJuBO6IKa83JUGCreeKagZB0";

const PanoramaViewer = () => {
  const [location, setLocation] = useState({ lat: 19.076, lng: 72.8777 }); // Default: Mumbai
  const [destination, setDestination] = useState("");
  const [specificPlace, setSpecificPlace] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New loading state for better user experience

  // Handle search and fetch video from the backend
  const handleSearch = async () => {
    const query = `${specificPlace}, ${destination}`;
    setIsLoading(true); // Show loading state

    try {
      const response = await fetch(`/api/create-video?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (data.success) {
        setLocation(data.location);
        setVideoUrl(data.videoUrl); // Set the video URL if the API call is successful
      } else {
        alert("Failed to create video. Please try again.");
      }
    } catch (error) {
      alert("Error fetching video.");
      console.error(error);
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} onLoad={() => setMapLoaded(true)}>
      <div style={{ textAlign: "center", padding: "20px", marginTop: "80px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          Explore in 360°
        </h2>

        {/* Input fields for destination and specific place */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Enter Destination (e.g., Mumbai)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{
              width: "250px",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />

          <input
            type="text"
            placeholder="Enter Specific Place (e.g., Marine Drive)"
            value={specificPlace}
            onChange={(e) => setSpecificPlace(e.target.value)}
            style={{
              width: "250px",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />

          <button
            onClick={handleSearch}
            style={{
              padding: "12px 18px",
              borderRadius: "8px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Show Panorama
          </button>
        </div>

        {/* Show loading state */}
        {isLoading && <div style={{ marginTop: "20px", fontSize: "18px", color: "#007BFF" }}>Loading...</div>}

        {/* Display the map and panorama */}
        {mapLoaded && !videoUrl && !isLoading && (
          <div
            style={{
              width: "100%",
              height: "500px",
              marginTop: "20px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <GoogleMap
              center={location}
              zoom={14}
              mapContainerStyle={{ width: "100%", height: "500px" }}
            >
              <StreetViewPanorama
                position={location}
                visible={true}
                options={{ pov: { heading: 100, pitch: 0 } }}
              />
            </GoogleMap>
          </div>
        )}

        {/* Display the video if available */}
        {videoUrl && (
          <div
            style={{
              width: "100%",
              height: "500px",
              marginTop: "20px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <video
              src={videoUrl} // Use the URL from the backend
              controls
              style={{ width: "80%", borderRadius: "10px", marginTop: "20px" }}
              onLoadedData={() => console.log("Video Loaded")} // Optional: Log or perform an action when video is loaded
            />
          </div>
        )}
      </div>
    </LoadScript>
  );
};

export default PanoramaViewer;

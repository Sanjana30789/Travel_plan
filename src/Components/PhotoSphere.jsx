import { useEffect, useState } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";

const PhotoSphereViewer = ({ panorama, caption, galleryItems }) => {
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    // Initialize the Photo Sphere Viewer
    const newViewer = new Viewer({
      container: document.querySelector("#pano-viewer"),
      panorama: panorama, // Default panorama image
      caption: caption, // Caption for the panorama
      navbar: [
        "autorotate",
        "zoom", // Combines zoomIn, zoomOut, and zoomRange
        "fullscreen",
        "moveLeft",
        "moveRight",
        "gallery",
      ], // Add move buttons to the navbar
      plugins: [
        [
          AutorotatePlugin,
          {
            autostartDelay: 1000, // Start auto-rotation after 1 second
            autorotateSpeed: "1.5rpm", // Set auto-rotation speed
            autorotatePitch: "5deg", // Set vertical angle for rotation
            autostartOnIdle: true, // Restart auto-rotation when idle
          },
        ],
        [
          GalleryPlugin,
          {
            visibleOnLoad: true, // Show the gallery when the viewer is loaded
          },
        ],
      ],
    });

    // Define the gallery items
    const gallery = newViewer.getPlugin(GalleryPlugin);
    gallery.setItems(galleryItems);

    // Save the viewer instance
    setViewer(newViewer);

    // Cleanup function to destroy the viewer on component unmount
    return () => {
      newViewer.destroy();
    };
  }, [panorama, caption, galleryItems]);

  return (
    <div id="pano-viewer" style={{ width: "100%", height: "800px" }}></div>
  );
};

export default PhotoSphereViewer;
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { TextField, Autocomplete, Paper } from '@mui/material';

const MAPBOX_TOKEN = "pk.eyJ1IjoiZGhydXZ2di0wNCIsImEiOiJjbHp4eHhlODEwdHBqMmlzZ3ZvZHYxa3BhIn0.sGikVHF9zf_yV4zsGZVu1Q";

function Map({ location, onPlaceSelect, searchQuery }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [searchResults, setSearchResults] = useState([]);

  const searchPlace = async (query) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}`
      );
      const data = await response.json();
      setSearchResults(data.features);
    } catch (error) {
      console.error('Error searching places:', error);
    }
  };

  const flyToLocation = (coords) => {
    map.current.flyTo({
      center: coords,
      zoom: 14,
      essential: true
    });
  };

  useEffect(() => {
    if (searchQuery) {
      searchPlace(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!location) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [location.lng, location.lat],
        zoom: 12
      });

      map.current.addControl(new mapboxgl.NavigationControl());
      new mapboxgl.Marker({ color: '#2196f3' })
        .setLngLat([location.lng, location.lat])
        .addTo(map.current);
    } else {
      map.current.setCenter([location.lng, location.lat]);
    }

  }, [location]);

  const loadPointsOfInterest = async (location) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=5000&type=tourist_attraction&key=${process.env.GOOGLE_API_KEY}`
      );
      const data = await response.json();

      data.results.forEach(place => {
        const marker = new mapboxgl.Marker({ color: '#FF0000' })
          .setLngLat([place.geometry.location.lng, place.geometry.location.lat])
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<h3>${place.name}</h3>
               <p>${place.vicinity}</p>`
            )
          )
          .addTo(map.current);
      });
    } catch (error) {
      console.error('Error loading points of interest:', error);
    }
  };

  return (
    <div className="map-container">
      <Paper className="map-search">
        <Autocomplete
          options={searchResults}
          getOptionLabel={(option) => option.place_name}
          onChange={(event, newValue) => {
            if (newValue) {
              flyToLocation(newValue.center);
              onPlaceSelect(newValue);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search places"
              variant="outlined"
              onChange={(e) => searchPlace(e.target.value)}
            />
          )}
        />
      </Paper>
      <div ref={mapContainer} className="map" style={{ height: '100%' }} />
      
      {/* Inline CSS */}
      <style jsx>{`
        .map-container {
          display: flex;
          flex-direction: column;
        }

        .map-search {
          margin-bottom: 20px; /* Space between search and map */
        }

        .map {
          flex-grow: 1; /* The map takes up the remaining space */
        }

        /* Mobile-specific styles */
        @media only screen and (max-width: 768px) {
          .map-container {
            flex-direction: column-reverse; /* Place the map below the search on mobile */
          }

          .map-search {
            margin-bottom: 0;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Map;

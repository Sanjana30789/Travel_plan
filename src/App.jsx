
// import './App.css';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TravelForm from './Components/iternary';
// import Home from './Components/Home';
// import AboutUs from './Components/About';
// import FlightSearch from './Components/FlightSearch';
// import FlightResults from './Components/FlightResults';
// import { searchFlights } from './services/api';
// import PhotoSphereViewer from './Components/PhotoSphere'
// import Explore from './Components/Explore';

// import {
//   Container,
//   CssBaseline,
//   Alert,
//   Snackbar,
//   Typography,
//   CircularProgress,
//   Box,
// } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import React, { useState } from 'react';

// function App() {

//   const galleryItems = [
//     {
//       id: "1",
//       panorama: "/1.jpg",
//       thumbnail: "/1.jpg",
//       name: "A 1",
//       options: {
//         caption: "A 1",
//       },
//     },
//     {
//       id: "2",
//       panorama: "/2.jpg",
//       thumbnail: "/2.jpg",
//       name: "2",
//       options: {
//         caption: "2",
//       },
//     },
//     {
//       id: "3",
//       panorama: "/3.jpg",
//       thumbnail: "/3.jpg",
//       name: "3",
//       options: {
//         caption: "3",
//       },
//     },
//   ];



//   // State for flight search
//   const [flights, setFlights] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Flight search handler
//   const handleSearch = async (searchData) => {
//     try {
//       setLoading(true);
//       setError(null);
//       setFlights(null);

//       const response = await searchFlights(
//         searchData.departure,
//         searchData.arrival,
//         searchData.departureDate,
//         searchData.returnDate,
//         searchData.passengers
//       );

//       if (response && response.data) {
//         setFlights(response.data);
//       }
//     } catch (error) {
//       console.error('Error searching flights:', error);
//       setError('Failed to fetch flight data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//      <Router>
//          <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <Navbar />
//            <CssBaseline />
      
//            <Routes>
//              <Route path="/" element={<Home />} />
//              <Route path="/about" element={<AboutUs />} />
//              <Route path="/itinerary" element={<TravelForm />} />
//              <Route path="/explore" element={<Explore />} />
//              {/* <Route path="/photosphere" element={<PhotoSphereViewer />} /> */}
//              <Route
//               path="/flightsearch"
//               element={
//                 <Container sx={{ mt: 15 }}>
//                   <Typography variant="h3" align="center" sx={{ mt: 4, mb: 4 }}>
//                     Flight Booking System
//                   </Typography>
//                   <FlightSearch onSearch={handleSearch} />
//                   {loading && (
//                     <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
//                       <CircularProgress />
//                     </Box>
//                   )}
//                   {!loading && flights && <FlightResults flights={flights} />}
//                   <Snackbar
//                     open={!!error}
//                     autoHideDuration={6000}
//                     onClose={() => setError(null)}
//                     anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//                   >
//                     <Alert severity="error" onClose={() => setError(null)}>
//                     {error}
//                     </Alert>
//                   </Snackbar>
//                 </Container>
//               }
//             />
//             <Route
//               path="/photosphere"
//               element={
//                 <div className="app-container">
//                   <h1 style={{ fontFamily: "cursive", textAlign: "center", margin: "20px 0" }}>
//                     VOYAGEHACK Photo Sphere Demo
//                   </h1>
//                 <PhotoSphereViewer panorama="/1.jpg" caption="A 1" galleryItems={galleryItems} />
//                 </div>
//             }
//             />
//           </Routes>
//           <Footer />
//         </LocalizationProvider>
//    </Router>
//   );
// }

// export default App;



import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TravelForm from './Components/iternary';
import Home from './Components/Home';
import AboutUs from './Components/About';
import FlightSearch from './Components/FlightSearch';
import FlightResults from './Components/FlightResults';
import { searchFlights } from './services/api';
import PhotoSphereViewer from './Components/PhotoSphere';
import Explore from './Components/Explore';
import Map from './components/Map';
import ChatInterface from './components/ChatInterface';
import WeatherWidget from './components/WeatherWidget';
import {
  Container,
  CssBaseline,
  Alert,
  Snackbar,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/guide.css';
import PanoramaViewer from './Components/360';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  const galleryItems = [
    {
      id: '1',
      panorama: '/1.jpg',
      thumbnail: '/1.jpg',
      name: 'A 1',
      options: {
        caption: 'A 1',
      },
    },
    {
      id: '2',
      panorama: '/2.jpg',
      thumbnail: '/2.jpg',
      name: '2',
      options: {
        caption: '2',
      },
    },
    {
      id: '3',
      panorama: '/3.jpg',
      thumbnail: '/3.jpg',
      name: '3',
      options: {
        caption: '3',
      },
    },
  ];

  const [flights, setFlights] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [userLocation, setUserLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [geoError, setGeoError] = useState(null);
  const [geoLoading, setGeoLoading] = useState(true);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setGeoLoading(false);
          },
          (error) => {
            console.error('Error getting location:', error);
            setUserLocation({ lat: 40.7142, lng: -74.0060 });
            setGeoError('Could not get your location. Using default location.');
            setGeoLoading(false);
          }
        );
      } else {
        setUserLocation({ lat: 40.7142, lng: -74.0060 });
        setGeoError('Geolocation is not supported. Using default location.');
        setGeoLoading(false);
      }
    };

    getUserLocation();
  }, []);

  const handleSearch = async (searchData) => {
    try {
      setLoading(true);
      setError(null);
      setFlights(null);

      const response = await searchFlights(
        searchData.departure,
        searchData.arrival,
        searchData.departureDate,
        searchData.returnDate,
        searchData.passengers
      );

      if (response && response.data) {
        setFlights(response.data);
      }
    } catch (error) {
      console.error('Error searching flights:', error);
      setError('Failed to fetch flight data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    if (place?.center) {
      setUserLocation({
        lat: place.center[1],
        lng: place.center[0],
      });
    }
  };

  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <CssBaseline />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/itinerary" element={<TravelForm />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/panaroma" element={<PanoramaViewer />} />
            <Route
              path="/flightsearch"
              element={
                <Container sx={{ mt: 15 }}>
                  <Typography variant="h3" align="center" sx={{ mt: 4, mb: 4 }}>
                    Flight Booking System
                  </Typography>
                  <FlightSearch onSearch={handleSearch} />
                  {loading && (
                    <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                      <CircularProgress />
                    </Box>
                  )}
                  {!loading && flights && <FlightResults flights={flights} />}
                  <Snackbar
                    open={!!error}
                    autoHideDuration={6000}
                    onClose={() => setError(null)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  >
                    <Alert severity="error" onClose={() => setError(null)}>
                      {error}
                    </Alert>
                  </Snackbar>
                </Container>
              }
            />
            <Route
              path="/photosphere"
              element={
                <div className="app-container">
                  <h1 style={{ fontFamily: 'cursive', textAlign: 'center', margin: '20px 0' }}>
                    VOYAGEHACK Photo Sphere Demo
                  </h1>
                  <PhotoSphereViewer panorama="/1.jpg" caption="A 1" galleryItems={galleryItems} />
                </div>
              }
            />
            <Route
              path="/map"
              element={
                <div className="appcontainer">
                  {geoError && <div className="error-message">{geoError}</div>}
                  <main className="main-content">
                    <Map
                      location={userLocation}
                      onPlaceSelect={handlePlaceSelect}
                      searchQuery={searchQuery}
                    />
                    <WeatherWidget location={userLocation} />
                    <ChatInterface
                      selectedPlace={selectedPlace}
                      userLocation={userLocation}
                      onLocationSearch={handleLocationSearch}
                    />
                  </main>
                </div>
              }
            />
          </Routes>

          <Footer />
        </ThemeProvider>
      </LocalizationProvider>
    </Router>
  );
}

export default App;

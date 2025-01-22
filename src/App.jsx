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
import React, { useState } from 'react';

function App() {
  // State for flight search
  const [flights, setFlights] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Flight search handler
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

  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar />
        <CssBaseline />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/itinerary" element={<TravelForm />} />
          <Route
            path="/flightsearch"
            element={
              <Container>
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
        </Routes>
        <Footer />
      </LocalizationProvider>
    </Router>
  );
}

export default App;

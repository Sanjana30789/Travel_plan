import React, { useState } from 'react';
import Footer from './Footer'; // Import Footer
import { 
  TextField, 
  Button, 
  Box, 
  Container, 
  Typography, 
  Paper,
  Autocomplete,
  Grid,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { airports } from '../services/api';
import dayjs from 'dayjs';

const FlightSearch = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    departure: null,
    arrival: null,
    departureDate: dayjs(),
    returnDate: null,
    passengers: 1
  });

  const handleChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchData.departure && searchData.arrival && searchData.departureDate) {
      onSearch({
        ...searchData,
        departure: searchData.departure.code,
        arrival: searchData.arrival.code,
      });
    }
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#f0f0f0', py: 4 }} >
      <Box sx={{ flexGrow: 1 }}>
        {/* Flight Search Form */}
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h4" gutterBottom align="center">
              Flight Search
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={airports}
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                  value={searchData.departure}
                  onChange={(_, newValue) => handleChange('departure', newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Departure Airport"
                      required
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={airports}
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                  value={searchData.arrival}
                  onChange={(_, newValue) => handleChange('arrival', newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Arrival Airport"
                      required
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Departure Date"
                  value={searchData.departureDate}
                  onChange={(newValue) => handleChange('departureDate', newValue)}
                  minDate={dayjs()}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Return Date (Optional)"
                  value={searchData.returnDate}
                  onChange={(newValue) => handleChange('returnDate', newValue)}
                  minDate={searchData.departureDate || dayjs()}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      fullWidth: true
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Number of Passengers"
                  type="number"
                  value={searchData.passengers}
                  onChange={(e) => handleChange('passengers', e.target.value)}
                  required
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 4 }}
              size="large"
            >
              Search Flights
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Add Footer at the bottom */}
     
    </Container>
  );
};

export default FlightSearch;

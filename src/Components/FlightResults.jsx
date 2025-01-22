import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Container, 
  Box,
  Chip,
  Divider,
  Button,
  Link,
  Paper
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import LaunchIcon from '@mui/icons-material/Launch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AirlinesIcon from '@mui/icons-material/Airlines';
import dayjs from 'dayjs';

const FlightCard = ({ flight }) => (
  <Paper elevation={3} sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
    <Box sx={{ 
      bgcolor: 'primary.main', 
      color: 'white', 
      py: 1, 
      px: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AirlinesIcon sx={{ mr: 1 }} />
        <Typography variant="h6">
          {flight.airline.name}
        </Typography>
      </Box>
      <Typography>
        Flight {flight.flight.iata}
      </Typography>
    </Box>

    <CardContent>
      <Grid container spacing={3}>
        {/* Departure Details */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FlightTakeoffIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6">Departure</Typography>
          </Box>
          <Typography variant="body1" gutterBottom>
            {flight.departure.airport}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Terminal: {flight.departure.terminal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gate: {flight.departure.gate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dayjs(flight.departure.scheduled).format('HH:mm, DD MMM YYYY')}
          </Typography>
        </Grid>

        {/* Flight Duration */}
        <Grid item xs={12} md={2}>
          <Box sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <AccessTimeIcon color="action" />
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
              {flight.flight_duration}
            </Typography>
          </Box>
        </Grid>

        {/* Arrival Details */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FlightLandIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6">Arrival</Typography>
          </Box>
          <Typography variant="body1" gutterBottom>
            {flight.arrival.airport}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Terminal: {flight.arrival.terminal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gate: {flight.arrival.gate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dayjs(flight.arrival.scheduled).format('HH:mm, DD MMM YYYY')}
          </Typography>
        </Grid>
      </Grid>

      {/* Price and Booking Section */}
      <Box sx={{ 
        mt: 3, 
        pt: 2, 
        borderTop: 1, 
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Chip
          label={`$${flight.price}`}
          color="success"
          size="large"
          sx={{ fontSize: '1.2rem', px: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<LaunchIcon />}
          component={Link}
          href={flight.airline.url}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
        >
          Book Now
        </Button>
      </Box>
    </CardContent>
  </Paper>
);

const FlightResults = ({ flights }) => {
  if (!flights || (!flights.outbound.length && !flights.return.length)) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {flights.outbound.length > 0 && (
        <>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Outbound Flights
          </Typography>
          {flights.outbound.map((flight, index) => (
            <FlightCard key={`outbound-${index}`} flight={flight} />
          ))}
        </>
      )}

      {flights.return.length > 0 && (
        <>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Return Flights
          </Typography>
          {flights.return.map((flight, index) => (
            <FlightCard key={`return-${index}`} flight={flight} />
          ))}
        </>
      )}
    </Container>
  );
};

export default FlightResults;
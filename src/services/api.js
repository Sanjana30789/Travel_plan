import axios from 'axios';

// Major airports data
export const airports = [
  // India
  { code: 'DEL', name: 'Indira Gandhi International Airport, Delhi' },
  { code: 'BOM', name: 'Chhatrapati Shivaji International Airport, Mumbai' },
  { code: 'BLR', name: 'Kempegowda International Airport, Bangalore' },
  { code: 'HYD', name: 'Rajiv Gandhi International Airport, Hyderabad' },
  { code: 'CCU', name: 'Netaji Subhas Chandra Bose International Airport, Kolkata' },
  { code: 'MAA', name: 'Chennai International Airport, Chennai' },
  // International
  { code: 'JFK', name: 'John F. Kennedy International Airport, New York' },
  { code: 'LHR', name: 'Heathrow Airport, London' },
  { code: 'DXB', name: 'Dubai International Airport' },
  { code: 'SIN', name: 'Singapore Changi Airport' },
  { code: 'LAX', name: 'Los Angeles International Airport' }
];

const generateMockFlights = (departure, arrival, date) => {
  const airlines = [
    { 
      code: 'AI', 
      name: 'Air India',
      url: 'https://www.airindia.in'
    },
    { 
      code: 'BA', 
      name: 'British Airways',
      url: 'https://www.britishairways.com'
    },
    { 
      code: 'EK', 
      name: 'Emirates',
      url: 'https://www.emirates.com'
    },
    { 
      code: '6E', 
      name: 'IndiGo',
      url: 'https://www.goindigo.in'
    },
    { 
      code: 'SQ', 
      name: 'Singapore Airlines',
      url: 'https://www.singaporeair.com'
    }
  ];

  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const getRandomPrice = () => Math.floor(Math.random() * (1500 - 500) + 500);

  return Array.from({ length: 5 }, (_, index) => {
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const departureTime = getRandomTime();
    const flightDuration = Math.floor(Math.random() * 8) + 2;
    
    const depAirport = airports.find(a => a.code === departure);
    const arrAirport = airports.find(a => a.code === arrival);

    return {
      flight: {
        iata: `${airline.code}${100 + index}`,
        icao: `${airline.code}${1000 + index}`
      },
      flight_status: "scheduled",
      departure: {
        airport: depAirport?.name || departure,
        terminal: String(Math.floor(Math.random() * 4) + 1),
        gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 8))}${Math.floor(Math.random() * 20) + 1}`,
        scheduled: `${date}T${departureTime}:00`,
        iata: departure
      },
      arrival: {
        airport: arrAirport?.name || arrival,
        terminal: String(Math.floor(Math.random() * 4) + 1),
        gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 8))}${Math.floor(Math.random() * 20) + 1}`,
        scheduled: `${date}T${departureTime}:00`,
        iata: arrival
      },
      airline: airline,
      flight_duration: `${flightDuration}h ${Math.floor(Math.random() * 60)}m`,
      price: getRandomPrice()
    };
  });
};

export const searchFlights = async (departure, arrival, departureDate, returnDate, passengers) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const formattedDate = departureDate.format('YYYY-MM-DD');
    const flights = generateMockFlights(departure, arrival, formattedDate);

    let returnFlights = [];
    if (returnDate) {
      const formattedReturnDate = returnDate.format('YYYY-MM-DD');
      returnFlights = generateMockFlights(arrival, departure, formattedReturnDate);
    }

    return {
      data: {
        outbound: flights,
        return: returnFlights
      }
    };
  } catch (error) {
    console.error('Error details:', error);
    throw error;
  }
};
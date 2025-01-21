import React, { useState } from 'react';
import axios from 'axios';
import './iternary.css';

const TravelForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: ''
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'AIzaSyDQgCTCEbkJGdH4NlVV3Tei3IOAmQtRJ9Y';
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const prompt = `Create a detailed travel plan for ${formData.destination} for ${formData.days} days with a budget of $${formData.budget}. Format the response in the following structure:

      {
        "itinerary": {
          "day1": ["activity1", "activity2", ...],
          "day2": ["activity1", "activity2", ...],
          ...
        },
        "accommodations": ["option1", "option2", "option3"],
        "mustVisit": ["place1", "place2", "place3"],
        "costBreakdown": {
          "accommodation": "amount",
          "food": "amount",
          "activities": "amount",
          "transportation": "amount"
        },
        "travelTips": ["tip1", "tip2", "tip3"]
      }

      Please provide the response in this exact JSON format.`;

      const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      });

      const responseText = response.data.candidates[0].content.parts[0].text;
      // Extract JSON from the response text
      const jsonStart = responseText.indexOf('{');
      const jsonEnd = responseText.lastIndexOf('}') + 1;
      const jsonStr = responseText.slice(jsonStart, jsonEnd);
      const parsedResponse = JSON.parse(jsonStr);
      setResponse(parsedResponse);
    } catch (error) {
      console.error('Error:', error);
      setResponse(null);
    }
    setLoading(false);
  };

  return (
    <div className="travel-form-page">
    <div className="travel-planner">
      <div className="form-container">
        <h1>Travel Planner</h1>
        <p className="subtitle">Plan your perfect trip with AI assistance</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Where would you like to go?</label>
            <input
              type="text"
              name="destination"
              placeholder="e.g., Paris, France"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Number of Days</label>
              <input
                type="number"
                name="days"
                placeholder="e.g., 5"
                value={formData.days}
                onChange={handleChange}
                required
                min="1"
              />
            </div>

            <div className="form-group">
              <label>Budget (USD)</label>
              <input
                type="number"
                name="budget"
                placeholder="e.g., 2000"
                value={formData.budget}
                onChange={handleChange}
                required
                min="1"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <span className="loading">Planning your trip...</span>
            ) : (
              'Plan My Trip'
            )}
          </button>
        </form>
      </div>

      {response && (
        <div className="response-container">
          <h2>Your Travel Plan for {formData.destination}</h2>
          
          <div className="response-section">
            <h3>📅 Daily Itinerary</h3>
            {Object.entries(response.itinerary).map(([day, activities]) => (
              <div key={day} className="day-plan">
                <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="response-grid">
            <div className="response-section">
              <h3>🏨 Recommended Accommodations</h3>
              <ul>
                {response.accommodations.map((accommodation, index) => (
                  <li key={index}>{accommodation}</li>
                ))}
              </ul>
            </div>

            <div className="response-section">
              <h3>🎯 Must-Visit Places</h3>
              <ul>
                {response.mustVisit.map((place, index) => (
                  <li key={index}>{place}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="response-grid">
            <div className="response-section">
              <h3>💰 Cost Breakdown</h3>
              <div className="cost-breakdown">
                {Object.entries(response.costBreakdown).map(([category, amount]) => (
                  <div key={category} className="cost-item">
                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                    <span>${amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="response-section">
              <h3>💡 Travel Tips</h3>
              <ul>
                {response.travelTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default TravelForm;
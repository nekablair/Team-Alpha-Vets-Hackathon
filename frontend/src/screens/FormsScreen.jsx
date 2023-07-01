import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import MapComponent from '../components/Map/Map';




//TODO: Setup environemnt variables.  Ask team for setup details 


const FormsScreen = () => {
  const [userLocation, setUserLocation] = useState(null);

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const updatedUserLocation = { lat: latitude, lng: longitude };
          setUserLocation(updatedUserLocation);
          console.log(updatedUserLocation); // Log the updated userLocation value
        },
        (error) => {
          console.error('Error getting user location:', error);
          setUserLocation(null);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      setUserLocation(null);
    }
  };

  useEffect(() => {
    console.log(userLocation); // Log the userLocation when it changes
  }, [userLocation]);

  return (
    <div>
      <button onClick={handleUserLocation}>Get User Location</button>
      {userLocation && (
        <div>
          <h2>User Location:</h2>
          <p>Latitude: {userLocation.lat}</p>
          <p>Longitude: {userLocation.lng}</p>
        </div>
      )}
    </div>
  );
};

export default FormsScreen;



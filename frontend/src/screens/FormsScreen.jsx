import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import MapComponent from '../components/Map/Map';

const FormsScreen = () => {
  const [stateSearch, setStateSearch] = useState('');
  const [results, setResults] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [userLocation, setUserLocation] = useState(null);

  const handleStateSearchChange = (event) => {
    setStateSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
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

  const fetchData = async () => {
    try {
      const response = await axios.get('https://sandbox-api.va.gov/services/va_facilities/v0/facilities/all', {
        headers: {
          'apikey': 'gc6FNZ9x6hV2VPEIwgBZLklGAwJHzg37',
          'Content-Type': 'application/json'
        },
        params: {
          state: stateSearch
        }
      });
      const data = response.data;
      const features = data.features;

      const markers = features.map((feature) => ({
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0],
      }));
      setResults(markers);

      if (markers.length > 0) {
        setMapCenter(markers[0]);
      } else {
        setMapCenter({ lat: 0, lng: 0 });
      }
    } catch (error) {
      console.error('Error:', error);
      setResults([]);
      setMapCenter({ lat: 0, lng: 0 });
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
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
  }, []);

  // Fetch data on stateSearch change or userLocation change
  useEffect(() => {
    if (stateSearch || userLocation) {
      fetchData();
    }
  }, [stateSearch, userLocation]);

  return (
    <Container>
      <Row>
        <Col>
          <div className='mb-3'>
            <h1>FormsScreen</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor='stateSearch'>Search by State</label>
              <input
                type='text'
                id='stateSearch'
                placeholder='Enter state ...'
                value={stateSearch}
                onChange={handleStateSearchChange}
              />

              <button type='submit'>Submit</button>
              <button type='button' onClick={handleUserLocation}>User Location</button>
            </form>

            <div style={{ marginTop: '20px' }}>
              <h2>Results:</h2>
              {/* Display results */}
            </div>

            <div style={{ marginTop: '20px', width: '50%', margin: '0 auto' }}>
              <h2>Map:</h2>
              <div style={{ width: '100%', height: '0', paddingBottom: '50%', position: 'relative' }}>
                <MapComponent
                  google="YOUR_GOOGLE_MAPS_API_KEY"
                  center={userLocation || mapCenter}
                  markers={results}
                  containerElement={<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />}
                  mapElement={<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormsScreen;

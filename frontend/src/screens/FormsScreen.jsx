import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';

const FormsScreen = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a GET request to the endpoint using Axios
    axios
      .get('https://sandbox-api.va.gov/services/va_facilities/v0/facilities/all', {
        headers: {
          apikey: 'gc6FNZ9x6hV2VPEIwgBZLklGAwJHzg37',
          'Content-Type': 'application/json',
        },
        params: {
          city: city,
          state: state,
          zip: zip,
        },
      })
      .then((response) => {
        const features = response.data.features;
        const cities = [];

        for (let i = 0; i < features.length; i++) {
          const feature = features[i];
          const featureCity = feature.properties.address.physical.city;

          if (city === featureCity) {
            cities.push(featureCity);
          }
        }

        setResults(cities);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className='mb-3'>
            <h1>FormsScreen</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                id='city'
                placeholder='Enter city ...'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <label htmlFor='state'>State</label>
              <input
                type='text'
                id='state'
                placeholder='Enter state ...'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />

              <label htmlFor='zip'>Zip</label>
              <input
                type='text'
                id='zip'
                placeholder='Enter zip ...'
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />

              <button type='submit'>Submit</button>
            </form>

            <div>
              <h2>Results:</h2>
              {results.length > 0 ? (
                <ul>
                  {results.map((city, index) => (
                    <li key={index}>{city}</li>
                  ))}
                </ul>
              ) : (
                <p>No matching cities found.</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormsScreen;

import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

const MapContainer = ({ google }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  // Handle marker click event
  const handleMarkerClick = (markerProps, marker) => {
    // Retrieve the coordinates of the clicked marker
    const latLng = marker.getPosition();
    const lat = latLng.lat();
    const lng = latLng.lng();

    // Set the new center of the map
    setCenter({ lat, lng });
  };

  return (
    <Map google={google} zoom={10} center={center}>
      <Marker position={center} onClick={handleMarkerClick} />
    </Map>
  );
};

const FormsScreen = ({ google }) => {
  // Rest of the component code...

  return (
    <Container>
      <Row>
        <Col>
          <div className='mb-3'>
            <h1>FormsScreen</h1>

            {/* Rest of the form code... */}

            <div>
              <h2>Results:</h2>
              {/* Display the map container */}
              <MapContainer google={google} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFeSztX0yEUDOOWXftUlif9Zfd86_m-EM',
})(FormsScreen);

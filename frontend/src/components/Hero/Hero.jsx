import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row,Container } from 'react-bootstrap';

const Hero = () => {
  const navigate = useNavigate();

  const goToPrograms = () => {
    navigate('/about');
  };

  return (
        <Container fluid className='px-0 mx-0 justify-content-center image-overlay'>
          <Row className='image-overlay-content'>
            <h1 className='text-white'>Equine Therapy Healing for Veterans</h1>
            <p className='text-white text-uppercase'>Learn more about equine/horse therapy</p>
            <Button variant='btn btn-outline-secondary w-50' onClick={goToPrograms}>
              Learn More
            </Button>
          </Row>
        </Container>
  );
};

export default Hero;

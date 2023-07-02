import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import backgroundImage from '../images/hero-stock-1.png';

const Hero = () => {
  const navigate = useNavigate();

  const goToPrograms = () => {
    navigate('/about');
  };

  return (
    <div className='text-center'>
      <div
        className='d-flex flex-column align-items-center justify-content-center h-75  p-5 object-fit-contain center-block'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className='mask py-4'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <h1 className='text-white'>Equine Therapy Healing for Veterans</h1>
          <p className='text-white text-uppercase'>Learn more about equine/horse therapy</p>
          <Button variant='btn btn-outline-secondary' onClick={goToPrograms}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import { Row } from 'react-bootstrap';
const HomeScreen = () => {
  return (
    <div>
      HomeScreen
      <h1 className='text-black-fade'>Theme Test</h1>
      <h5 className='bg-primary text-white'>
        Primary Background Color Test = bg-primary and Font Color Test = white
      </h5>
      <h2 className='bg-secondary text-black-fade'>
        Secondary Background Color Test = bg-secondary and Font Color Test = text-black-fade{' '}
      </h2>
      <h5 className='bg-accent-background text-black-fade'>
        Accent Background Color Test = bg-accent-background and Font Color Test = text-black-fade{' '}
      </h5>
      <h5 className='bg-black-fade text-white'>
        Black Background Color Test = bg-black-fade and Font Color Test = text-white{' '}
      </h5>
    </div>
  );
};

export default HomeScreen;
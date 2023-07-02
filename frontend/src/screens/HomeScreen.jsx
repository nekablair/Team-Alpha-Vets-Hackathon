import React from 'react';
import { Row } from 'react-bootstrap';
import Hero from '../components/Hero/Hero';
import StateSelectForm from '../components/Forms/StateSelectForm';
const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <StateSelectForm />
    </div>
  );
};

export default HomeScreen;

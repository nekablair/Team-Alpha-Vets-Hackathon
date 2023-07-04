import React from 'react';
import { Dropdown, Col, Row, Container } from 'react-bootstrap';
import Hero from '../components/Hero/Hero';
import StateSelectForm from '../components/Forms/StateSelectForm';
import DropDown from '../components/DropDown/DropDown';

const HomeScreen = () => {
  return (
    <>
      <Hero />
      {/* <StateSelectForm /> */}
      <DropDown></DropDown>
    </>
  );
};

export default HomeScreen;

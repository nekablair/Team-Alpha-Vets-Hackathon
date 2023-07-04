import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' footer-background-image'>
      <Container>
        <Row className='justify-content-center'>
          <Col className='align-items-center'>
            <h3>Equine Therapy</h3>
            <Link to='/about'>
              <h6>About</h6>
            </Link>
            <Link to='/resources'>
              <h6>Resources</h6>
            </Link>
            <Link to='/contact'>
              <h6>Contact Us</h6>
            </Link>
          </Col>
          <Row className='justify-content-between footer-gradient'>
            <Col>
              <p className='text-black-fade'>Equine Therapy App &copy; {currentYear}</p>
            </Col>
            <Col>
              <p>Privacy Policy</p>
            </Col>
            <Col>
              <p>Made by Team Alpha</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

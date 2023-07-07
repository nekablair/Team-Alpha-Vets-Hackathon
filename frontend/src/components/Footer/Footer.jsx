import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' footer-background-image'>
      <Container>
        <Row className='justify-content-center pt-2'>
          <Col className='align-items-center'>
            <h5>Equine Therapy</h5>
            <Link to='/about' className='general-links text-primary'>
              <h6>About</h6>
            </Link>
            <Link to='/resources' className='general-links text-primary'>
              <h6>Resources</h6>
            </Link>
            <Link to='/contact' className='general-links text-primary'>
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

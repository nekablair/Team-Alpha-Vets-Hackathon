import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerImg from '../images/footer.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-center'>
      <Container
        className='d-flex flex-column align-items-center justify-content-center p-4 object-fit-cover '
        style={{
          backgroundImage: `url(${footerImg})`,
        }}
      >
        <Row>
          <Row>
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
          </Row>
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
      </Container>
    </footer>
  );
};

export default Footer;

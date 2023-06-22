import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// TODO IMPLEMENT LINK FROM REACT ROUTER
// TODO ADD LOGO FROM ASSETS FOR IMG TAG

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='md' collapseOnSelect className='navbar-nav'>
        <Container>
          <Navbar.Brand href='/' className='text-white'>
            {/* <img src={''} alt={''}/> */}
            <h2>Equine Therapy</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/about' className='text-white'>
                About
              </Nav.Link>
              <Nav.Link href='/locator' className='text-white'>
                {' '}
                Locator
              </Nav.Link>
              <Nav.Link href='/contact' className='text-white'>
                Contact
              </Nav.Link>
              <Nav.Link href='/resources' className='text-white'>
                Resources
              </Nav.Link>
              <Nav.Link href='/forms' className='text-white'>
                Forms
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
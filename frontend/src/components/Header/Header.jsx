import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// TODO IMPLEMENT LINK FROM REACT ROUTER
// TODO ADD LOGO FROM ASSETS FOR IMG TAG

const Header = () => {
  return (
    <header>
      <Navbar bg='info' expand='md' collapseOnSelect className='navbar-nav'>
        <Container>
          <Navbar.Brand href='/'>
            {/* <img src={''} alt={''}/> */}
            Equine Therapy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/locator'> Locator</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href='/resources'>Resources</Nav.Link>
              <Nav.Link href='/forms'>Forms</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

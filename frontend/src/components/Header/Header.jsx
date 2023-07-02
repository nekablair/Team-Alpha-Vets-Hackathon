import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; //This must be used for bootstrap everywhere else use the Link from react-router-dom

// TODO ADD LOGO FROM ASSETS FOR IMG TAG

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='md' collapseOnSelect className='navbar-nav'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='text-white'>
              {/* <img src={''} alt={''}/> */}
              <h2>Equine Therapy</h2>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='about'>
                <Nav.Link className='text-white'>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/providers'>
                <Nav.Link className='text-white'> Providers</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link className='text-white'>Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/resources'>
                <Nav.Link className='text-white'>Resources</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

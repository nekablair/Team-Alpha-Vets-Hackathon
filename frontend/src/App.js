import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Container fluid className='px-0 mx-0' >
          <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default App;

import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen';
// TODO IMPLEMENT REACT ROUTER

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Equine Therapy App</h1>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;

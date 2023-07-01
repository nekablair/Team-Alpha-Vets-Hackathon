import React from 'react';
import {Row, Container, Col} from 'react-bootstrap';

const FormsScreen = () => {

  return (
    <Container>
      <Row>
        <Col>
        <div className='mb-3'>
            <h1>FormsScreen</h1>

            <form action="POST">

              {/* <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Enter first name ...'/>

              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' placeholder='Enter last name ...'/>

              <label htmlFor="address">Address</label>
              <input type="text" id='address' placeholder='Enter address ...'/> */}

              <label htmlFor="city">City</label>
              <input type="text" id='city' placeholder='Enter city ...'/>

              <label htmlFor="state">State</label>
              <input type="text" id='state' placeholder='Enter state ...' />

              <label htmlFor="zip">Zip</label>
              <input type="zip"  placeholder='Enter zip ...'/>

            </form>

        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormsScreen;

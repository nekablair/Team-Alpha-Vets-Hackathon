import React, { useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import stateList from '../../data/states';
import axios from 'axios';

const DropDown = () => {
  const [selectedState, setSelectedState] = useState([]);
  const [data, setData] = useState([]);

  const onChange = (e) => {
    setSelectedState(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post('/api/va/state', { state: selectedState })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Error Data: ${error.response.data}`);
            console.log(`Error Status : ${error.response.status}`);
            console.log(`Error Headers: ${error.response.headers}`);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(`Error Request${error.request}`);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log(`Error Message: ${error.message}`);
          }
          console.log(`Error Config: ${error?.config}`);
        });
      // console.log("response.status",response.status)
      // console.log("response",response)
      //       if (response?.status !== 200) {
      //         throw new Error(`Check Response -- ${response.status}`);
      //       }
      if (response.data.length > 0) {
        setData(response?.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Row className='justify-content-center text-center text-black-fade theme-gradient pb-5'>
      <h2>Locate Services</h2>
      <p>Choose a state the Veterans Affairs is affiliated with for equine therapy services</p>
      <Col>
        <Form onSubmit={onSubmit}>
          <Row className='justify-content-around'>
            <Form.Select size='sm' className='w-25' aria-label='U.S. state' onChange={onChange}>
              <option>U.S. state</option>
              {stateList.map((usState) => (
                <option key={usState.name} value={usState.value}>
                  {usState.value}
                </option>
              ))}
            </Form.Select>
            <Button
              type='submit'
              className=' btn btn-primary w-25'
              disabled={selectedState.length > 0 ? false : true}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </Col>
      {data.length > 0 &&
        data.map((item) => {
          const removeLastSlash = item.scrapedUrlResults.filter((item) => !item.endsWith('/'));
          const dedupe = [...new Set(removeLastSlash)];
          return (
            <Row key={item._id} className='justify-content-center'>
              {dedupe.length > 0 && (
                <Col md={6} className='mt-3'>
                  <Card>
                    <Card.Header>Equine Therapy Service</Card.Header>
                    <Card.Body>
                      <Card.Text>{item.name}</Card.Text>
                      <Card.Text>{item.city}</Card.Text>
                      <Card.Text className='general-links'>
                        <a className='general-links' href={dedupe} alt={item.name}>
                          {dedupe}
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
          );
        })}
      <p className='pt-4'>
        {' '}
        Check our
        <strong>
          <Link to='/resources' className='px-1'>
            Resources
          </Link>
        </strong>
        page for free horse therapy services available outside the VA
      </p>
    </Row>
  );
};

export default DropDown;

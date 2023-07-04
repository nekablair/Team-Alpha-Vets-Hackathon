import React, { useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import stateList from '../../data/states';
import axios from 'axios';

const DropDown = () => {
  const [isResults, setIsResults] = useState(false);
  const [selectedState, setSelectedState] = useState([]);
  const [data, setData] = useState('');
  //   const navigate = useNavigate();

  const onChange = (e) => {
    setSelectedState(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/va/state', { state: selectedState });
      if (response.status !== 200) {
        throw new Error(`Check Response -- ${response.status}`);
      }
      setData(response.data);
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
        {data.length > 0 &&
          data.map((item) => {
            const removeSlash = item.scrapedUrlResults.filter((item) => !item.endsWith('/'));
            const dedupe = [...new Set(removeSlash)];
            return (
              <Row className='justify-content-center'>
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
      </Col>
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

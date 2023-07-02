import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProvidersScreen = () => {
  return (
    <Container>
      <Col md='12'>
        <h2 className='text-center text-black-fade'>Providers</h2>
        <p>
          We have resources for providers to acquire funding through the VA and serve the veteran
          populations
        </p>
      </Col>
      <Col>
        <Row>
          <h4 className='text-center text-black-fade'>Forms and Grants</h4>
          <a
            className='text-black-fade'
            href='https://department.va.gov/veteran-sports/wp-content/uploads/sites/3/2023/02/NOFA_VA_EQUINE_2023.pdf'
          >
            <p>VA Funding/Grants for Equine Therapy</p>
          </a>
        </Row>
        <Row>
          <a
            className='text-black-fade'
            href='https://murdocktrust.org/2019/03/grants-in-action-horse-therapy/'
            alt='Murdock Trust'
          >
            {' '}
            <p>Murdock Trust </p>
          </a>
        </Row>
      </Col>
      <Row>
        <Col>
          <h4 className='text-center text-black-fade'>Work Flow Process</h4>
          <ul>
            <li>Fill out forms</li>
            <li>Receive a notification approval letter</li>
            <li>Make funds available to your financial institution</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className='text-center text-black-fade'>Expectations</h4>
          <ul>
            <li>A 6 week wait is common</li>
            <li>Paperwork with typos will prolong the process</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProvidersScreen;

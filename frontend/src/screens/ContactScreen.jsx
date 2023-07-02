import React from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ContactScreen = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your submission');
    navigate('/');
  };

  return (
    <Container>
      <Col>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3 text-md text-black-fade' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control className='w-50' type='email' placeholder='Enter email' />
            <Form.Text className='text-muted text-md'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              className='text-primary text-md'
              type='checkbox'
              label='I want to receive emails with resources to equine/horse therapy services'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default ContactScreen;

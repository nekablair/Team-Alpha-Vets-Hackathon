import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import stateList from '../../data/states';
import equineService from '../../services/equineServices';
import { useNavigate } from 'react-router-dom';

const StateSelectForm = () => {
  const [isResults, setIsResults] = useState(false);

  const [links, setLinks] = useState([]);

  const toggle = () => {
    setIsResults(!isResults);
  };

  const navigate = useNavigate();

  const sendItOut = (data) => {
    equineService.getEquineByState(data.state).then(onSuccess);
  };

  const onSuccess = (r) => {
    if (r.data.length > 0) {
      let results = r.data.map((result) => {
        let newResult = result.scrapedUrlResults;
        for (let i = 0; i < newResult.length; i++) {
          if (newResult[i].charAt(newResult[i].length - 1) === '/') {
            newResult[i] = newResult[i].substring(0, newResult[i].length - 1);
          }
        }
        return newResult;
      });

      results = results.flat();
      let final = [...new Set(results)];
      final = final.map((link) => {
        return (
          <Col lg={8}>
            <a href={link} key={link}>
              {link}
            </a>
          </Col>
        );
      });
      setLinks(final);
      toggle();
      console.log('after setting links', links);
    } else {
      navigate('/resources');
    }
  };

  return (
    <React.Fragment>
      <Formik initialValues={{ state: '' }} onSubmit={(values) => sendItOut(values)}>
        <Form>
          <Field name='state' as='select'>
            <option value={''}>Select your state</option>
            {stateList.map((state) => (
              <option value={state.value} key={state.name}>
                {state.name}
              </option>
            ))}
          </Field>
          <Button type='submit'>{isResults ? 'Close' : 'Submit'}</Button>
        </Form>
      </Formik>
      {isResults && [links]}
    </React.Fragment>
  );
};

export default StateSelectForm;

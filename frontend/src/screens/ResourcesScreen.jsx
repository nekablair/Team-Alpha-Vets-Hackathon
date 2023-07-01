import React from 'react';
import { Container, Row } from 'react-bootstrap';
import newLinks from '../data/links';

const ResourcesScreen = () => {
  const linkMapper = (arr) => {
    let mapped = arr.map((link) => {
      let truncate = link.replace('https://www.va.gov/', '');
      truncate = truncate.replace('-health-care', '');
      truncate = truncate.replaceAll('-', ' ');
      truncate = truncate.replaceAll('/', '');
      truncate = truncate.replace('.va.gov', '');
      truncate = truncate.replace('https:www.', '');
      truncate = truncate.split(' ');
      for (let i = 0; i < truncate.length; i++) {
        truncate[i] = truncate[i].charAt(0).toUpperCase() + truncate[i].slice(1) + ' ';
      }
      return (
        <Row>
          <a href={link}>{truncate}</a>
        </Row>
      );
    });

    return mapped;
  };

  return (
    <React.Fragment>
      <h2>List of known VA health care centers</h2>
      <Container>{linkMapper(newLinks)}</Container>
    </React.Fragment>
  );
};

export default ResourcesScreen;

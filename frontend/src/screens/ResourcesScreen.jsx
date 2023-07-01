import React from 'react';
import { Container, Row } from 'react-bootstrap';
import newLinks from '../data/links';

const ResourcesScreen = () => {
  const linkMapper = (arr) => {
    const mapped = arr.map((link) => {
      let truncate = link.replace('https://www.va.gov/', '');
      truncate = truncate.replace('-health-care', '');
      truncate = truncate.replace('-', ' ');
      truncate = truncate.replace('-', ' ');
      truncate = truncate.replace('/', '');
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
      <Container>{linkMapper(newLinks)}</Container>
    </React.Fragment>
  );
};

export default ResourcesScreen;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import newLinks from '../data/vaLinks';
import externalResources from '../data/externalLinks';

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
        <Col lg={4}>
          <a href={link}>{truncate}</a>
        </Col>
      );
    });

    return mapped;
  };

  const externalLinkMapper = (arr) => {
    let mapped = arr.map((link) => {
      return (
        <Col>
          <a href={link.externalUrl}>{link.title}</a>
          <p>{link.description}</p>
        </Col>
      );
    });

    return mapped;
  };

  return (
    <React.Fragment>
      <Container>
        <h3>External Resources for Veterans</h3>
        <Row>{externalLinkMapper(externalResources)}</Row>
      </Container>
      <Container>
        <h3>List of known VA health care centers</h3>
        <Row>{linkMapper(newLinks)}</Row>
      </Container>
    </React.Fragment>
  );
};

export default ResourcesScreen;

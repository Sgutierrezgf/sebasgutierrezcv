import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap/';
import '../styles/container/sobremi.scss';

const Portafolio = () => (
  <div className='Portafolio'>
    <Link to='/' className='porta_boton'>Home</Link>
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
      </Row>
    </Container>
  </div>
);
export default Portafolio;

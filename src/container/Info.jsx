import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sobremi from './Sobremi';
import Academia from './Academia';
import Interes from './Interes';
import Idioma from './Idioma';
import Skill from './Habilidad';
import Experiencia from './Experiencia';
import Contacto from './Contacto';
import '../styles/container/info.scss';

const Info = () => (
  <div className='Info'>
    <Container className='container_mi'>
      <Row className='container_info_row'>
        <Col className='container_mi_col'>
          <Sobremi />
          <Experiencia />
          <Academia />
          <Interes />
        </Col>
        <div className='vl' />
        <Col className='container_mi_col2'>
          <Contacto />
          <Skill />
          <Idioma />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Info;


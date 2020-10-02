import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Habilidad = () => (
  <div className='Habilidades'>
    <Container className='container_habilidad'>
      <Row className='container_habilidad_row'>
        <Col className='container_mi_col'>
          <h1>Conocimientos</h1>
          <div className='skillTable'>
            <ul id='skill'>
              <li>
                <span className='bar html-css' />
                <h3>Html5</h3>
              </li>
              <li>
                <span className='bar Javascript' />
                <h3>Javascript</h3>
              </li>
              <li>
                <span className='bar React' />
                <h3>React</h3>
              </li>
              <li>
                <span className='bar Design' />
                <h3>UX // UI</h3>
              </li>
            </ul>
          </div>
        </Col>
        <Col className='container_mi_col'>
          <h1>+ Conocimientos</h1>
          <div className='skillTable'>
            <ul id='skill'>
              <li>
                <span className='bar html-css' />
                <h3>Css // Scss</h3>
              </li>
              <li>
                <span className='bar Javascript' />
                <h3>Webpack</h3>
              </li>
              <li>
                <span className='bar React' />
                <h3>Api rest</h3>
              </li>
              <li>
                <span className='bar Design' />
                <h3>Npm</h3>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Habilidad;

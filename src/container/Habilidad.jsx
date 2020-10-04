import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/container/habilidades.scss';

const Habilidad = () => (
  <div className='Habilidades'>
    <Container className='container_habilidad'>
      <Row className='container_habilidad_row'>
        <Col className='container_mi_col'>
          <h1>Conocimientos</h1>
          <div className='skillTable'>
            <ul id='skill'>
              <li>
                <span className='bar html'/>
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
                <span className='bar GIT' />
                <h3>GIT, GITHUB</h3>
              </li>
              <li>
                <span className='bar style' />
                <h3>CSS, SASS</h3>
              </li>
              <li>
                <span className='bar Webpack' />
                <h3>Webpack</h3>
              </li>
              <li>
                <span className='bar Api' />
                <h3>Api rest</h3>
              </li>
              <li>
                <span className='bar NPM' />
                <h3>NPM</h3>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Habilidad;

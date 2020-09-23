import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/container/sobremi.scss';

const Sobremi = () => (
  <div className='Sobremi'>
    <Container className='container_mi'>
      <Row className='container_mi_row'>
        <Col className='container_mi_col'>
          <h1>Sobre Mi</h1>
          <p>Mucho gusto, como ya abras visto arriba mi nombre es Sebastian Gutierrez, soy una persona que le gusta aprender, que sabe el conocimiento esta ahí para todos, y ya es de cada quien aprovecharlo. Me considero alguien con hambre, hambre de crecer, tome el tiempo que me tome, que independientemente de que las cosas no salgan a la primera, hay que continuar avanzando.</p>
        </Col>
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
export default Sobremi;

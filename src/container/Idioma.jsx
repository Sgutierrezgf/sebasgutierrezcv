import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/container/idioma.scss';

const Idioma = () => (
  <div className='Idioma'>
    <Container className='Container_Idioma'>
      <Row className='container_Idioma'>
        <Col className='container_Idioma_col'>
          <h1>Habilidades blandas</h1>
          <div>
            <ul className='skillsoft'>
              <li>
                <h3 className='Idioma_soft'>Actitud positiva</h3>
              </li>
              <li>
                <h3 className='Idioma_soft'>Trabajo en equipo</h3>
              </li>
              <li>
                <h3 className='Idioma_soft'>Aceptación de la critica</h3>
              </li>
              <li>
                <h3 className='Idioma_soft'>Adaptación al cambio</h3>
              </li>
            </ul>
          </div>
        </Col>
        <Col className='container_Idioma_col'>
          <h1>Idioma</h1>
          <div>
            <h1>Español</h1>
            <h3 className='Idioma2'>Nativo</h3>
          </div>
          <div>
            <h1>Ingles</h1>
            <h3 className='Idioma2'>Competente</h3>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Idioma;

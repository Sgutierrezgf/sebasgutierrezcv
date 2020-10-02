import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Idioma = () => (
  <div className='Habilidades'>
    <Container className='container_habilidad'>
      <Row className='container_habilidad_row'>
        <Col className='container_habilidad_col'>
          <h1>Idioma</h1>
          <div className='lenguaTable'>
            <ul id='skillLengua'>
              <h1 className='titleLengua'>Español</h1>
              <li>
                <span className='bar hablaEspañol' />
                <h3>Habla</h3>
              </li>
              <li>
                <span className='bar escuchaEspañol' />
                <h3>Escucha</h3>
              </li>
              <li>
                <span className='bar escrituraEspañol' />
                <h3>Escritura</h3>
              </li>
            </ul>
          </div>
          <div>
            <ul id='skillLengua'>
              <h1 className='titleLengua'>Ingles</h1>
              <li>
                <span className='bar hablaIngles' />
                <h3>Habla</h3>
              </li>
              <li>
                <span className='bar escuchaIngles' />
                <h3>Escucha</h3>
              </li>
              <li>
                <span className='bar escrituraIngles' />
                <h3>Escritura</h3>
              </li>
            </ul>
          </div>
        </Col>
        <Col className='container_habilidad_col'>
          <h1>Habilidades blandas</h1>
          <div className='softskill'>
            <ul id='skillsoft'>
              <li>
                <h3>ACTITUD POSITIVA</h3>
              </li>
              <li>
                <h3>TRABAJO EN EQUIPO</h3>
              </li>
              <li>
                <h3>ACEPTACION DE LA CRITICA</h3>
              </li>
              <li>
                <h3>ADAPTACION AL CAMBIO</h3>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Idioma;

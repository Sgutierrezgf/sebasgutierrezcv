import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/container/interes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faBookOpen, faBicycle, faGamepad, faDrumstickBite, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Interes = () => (
  <div className='Interes'>
    <h1>Interes y hobbies</h1>
    <Container className='container_interes'>
      <Row>
        <Col sm={4} className='interes_col'>
          <FontAwesomeIcon icon={faFilm} size='3x' className='fontCine' />
          <div>
            <p className='interesParrafo'>
              Me gusta la ciencia ficción, terror y fantasía
              mis Peliculas favorita es la trilogia del señor de los anillos
            </p>
          </div>
        </Col>
        <Col sm={4} className='interes_col'>
          <FontAwesomeIcon icon={faBookOpen} size='3x' className='fontLectura' />
          <div>
            <p className='interesParrafo'>
              Tambien me gusta la lectura, aunque ultimamente la tengo algo abandonada,, mi libro favorito es el silmarillion,
              me gusta mucho la fantasía y aventura.
            </p>
          </div>
        </Col>
        <Col sm={4} className='interes_col'>
          <FontAwesomeIcon icon={faBicycle} size='3x' className='fontBici' />
          <div>
            <p className='interesParrafo'>
              Me gusta realizar ciclismo, pero más en montaña que en ruta
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className='interes_col'>
          <FontAwesomeIcon icon={faGamepad} size='3x' className='fontGames' />
          <div>
            <p className='interesParrafo'>
              Es lo que mas hago en mi tiempo libre, juegos en linea con amigos, me gustan los RPG.
            </p>
          </div>
        </Col>
        <Col sm={4} className='interes_col'>
          <FontAwesomeIcon icon={faDrumstickBite} size='3x' className='fontComida' />
          <div>
            <p className='interesParrafo'>
              Esta es una de mis cosas favoritas comer y cocinar, me gusta la comida de mar y pollo.
            </p>
          </div>
        </Col>
        <Col sm={4} className='interes_col'>
          <FontAwesomeIcon icon={faDumbbell} size='3x' className='fontEjercicio' />
          <div>
            <p className='interesParrafo'>
              Me gusta ejercitarse (aunque no se me note je), voy al gimnasio normalmente,
              de no ser posible voy a un parque a colgarme de las barras un rato.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Interes;

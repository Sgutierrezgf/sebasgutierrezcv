import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/container/experiencia.scss';

const Experiencia = () => (
  <div className='Experiencia'>
    <h1 className='experiencia_title'>Experiencia</h1>
    <Container className='container_Experiencia'>
      <Row className='container_Experiencia_row'>
        <Col className='container_Experiencia_col'>
          <Card border='secondary' style={{ width: '18rem' }}>
            <Card.Header>SETI</Card.Header>
            <Card.Body>
              <Card.Title>Presente</Card.Title>
              <Card.Text>
                Administración de las bases de datos en lenguajes tales como SQL server,
                oracle y en este momento aprendiendo AWS ya que nuestro cliente esta migrando a este nuevo servicio
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='container_Experiencia_col_time'>
          Septiembre
          2019
        </Col>
      </Row>
      <Row className='container_Experiencia_row'>
        <Col className='container_Experiencia_col_time'>
          Mayo
          2018-2019
        </Col>
        <Col className='container_Experiencia_col2'>
          <Card border='secondary' style={{ width: '18rem' }}>
            <Card.Header>ARUS</Card.Header>
            <Card.Body>
              <Card.Title>9 meses</Card.Title>
              <Card.Text>
                Compra de inventario para los usuarios que lo requerian Equipos de computo,
                tablets y demas equipos tecnologicos
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Experiencia;

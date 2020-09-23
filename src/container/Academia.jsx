import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/container/academia.scss';

const Academia = () => (
  <div className='Academia'>
    <h1 className='academia_title'>Estudios</h1>
    <Card style={{ width: '18rem' }} className='card_academia'>
      <Card.Body>
        <Card.Title>Tecnologia de sistemas</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Instituto Tecnologico Metropolitano</Card.Subtitle>
        <Card.Text>
          2012-2018
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card_academia'>
      <Card.Body>
        <Card.Title>Bachillerato</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Instituto Uniban</Card.Subtitle>
        <Card.Text>
          1992-2005
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='card_academia'>
      <Card.Body>
        <Card.Title>Platzi Master</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Platzi</Card.Subtitle>
        <Card.Text>
          2020 - actual
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
export default Academia;

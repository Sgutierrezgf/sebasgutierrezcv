import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';
import '../styles/component/Header.scss';

const Header = () => {
  return (
    <Container className='header'>
      <div>
        <nav className='header_links'>
          <div className='header_links_groups'>
            <Link className='link' to='/'>Sobre Mi</Link>
            <Link className='link' to='/academia'>Estudios</Link>
            <Link className='link' to='/Skill'>Habilidades</Link>
            <Link className='link' to='/experiencia'>Experiencia</Link>
            <Link className='link' to='/interes'>Interes</Link>
          </div>
        </nav>
      </div>
      <Row className='container_Row'>
        <Col className='container_Col'>
          <Image className='profileImg' roundedCircle />
          <h1>Yo soy Sebastian Gutierrez</h1>
          <div className='social' id='social'>
            <a href='https://twitter.com/sgutierrez24' className='twitter' target='blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} className='twitter' size='lg' />
            </a>
            <a href='https://www.linkedin.com/in/sebastian-gutierrez-54b403148/' className='linkenid' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='linkedin' size='lg' />
            </a>
            <a href='https://github.com/Sgutierrezgf' className='github' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithubAlt} className='github' size='lg' />
            </a>
            <a href='https://github.com/Sgutierrezgf/Imagenes/blob/master/SebastianGutierrez.pdf' className='cv' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFileArchive} className='cv' size='lg' />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

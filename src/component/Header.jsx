import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFileAlt, FaTwitter } from 'react-icons/fa';
import '../styles/component/Header.scss';

const Header = () => {
  return (
    <div>
      <Container className='header'>
        <Row className='container_Row'>
          <Col className='container_Col'>
            <Image className='profileImg' roundedCircle />
            <h1>Yo soy Sebastian Gutierrez</h1>
            <div className='social' id='social'>
              <a href='https://twitter.com/sgutierrez24' className='twitter' target='blank' rel='noopener noreferrer'>
                <FaTwitter className='social-icon' size='32' />
              </a>
              <a href='https://www.linkedin.com/in/sebastian-gutierrez-54b403148/' className='linkedin' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='social-icon' size='32' />
              </a>
              <a href='https://github.com/Sgutierrezgf' className='github' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='social-icon' size='32' />
              </a>
              <a href='https://github.com/Sgutierrezgf/Imagenes/blob/master/SebastianGutierrez.pdf' className='cv' target='_blank' rel='noopener noreferrer'>
                <FaFileAlt className='social-icon' size='32' />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;

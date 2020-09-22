import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import '../styles/component/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <h1>Sebastian Gutierrez</h1>
      <div>
        <a href='https://twitter.com/sgutierrez24' className='twitter' target='blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} className='twitter' size='lg' />
        </a>
        <a href='https://www.linkedin.com/in/sebastian-gutierrez-54b403148/' className='linkenid' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} className='linkedin' size='lg' />
        </a>
        <a href='https://github.com/Sgutierrezgf' className='github' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithubAlt} className='github' size='lg' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

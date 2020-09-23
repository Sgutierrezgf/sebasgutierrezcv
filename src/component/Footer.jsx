import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/component/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <h3>segut10@gmial.com</h3>
      <div>
        <a href='https://twitter.com/sgutierrez24' className='twitter' target='blank' rel='noopener noreferrer'>
          <FaTwitter className='social-icon' size='32' />
        </a>
        <a href='https://www.linkedin.com/in/sebastian-gutierrez-54b403148/' className='linkedin' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='social-icon' size='32' />
        </a>
        <a href='https://github.com/Sgutierrezgf' className='github' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='social-icon' size='32' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

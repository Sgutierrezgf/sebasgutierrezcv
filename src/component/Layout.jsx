import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/component/layout.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;

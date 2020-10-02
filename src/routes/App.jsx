import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../component/Layout';
import Info from '../container/Info';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Info />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

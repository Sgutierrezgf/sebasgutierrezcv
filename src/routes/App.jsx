import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../component/Layout';
import Info from '../container/Info';
import Portafolio from '../container/Portafolio';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Info} />
          <Route exact path='/Portafolio' component={Portafolio} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

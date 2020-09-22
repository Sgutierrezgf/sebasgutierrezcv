import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sobremi from '../container/Sobremi';
import Academia from '../container/Academia';
import Interes from '../container/Interes';
import Skill from '../container/Habilidades';
import Experiencia from '../container/Experiencia';
import Layout from '../component/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Sobremi} />
          <Route exact path='/academia' component={Academia} />
          <Route exact path='/interes' component={Interes} />
          <Route exact path='/skill' component={Skill} />
          <Route exact path='/experiencia' component={Experiencia} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

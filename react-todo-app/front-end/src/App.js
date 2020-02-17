import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Base Components
import Layout from './components/base/Layout';
import MainFrame from './components/base/MainFrame';

// Import User Components
import Login from './views/Login';
import Register from './views/Register';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainFrame} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;

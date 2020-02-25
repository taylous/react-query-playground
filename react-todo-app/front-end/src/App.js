import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Base Components
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import MainFrame from './components/base/MainFrame';

// Import User Components
import Login from './views/Login';
import Register from './views/Register';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]} component={MainFrame} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

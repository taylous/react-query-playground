import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Material UI
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// Import Base Components
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import Home from './components/base/Home';

// Import Login and Register View
import Login from './views/Login';
import Register from './views/Register';

const useStyle = makeStyles({
  main: {
    backgroundColor: '#b8b8b8b',
    minHeight: '100%',
  },
});

const App = () => {
  return (
    <div className={useStyle.main}>
      <Header />
      <Container maxWidth="md">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

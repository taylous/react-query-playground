import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Material UI
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// Import Base Components
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import Home from './components/base/Home';

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
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

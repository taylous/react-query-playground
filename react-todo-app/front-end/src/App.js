import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Import Base Components
import MainFrame from './components/base/MainFrame';

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

  const classes = useStyle();

  return (
    <div className={classes.main}>
      <BrowserRouter>
        <Route exact path={['/', '/home']} component={MainFrame} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'white'
  }
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="div">
        <Box textAlign="center" fontSize="h2.fontSize">
          Login
        </Box>
      </Typography>
      <Box>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </Box>
    </div>
  );
};

export default Login;
import React from "react";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";

// Import Base Component
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles(() => ({
  content: {
    margin: "0 auto"
  },
  container: {
    marginTop: "100px",
    marginBottom: "30px"
  }
}));

const Layout = ({children}) => {
    
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container className={classes.content} maxWidth="xl">
        <div className={classes.container}>{children}</div>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;

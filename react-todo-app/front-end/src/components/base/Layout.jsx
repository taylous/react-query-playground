import React from 'react';
import Container from '@material-ui/core/Container';

// Import Base Components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <Container maxWidth="md">
        <div>{children}</div>
      </Container>

      <Footer />
    </div>
  );
};

export default Layout;

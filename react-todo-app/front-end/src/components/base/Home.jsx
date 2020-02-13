import React from 'react';
import Container from '@material-ui/core/Container';

// Import Components
import TodoList from '../todo/TodoList';

const Home = () => {
  return (
    <div>
      <Container maxWidth="md">
        <TodoList />
      </Container>
    </div>
  );
}

export default Home;
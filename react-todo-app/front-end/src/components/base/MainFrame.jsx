import React from 'react';

// Import Components
import TodoList from '../todo/TodoList';
import Layout from './Layout';


const Home = () => {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
}

export default Home;
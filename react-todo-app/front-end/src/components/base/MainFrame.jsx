import React from 'react';

// Import TodoList Component
import TodoList from '../todo/TodoList';

const MainFrame = () => {

  return (
    <div>
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  )
};

export default MainFrame;
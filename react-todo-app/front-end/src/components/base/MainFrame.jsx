import React from 'react';

// Import TodoList Component
import TodoList from '../todo/TodoList';

const MainFrame = () => {
  return (
    <div>
      <div style={{margin: 100}}>
        <TodoList />
      </div>
    </div>
  );
};

export default MainFrame;

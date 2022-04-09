import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const oneClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button 
      className="CreateTodoButton"
      onClick={() => oneClickButton('Mensaje')}
      >
        +
      </button>
  );
}

export { CreateTodoButton };
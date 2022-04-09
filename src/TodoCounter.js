import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) { //total, completed = props
  
  return (
    <h2 className="TodoCounter">Has completado {completed} TODOs de {total}</h2>
  );
}

export { TodoCounter };
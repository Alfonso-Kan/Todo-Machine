import React from 'react';
import { TodoContext } from '../TodoContext';
import './ToDoCounter.css';

function TodoCounter({ total, completed }) {

  /* Esto funciona exactamente igual que el TodoContext.Consumer */
    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext)

    return (
      <h1 className='TodoCounter'>
        {/*Se cambia de completed a completedTodos y total a totalTodos */}
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    );
  }

export { TodoCounter };
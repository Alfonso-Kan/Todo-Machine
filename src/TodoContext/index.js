import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();


function TodoProvider({children}) {
/* Aqui podemos encapsular la lógica que queremos compartir entre varios niveles de la aplicación */
const {
    item: toDos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSerchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  
  const completedTodos = toDos.filter(
    todo => !!todo.completed
  ).length
  const totalTodos = toDos.length;

  const searchedTodos = toDos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )

  const addTodo = (text) => {
    const newTodos = [...toDos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  /*
  Se le pasa un children para que pueda incorporar cualquier componente hijo
  y en el value se pasa toda la información que queramos exponer globalmente
  en el contexto de la aplicación.
  */

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSerchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }
import React from 'react';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

   const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
   } =  React.useContext(TodoContext)

    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
          {/*
          Eliminamos el ContextFunction y usamos el useContext para más comodidad
          */}
              <TodoList>
              {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
              )}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

              {searchedTodos.map(todo => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
    
          <CreateTodoButton
          setOpenModal={setOpenModal}
          />
          {/* Funcionalidad para saber si un modal debe estar abierto o no */}
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </>
      );
}

export { AppUI }
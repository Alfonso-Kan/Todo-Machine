import React from 'react';
import './ToDoSearch.css';
import { TodoContext } from '../TodoContext';

//Eliminamos las properties de aqui arriba y hacemos lo mismo
function TodoSearch() {
    const {
        searchValue,
        setSerchValue,
    } = React.useContext(TodoContext)

    return (
        <input
        className="TodoSearch"
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
            setSerchValue(event.target.value);
        }}
        />
    );
}

export { TodoSearch }
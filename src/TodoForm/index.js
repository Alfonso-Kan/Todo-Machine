import React from "react"
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  /*
  VAMOS A CREAR UN NUEVO ESTADO LOCAL
- Esto es porque no se necesita saber en tiempo real que es lo que está escribiendo el usuario en el textarea
- Solo cuando se de click en ese momento si se necesitaria saber que es lo que escribieron los usuarios
- Y que ya están seguro cuando le den al botón de añadir
  */
 const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    //Esto evita que la página se recarge y que el botton haca su acción por defecto.
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
 }

 const onCancel = () => {
    setOpenModal(false)
 }

 const onChange = (event) => {
    setNewTodoValue(event.target.value)
 }

  return (
    /*
    - En el formulario es donde se ejecutará el evento tipo submit donde se controlará
    - Normalmente los formularios en versiones antiguas enviaban la url de cada uno de sus lementos al haber un evento
    - Es mejor almacenar toda esa información en el localStorage
    */
     <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        {/* Text area para que no se haga un scroll horizontal */}
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla para el almuerzo"
        />

        {/*Boton para cancelar la ventana o el nuevo ToDo */}
        <div
        className="TodoForm-buttonContainer">
            <button
            onClick={onCancel}
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            >Cancelar</button>
            <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
            >Añadir</button>
        </div>
     </form>
  );
}

export { TodoForm };
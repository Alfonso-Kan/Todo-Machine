import './CreateToDoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button
        className='CreateTodoButton'
        onClick={
            // (event) => {
            //     console.log('le diste click')
            //     console.log(event)
            //     console.log(event.target)
            () => {
                setOpenModal(state => !state)//Esto solo actualiza el estado al estado anterior
            } 
        }>+</button>
    );
}

export { CreateTodoButton };
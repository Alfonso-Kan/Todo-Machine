/*
Esto va a servir para lo que necesitemos en el futuro
para hacer todos en este caso
*/
import React from "react";
import ReactDOM from 'react-dom';//esta vez lo usaremos para crear modales
import './Modal.css'

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
           {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }
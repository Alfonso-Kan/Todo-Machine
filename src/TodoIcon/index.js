/*
ReactComponent así es como `createreactapp` nos permite importar nuestros
íconos, asi no se porque
Si queremos importar varios svg tenemos que usar los export nombrados usando `as`
*/
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'  
import './ToDoIcon.css'

const iconTypes = {
    "check" : (color) => <CheckSVG className="Icon-svg"  fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };
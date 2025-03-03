import { useState } from 'react';
import './Item.css';

function Item({nombre, precio}) {

    const[numero, cambiarEstado] = useState("")
    
    const modificarEstado = (operacion) => {
        if (operacion === "Agregado"){
            cambiarEstado("Se agregó al carrito");
        }
        else{
            cambiarEstado("Se eliminó del carrito");
        }
    }

    return(
        <div className="card">
            <h2 className="Ctitle">{nombre}</h2>
            <h3 className="Ctext">{precio}</h3>
            <button className="btn" onClick={() => modificarEstado("Eliminado")}>Quitar del carrito</button>
            <button className="btn" onClick={() => modificarEstado("Agregado")}>Agregar al carrito</button>
            <p id="agregado"> {numero} </p>
        </div>
    );
};

export default Item;
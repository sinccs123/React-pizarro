import { Link } from 'react-router-dom';
import './Item.css';

function Item({id, nombre, precio, usarFiltro}) {

    function agregarCarrito() {
        console.log("Vas a agregar:", nombre);
    }

    return(
        <div className="card">
            <h2 className="Ctitle">{nombre}</h2>
            <h3 className="Ctext">{"$" + precio}</h3>
            <button  disabled={!nombre} className="btn" onClick={() => agregarCarrito()}>Agregar al carrito</button>
            <Link className="btn" to={`/detalle/${id}`}>
                <button  disabled={!nombre} className="btn">
                    Ver detalle
                </button>
            </Link>
        </div>
    );
};

export default Item;
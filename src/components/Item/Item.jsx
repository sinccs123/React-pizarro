import './Item.css';

function Item({id, nombre, precio, usarFiltro}) {

    function agregarCarrito() {
        console.log("Vas a agregar:", nombre);
    }

    return(
        <div className="card">
            <h2 className="Ctitle">{nombre}</h2>
            <h3 className="Ctext">{"$" + precio}</h3>
            <button className="btn" onClick={() => agregarCarrito()}>Agregar al carrito</button>
            <button className="btn" onClick={() => usarFiltro("Detalle", id)}>Ver detalle</button>
        </div>
    );
};

export default Item;
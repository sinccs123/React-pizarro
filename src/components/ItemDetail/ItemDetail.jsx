import { useEffect } from 'react';
import './ItemDetail.css';

function ItemDetail({ item, usarFiltro }) {

    const {id, nombre, precio, descripcion, oferta, stock} = item;

    function agregarCarrito() {
        console.log("Vas a agregar:", nombre);
    }

    useEffect(() => {
        console.log(item);
    },[]);

    return(
        <div className="card-detail">
            <button className="btn-back" onClick={() => usarFiltro("Todos")}></button>

            {
                oferta && <p><span className='span-positive'>Producto en Oferta</span></p>
            }
            <h2 className="Ctitle-detail">{nombre}</h2>
            <h3 className="Ctext-detail">{"$" + precio}</h3>
            <p>Descripcion: {descripcion}</p>

            {
                stock > 0 ?
                <p>Quedan: {stock} unidades</p> :
                <p className='span-negative'>Producto agotado!</p>
            }

            <button disabled={stock === 0} className="btn-detail" onClick={() => agregarCarrito()}>Agregar al carrito</button>

        </div>
    );
};

export default ItemDetail;
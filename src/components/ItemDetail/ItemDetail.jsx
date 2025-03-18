import { useParams } from 'react-router';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { FetchData } from '../../FetchData';
import { Link } from 'react-router-dom';

function ItemDetail() {
    
    const { id } = useParams();

    const [detalle, setDetalle] = useState(null) 

    function agregarCarrito() {
        console.log("Vas a agregar:", nombre);
    }

    useEffect(()=> {
        FetchData().then(response =>{
            const detalleDelProducto = response.find(el => el.id === parseInt(id));
            setDetalle(detalleDelProducto);
        })
            .catch(err => console.error(err));
    },[id]);

    return(
            !detalle ? <p>Cargando</p>:
        <div className="container-card">
                <div className="card-detail"> 

                {
                    detalle.oferta && <p><span className='span-positive'>Producto en Oferta</span></p>
                }
                <h2 className="Ctitle-detail">{detalle.nombre}</h2>
                <h3 className="Ctext-detail">{"$" + detalle.precio}</h3>
                <p>Descripcion: {detalle.descripcion}</p>

                {
                    detalle.stock > 0 ?
                    <p>Quedan: {detalle.stock} unidades</p> :
                    <p className='span-negative'>Producto agotado!</p>
                }

                <button disabled={detalle.stock === 0} className="btn-detail" onClick={() => agregarCarrito()}>Agregar al carrito</button>
                <Link className="btn-detail" to="/"><button className="btn-detail">Volver al inicio</button></Link>

            </div>
        </div>
    );
};

export default ItemDetail;
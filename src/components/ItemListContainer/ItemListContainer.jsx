import {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { FetchData } from '../../FetchData';
import { useParams } from 'react-router-dom';


function ItemListContainer () {

    const [TodosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        if(TodosLosProductos.length === 0){
            FetchData().then(response => {
                setTodosLosProductos(response);
                if (categoria) {
                    const productosFiltrados = response.filter(el => el.categoria === categoria);
                    setMisProductos(productosFiltrados); 
                    setLoading(false);
            } else {
                setMisProductos(response);
                setLoading(false);
            };
        })
            .catch(err => console.error(err));
        };

        if (categoria) {
            const productosFiltrados = TodosLosProductos.filter(el => el.categoria === categoria);
            setMisProductos(productosFiltrados);
        } else {
            setMisProductos(TodosLosProductos);
        }; 
    }, [categoria]);
    

    return(
        <>

        <div className="card-container">
            {
                loading ? <p>Cargando Productos</p> :
                misProductos.map((el, index) => {
                    return(
                        <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} />
                    );
                })
            }
        </div>  
        </>
    );
};

export default ItemListContainer;
import {useEffect, useState} from 'react';
import {productos} from '../../productos';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { FetchData } from '../../FetchData';



function ItemListContainer () {

    const [TodosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    const usarFiltro = (filtro)=> {
        switch(filtro){
                case "Todos":
                setMisProductos(TodosLosProductos);
                break;
            
                case "Ninguno":
                setMisProductos([]);
                break;

                case "Baratos":
                    setMisProductos(TodosLosProductos.filter(el => el.precio <= 200));
                    break;

                case "Caros":
                    setMisProductos(TodosLosProductos.filter(el => el.precio >= 300));
                    break;

            default:
                break;
        }
    };

    /*Hook fx*/
    useEffect(() => {
        FetchData().then(response => {
            setTodosLosProductos(response);
            setMisProductos(response);
            setLoading(false);
        })
        .catch(err => console.log(err));
    },[])

    return(
        <>
        <div className="Filtros">
            <button onClick={() => usarFiltro("Todos")}>Todos</button>
            <button onClick={() => usarFiltro("Baratos")}>Baratos</button>
            <button onClick={() => usarFiltro("Caros")}> Caros</button>
            <button onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
        </div>

        <div className="card-container">
            {
                loading ? <p>Cargando Productos</p> :
                misProductos.map(listado =>{
                    return(
                        <Item key={listado.id} nombre={listado.nombre} precio={listado.precio}/>
                    );
                })
            }
        </div>  
        </>
    );
};

export default ItemListContainer;
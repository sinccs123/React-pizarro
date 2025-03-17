import {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { FetchData, getAPI, postAPI } from '../../FetchData';
import ItemDetail from '../ItemDetail/ItemDetail';



function ItemListContainer () {

    const [TodosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [detalleFiltrado, setDetalleFiltrado] = useState(false);

    const usarFiltro = (filtro, id)=> {
        switch(filtro){
                case "Todos":
                setDetalleFiltrado(false);
                setMisProductos(TodosLosProductos);
                break;
            
                case "Ninguno":
                    setDetalleFiltrado(false);
                    setMisProductos([]);
                    break;

                case "Baratos":
                    setMisProductos(TodosLosProductos.filter(el => el.precio <= 200));
                    break;

                case "Caros":
                    setMisProductos(TodosLosProductos.filter(el => el.precio >= 300));
                    break;
                
                case "Detalle":
                    setDetalleFiltrado(true);
                    setMisProductos(TodosLosProductos.filter(el => el.id === id));
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
        .catch(err => console.error(err));
    
    /*    fetch("https://jsonplaceholder.typicode.com/todos") .then(response => response.json())
        .then (data => console.log(data))
        .catch(err => console.error(err));

        getAPI("https://jsonplaceholder.typicode.com/todos")
        .then(data => console.log(data));

        postAPI("https://jsonplaceholder.typicode.com/posts", {
            title: "CustomTask",
            userId: 2,
            body: "To complete",
        }) .then(data => console.log(data));
    */

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
                detalleFiltrado ? <ItemDetail item={misProductos[0]} usarFiltro={usarFiltro}/> :
                misProductos.map((el, index) => {
                    return(
                        <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} usarFiltro={usarFiltro}/>
                    );
                })
            }
        </div>  
        </>
    );
};

export default ItemListContainer;
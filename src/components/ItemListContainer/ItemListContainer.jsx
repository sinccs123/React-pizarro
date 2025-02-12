import './ItemListContainer.css';
import Item from '../Item/Item';

function ItemListContainer () {
    return(
        <div className="card-container">
            <Item nombre="Producto 1" precio={"$ "+100}/>
            <Item nombre="Producto 2" precio={"$ "+200}/>
            <Item nombre="Producto 3" precio={"$ "+350}/>
        </div>  
    );
};

export default ItemListContainer;
import './Item.css';

function Item({nombre, precio}) {


    function Comprar() {
        console.log("Vas a agregar", nombre)
    }
    

    return(
        <div className="card">
            <h2 className="Ctitle">{nombre}</h2>
            <h3 className="Ctext">{precio}</h3>
            <button className="btn" onClick={() => Comprar()}>Comprar</button>
        </div>
    );
};

export default Item;
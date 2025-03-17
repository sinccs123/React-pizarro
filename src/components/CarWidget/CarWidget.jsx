import './CarWidget.css';

function Carrito () {
    return(
        <div className="CarritoBtn">
            <img src="../src/assets/carrito.png" alt="carrito" className="carrito"/>
            <span className="infoCarrito">4</span>
        </div>
    );
};

export default Carrito;
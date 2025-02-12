import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';

function Navbar() {
    return(
        <header>
            <nav className="menu">
                <img src="./src/assets/logo.png" alt="logo" className="logo"/>
                <ul className="opciones">
                <li className="opciones-items">Inicio</li>
                <li className="opciones-items">Productos</li>
                <li className="opciones-items">Contacto</li>
                </ul>
                <CarWidget />
            </nav>        
        </header>
    );
};

export default Navbar;
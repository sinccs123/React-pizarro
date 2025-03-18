import {Link} from 'react-router-dom'
import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';

function Navbar() {
    return(
        <header>
            <nav className="menu">
                <Link to="/"><img src="../src/assets/logo.png" alt="logo" className="logo"/></Link>
                <ul className="opciones">
                    <li className="opciones-items">
                        <Link to="/">
                            Productos
                        </Link>
                    </li>
                    <li className="opciones-items">
                        <Link to="/categoria/bebida">
                            Bebidas
                        </Link>
                    </li>
                    <li className="opciones-items">
                        <Link to="/categoria/comida">
                            Comidas
                        </Link>
                    </li>
                </ul>
                <CarWidget />
            </nav>        
        </header>
    );
};

export default Navbar;
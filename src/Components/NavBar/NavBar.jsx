
// CSS
import "./NavBar.css";
// COMPONENTS
import CartWidget from '../CartWidget/CartWidget';
import { NavItem } from 'react-bootstrap';
// DEPENDENCYS



export const NavBar = () => {


    return (
        <>
            <nav className="header__nav">

                <ul className="header__ul">
                    <li to="/" className="header__li">Home</li>
                    <li to="/Products" className="header__li">Productos</li>
                    <li to="/Products"></li>
                    <li to="/About" className="header__li">Categorias</li>
                    

                    {
                        <li to="/Cart" className="header__li"><CartWidget /></li>
                    }
                </ul>
            </nav>           
        </>


    );
};

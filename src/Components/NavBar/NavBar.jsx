
// CSS
import logo from '../../logo.png';
import "./NavBar.css";
// COMPONENTS
import CartWidget from '../CartWidget/CartWidget';
import { NavItem } from 'react-bootstrap';
import { ItemLi } from "./ItemLi";
import { ItemLiDropdown } from "./ItemLiDropdown";
// DEPENDENCYS
import { Link } from 'react-router-dom';



export const NavBar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg header__nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <ul className="header__ul navbar-nav me-auto mb-2 mb-lg-0">
                        <ItemLi href={"/"}> Inicio  </ItemLi>
                        <li className="nav-item header__li">
                        <Link className="nav-link" to={"/productos"}>Productos</Link>
                        </li>
                        <Link className="nav-link" to={"/category/zapatillas"}>zapatillas</Link>
                        <Link className="nav-link" to={"/category/remeras"}>remeras</Link>
                        <Link className="nav-link" to={"/category/gorras"}>gorras</Link>                        
                        <ItemLi href={"/"}> <CartWidget></CartWidget>  </ItemLi>
                    </ul>
                </div>

            </nav>
        </>


    );
};

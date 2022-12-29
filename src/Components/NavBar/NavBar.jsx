
// CSS
import logo from '../../logo.png';
import "./NavBar.css";
// COMPONENTS
import CartWidget from '../CartWidget/CartWidget';
import { NavItem } from 'react-bootstrap';
import { ItemLi } from "./ItemLi";
import { ItemLiDropdown } from "./ItemLiDropdown";
// DEPENDENCYS



export const NavBar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg header__nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <ul className="header__ul navbar-nav me-auto mb-2 mb-lg-0">
                        <ItemLi href={"/"}> Inicio  </ItemLi>
                        <ItemLi href={"/"}> Productos </ItemLi>
                        <ItemLiDropdown href={"#"} hrefItem={"/"} dropdownItem={"Pelotas"} >Categorias</ItemLiDropdown>
                        <ItemLi href={"/"}> Categorias  </ItemLi>
                        <ItemLi href={"/"}> <CartWidget></CartWidget>  </ItemLi>
                    </ul>
                </div>

            </nav>
        </>


    );
};
